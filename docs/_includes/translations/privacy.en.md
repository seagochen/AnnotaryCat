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
Questions: <https://github.com/seagochen/AnnotaryCat/issues>
