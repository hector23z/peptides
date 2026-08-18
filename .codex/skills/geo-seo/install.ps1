[CmdletBinding()]
param(
    [string]$Destination,
    [switch]$InstallDependencies
)

$ErrorActionPreference = 'Stop'
$source = (Resolve-Path -LiteralPath $PSScriptRoot).Path

if (-not $Destination) {
    $userProfile = [Environment]::GetFolderPath('UserProfile')
    $codexRoot = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $userProfile '.codex' }
    $Destination = Join-Path $codexRoot 'skills\geo-seo'
}

$destinationPath = [IO.Path]::GetFullPath($Destination)
$sourcePath = [IO.Path]::GetFullPath($source)
if ($destinationPath.TrimEnd('\') -ieq $sourcePath.TrimEnd('\')) {
    Write-Host "GEO-SEO ya está en la ubicación de destino: $sourcePath"
    exit 0
}

New-Item -ItemType Directory -Path $destinationPath -Force | Out-Null
Get-ChildItem -LiteralPath $sourcePath -Force | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination $destinationPath -Recurse -Force
}

if ($InstallDependencies) {
    $python = Get-Command python -ErrorAction SilentlyContinue
    if (-not $python) {
        throw 'No se encontró Python en PATH; instala Python 3.8+ o ejecuta sin -InstallDependencies.'
    }

    $venv = Join-Path $destinationPath '.venv'
    & $python.Source -m venv $venv
    $isWindowsPlatform = [Environment]::OSVersion.Platform -eq [PlatformID]::Win32NT
    $venvPython = if ($isWindowsPlatform) { Join-Path $venv 'Scripts\python.exe' } else { Join-Path $venv 'bin/python' }
    & $venvPython -m pip install --upgrade pip
    & $venvPython -m pip install -r (Join-Path $destinationPath 'requirements.txt')
    Write-Host "Dependencias instaladas en $venv"
}

Write-Host "GEO-SEO instalado en $destinationPath"
Write-Host 'Inicia una nueva sesión de Codex para que descubra la skill.'
