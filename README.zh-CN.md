# AnnotaryCat 反馈

[English](README.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt.md) · [Русский](README.ru.md)

这个仓库收集 AnnotaryCat 的问题报告和功能建议。

> **这里的所有内容都是公开的。** 任何人都能阅读 issue 并下载其中的附件。请不要上传密码、API 令牌、SSH 密钥，也不要上传你无权公开的图片或数据。

## 1. 生成诊断包

诊断包是 AnnotaryCat 在你的电脑上生成的一个 `.zip` 文件，包含：

- `system.json`：AnnotaryCat 版本、操作系统、CPU、GPU 和设置（不含密码、令牌和工作区路径）；
- `logs/`：最近几天的操作日志；
- `crashes/`：AnnotaryCat 没有正常退出时留下的崩溃记录。

日志只记录命令名、错误代码和耗时，不含项目数据、标注、文件内容、参数值或密码，用户主目录显示为 `~`。

AnnotaryCat 的默认界面语言为英语。切换为简体中文后，菜单项如下：

| 菜单项 | 作用 |
|---|---|
| **帮助 › 发送问题报告…** | **推荐。** 生成诊断包，在浏览器中打开本仓库的新 issue 页面（标题和模板已经填好），并告诉你诊断包在哪里。 |
| **帮助 › 导出诊断包…** | 把诊断包保存到你选择的位置，然后自己打开一个[新 issue](../../issues/new)。 |

添加附件之前，请先检查诊断包：对话框可以逐个打开其中的文件。如果有不想公开的内容（例如某个文件夹名），可以把那个文件从 zip 里删掉，或者不附诊断包，只用文字描述问题。

**如果 AnnotaryCat 无法启动**，请改为附上日志文件夹中的文件（把 `annotarycat-*.log` 和 `crash-*.log` 打成 zip）：

| 系统 | 日志文件夹 |
|---|---|
| Windows | `%LOCALAPPDATA%\AnnotaryCat\logs` |
| macOS | `~/Library/Logs/AnnotaryCat` |
| Linux | `$XDG_STATE_HOME/annotarycat/logs`（通常是 `~/.local/state/annotarycat/logs`） |

「发送问题报告…」生成的诊断包保存在日志文件夹下的 `reports` 文件夹中。

## 2. 填写 issue

**标题：** `[Bug] AnnotaryCat <版本> (<系统>): <一句话概括问题>`

例如：`[Bug] AnnotaryCat 0.2.0 (windows-x86_64): 导出 COCO 时停在 50%`。版本号可以在 帮助 › 关于 AnnotaryCat 中查看。

**正文：** 请使用下面的模板，「发送问题报告…」会自动填好。各节标题保持英文不变，标题下面的内容可以用任何语言填写：

```markdown
## Description

问题是什么，用一两句话说明。

## Steps to reproduce

1.
2.
3.

## Expected behavior

你期望的结果。

## Actual behavior

实际发生了什么，包括界面上显示的错误信息。

## Environment

- Version:
- OS:
- Diagnostics bundle:（把 .zip 文件拖到这里）
```

然后**把 `.zip` 文件拖进正文**作为附件，再检查一遍，提交。

提示：

- 一个 issue 只写一个问题。提交前先搜索[已有的 issue](../../issues)；如果已经有人报告过，请在下面补充评论。
- 截图很有帮助，但请确认其中没有隐私内容。
- 请说明问题是每次都出现，还是偶尔出现。

## 3. 功能建议

标题：`[Feature] <你希望增加的功能>`。正文中请说明你想做什么、为什么需要，以及现在是怎么做的。功能建议不需要附诊断包。
