# AnnotaryCat Feedback

**English** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt.md) · [Русский](README.ru.md)

This repository collects problem reports and feature requests for AnnotaryCat.

> **Everything here is public.** Anyone can read the issues and download their attachments. Never post passwords, API tokens, SSH keys, or images and data you are not allowed to share.

## 1. Create the diagnostics bundle

The diagnostics bundle is a `.zip` file that AnnotaryCat creates on your computer. It contains:

- `system.json`: the AnnotaryCat version, operating system, CPU, GPU and settings (passwords, tokens and workspace paths are left out);
- `logs/`: the operation logs of the last few days;
- `crashes/`: the crash records, if AnnotaryCat did not close normally.

The logs record only command names, error codes and durations. They contain no project data, annotations, file contents, parameter values or passwords. Your home folder appears as `~`.

AnnotaryCat's menus are currently in Chinese. The menu items are:

| Menu item | What it does |
|---|---|
| Help › Send problem report… | **Recommended.** Creates the bundle, opens a new issue in this repository in your browser with the title and the template already filled in, and shows where the bundle is. |
| Help › Export diagnostics bundle… | Saves the bundle wherever you choose. Then open a [new issue](../../issues/new) yourself. |

Before you attach the bundle, look through it: the dialog can open every file in it. If something should not be public (a folder name, for example), remove that file from the zip or leave the bundle out and describe the problem in words.

**If AnnotaryCat does not start**, attach the files from its log folder instead (the `annotarycat-*.log` and `crash-*.log` files, zipped):

| System | Log folder |
|---|---|
| Windows | `%LOCALAPPDATA%\AnnotaryCat\logs` |
| macOS | `~/Library/Logs/AnnotaryCat` |
| Linux | `$XDG_STATE_HOME/annotarycat/logs` (usually `~/.local/state/annotarycat/logs`) |

Bundles made by 发送问题报告… are kept in the `reports` folder inside the log folder.

## 2. Write the issue

**Title:** `[Bug] AnnotaryCat <version> (<system>): <one-line summary>`

For example: `[Bug] AnnotaryCat 0.2.0 (windows-x86_64): the export to COCO stops at 50%`. You can find the version under 帮助 › 关于 AnnotaryCat (Help › About).

**Text:** use this template. 发送问题报告… fills it in for you. Keep the headings in English; write the text under them in any language.

```markdown
## Description

What went wrong, in one or two sentences.

## Steps to reproduce

1.
2.
3.

## Expected behavior

What you expected to happen.

## Actual behavior

What happened instead, including any error message shown.

## Environment

- Version:
- OS:
- Diagnostics bundle: (drag the .zip file here)
```

Then **drag the `.zip` file into the text** to attach it, check everything once more, and submit.

Tips:

- One problem per issue. Search the [existing issues](../../issues) first; if yours is there, add a comment instead.
- Screenshots help, as long as they show nothing private.
- Say whether it happens every time or only sometimes.

## 3. Feature requests

Title: `[Feature] <what you would like>`. In the text, describe what you want to do, why, and how you do it today. No diagnostics bundle is needed.
