---
title: Privacy Policy · 隐私政策
permalink: /privacy/
lang: zh-CN
---

# AnnotaryCat 隐私政策 / Privacy Policy

生效日期 / Effective date: 2026-10-17

适用于 Mac App Store、Microsoft Store 和直接下载的 AnnotaryCat。
Applies to AnnotaryCat from the Mac App Store, the Microsoft Store and direct downloads.

---

## 中文

**AnnotaryCat 不收集任何数据。** 我们没有接收你数据的服务器：没有账户、没有云存储、没有遥测、没有使用统计、没有广告，也没有第三方分析或崩溃上报 SDK。

### 你的数据留在哪里

- 图像、视频、文本、标注、项目设置都保存在你选择的工作区文件夹里，即你自己的电脑或你挂载的磁盘。
- 应用自己的设置、日志、崩溃记录和登录密钥只保存在本机的用户配置目录。在 macOS 沙盒版中，它们位于应用容器内。
- 日志只记录命令名、错误代码和耗时，不记录项目数据、标注、文件内容、参数值或密码。日志中的用户主目录显示为 `~`。

### 数据什么时候会离开你的电脑

只在你明确要求时，而且只发往你自己选择的目的地：

- **你自己的 SSH 服务器**：你把数据集放在远程主机上时，应用通过系统自带的 `ssh` / `sftp` 连接你指定的主机。
- **你连接的 AI 工具**：你在应用里开启控制通道或 MCP 后，你在本机运行的 AI 工具可以读写你允许的项目和文件夹。这些工具把数据发往哪里，由你使用的 AI 服务决定。每个项目都可以单独关闭 AI 访问。
- **问题报告**：应用不会自动发送任何内容。你选择「发送问题报告」时，应用在浏览器中打开 GitHub 上的问题页面，诊断包由你自己检查后决定是否附上。附上后，该问题和附件对所有人公开，并受 GitHub 隐私政策约束。

### 密码与密钥

- SSH 密码只用一次，不保存。
- 你选择「以后自动连接」时生成的登录密钥只保存在本机，只有你的用户账户能读取。
- 将来如果支持 API 令牌，它们会保存在系统钥匙串中。
- 密码、密钥和令牌永远不会写入项目文件、日志或命令结果。

### 儿童

本应用不面向儿童收集任何信息，因为它不收集任何信息。

### 变更与联系

本政策如有变更，会随应用更新发布，并在此页面注明生效日期。
如有疑问，请在 <https://github.com/seagochen/AnnotaryCat-Feedback/issues> 提交问题。

---

## English

**AnnotaryCat collects no data.** We run no server that receives your data: no accounts, no cloud storage, no telemetry, no usage analytics, no advertising, and no third-party analytics or crash-reporting SDKs.

### Where your data stays

- Images, videos, text, annotations and project settings stay in the workspace folder you choose, on your own computer or on a disk you mount.
- The app's own settings, logs, crash records and login keys stay in your user configuration folder on this computer. In the macOS sandboxed version they are inside the app's container.
- Logs record only command names, error codes and durations. They never record project data, annotations, file contents, parameter values or passwords. Your home folder appears in log lines as `~`.

### When data leaves your computer

Only when you explicitly ask, and only to a destination you choose:

- **Your own SSH server.** When your dataset lives on a remote host, the app connects to the host you name using the system's own `ssh` / `sftp`.
- **AI tools you connect.** When you turn on the control channel or MCP, AI tools you run on this computer can read and write the projects and folders you allow. Where those tools send data depends on the AI service you use. AI access can be turned off for each project.
- **Problem reports.** The app never sends anything by itself. When you choose "Send a problem report", it opens an issue page on GitHub in your browser, and you review the diagnostics bundle before deciding whether to attach it. Once attached, the issue and the bundle are public and subject to GitHub's privacy policy.

### Passwords and keys

- An SSH password is used once and not stored.
- A login key created when you choose "connect automatically from now on" stays on this computer, readable only by your user account.
- API tokens, if supported in the future, will go in the system keychain.
- Passwords, keys and tokens are never written to project files, logs or command results.

### Children

The app collects no information from children, because it collects no information at all.

### Changes and contact

Changes to this policy ship with app updates, and this page will show the date they take effect.
Questions: <https://github.com/seagochen/AnnotaryCat-Feedback/issues>
