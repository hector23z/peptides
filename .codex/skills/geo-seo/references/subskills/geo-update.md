# GEO-SEO Update Playbook

## Purpose

Update this Codex bundle from a reviewed upstream GEO-SEO release without
silently discarding local changes or reintroducing Claude-specific wiring.

## Update workflow

### 1. Find the installed bundle

Check the project-local path first:

```text
.codex/skills/geo-seo/
```

For user-wide installation, resolve `$CODEX_HOME/skills/geo-seo/` or, when
`CODEX_HOME` is unset, `~/.codex/skills/geo-seo/`.

### 2. Obtain and review upstream changes

Clone the upstream repository into a temporary directory only after the user
requests an update. Compare its `skills/`, `agents/`, `geo/SKILL.md`, scripts,
schemas, and templates with this adapted bundle. Because the upstream files use
Claude-specific layout and metadata, review methodology changes separately from
runtime changes before copying anything.

Classify changes as new, modified, unchanged, or removed. Never delete a local
file solely because it disappeared upstream; report it for user review.

### 3. Reapply the Codex adaptation

Keep the root `SKILL.md`, `README.md`, `install.ps1`, and `install.sh` Codex
entrypoints. Port substantive methodology changes into the corresponding files
under `references/subskills/` and `references/agent-playbooks/`, then preserve:

- the 0–100 composite scoring weights;
- passage-level citability scoring;
- crawler, robots.txt, `llms.txt`, and brand visibility checks;
- platform, technical, content, schema, reporting, and comparison workflows.

Use the provided installer to place the reviewed bundle at the requested Codex
scope. The installer copies files and does not edit `.codex/hooks.json`.

### 4. Dependencies and validation

If `requirements.txt` changed, ask before installing dependencies or use the
optional isolated environment supported by `install.ps1 -InstallDependencies`.
Run the bundled validation commands and confirm the updated paths exist. Report
dependency failures without hiding them.

### 5. Report the update

```text
GEO-SEO Update Complete
=======================
New files:      [count]
Modified files: [count]
Unchanged:      [count]
Removed upstream (kept locally): [count]
Dependencies:   [updated / unchanged / failed]
```

Tell the user to start a new Codex session after changing installed skill files
so the updated metadata is discovered.

## Safety notes

- Do not modify user configuration files such as `.codex/hooks.json`.
- Do not delete local files automatically.
- Do not claim an upstream change is applied until the adapted file and its
  references have been checked.
