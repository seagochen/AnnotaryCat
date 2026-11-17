**AnnotaryCat collects no data.** We run no server that receives your data: no accounts, no cloud storage, no telemetry, no usage analytics, no advertising, and no third-party analytics or crash-reporting SDKs.

### Local annotation works entirely offline

Starting the app and annotating, saving and exporting local data require no network. The app makes no automatic outbound network requests: no update checks, telemetry or automatic crash uploads. It does not download models, fonts or runtime dependencies at startup. This statement covers the app's local annotation features; system store services, remote features you configure and use, and browsers or external programs you choose to open have the boundaries described below.

### Where your data stays

- Images, videos, text, annotations and project settings stay on your computer: by default in the `AnnotaryCat` data folder in your Documents folder, or in a folder you choose for a project or on a disk you mount.
- The app's own settings, logs, crash records and login keys stay in the app folder on this computer. Saved servers and SSH login keys are kept in a folder on this computer shared with Crescent from the same developer (`%APPDATA%\homology` on Windows); they never leave your computer and hold no project data or passwords. In the macOS sandboxed version both the data folder and the app folder are inside the app's container.
- Logs record only command names, error codes and durations. They never record project data, annotations, file contents, parameter values or passwords. Your home folder appears in log lines as `~`.

### When data leaves your computer

Only when you explicitly ask, and only to a destination you choose:

- **Your own SSH server.** When your dataset lives on a remote host, the app connects to the host you name using the system's own `ssh` / `sftp`.
- **S3 / S3-compatible storage you configure.** When you configure and use a remote dataset, the app invokes your installed AWS CLI to access storage and authentication services using your chosen bucket, endpoint and credentials configuration. These requests never pass through our servers.
- **Servers you run custom models on.** When you choose to train, evaluate or predict on your own SSH server, the app copies your model code, the data the run needs and the weights to that server, and fetches the results back; runs on this computer copy nothing. Each project can forbid copying code and data to a given host. Your code runs in the environment you choose, and what it does on the network is yours.
- **AI tools you connect.** When you turn on the control channel or MCP, AI tools you run on this computer can read and write the projects and folders you allow. Where those tools send data depends on the AI service you use. AI access can be turned off for each project.
- **Problem reports.** The app never sends anything by itself. When you choose "Send a problem report", it opens an issue page on GitHub in your browser, and you review the diagnostics bundle before deciding whether to attach it. Once attached, the issue and the bundle are public and subject to GitHub's privacy policy.
- **Web pages you open.** Links to terms, privacy and subscription management open in your system browser only when you choose them. The page provider handles its network requests.

The control channel is reachable only from this computer: the Mac App Store version uses a Unix socket inside the app's container and opens no network port; other versions listen only on `127.0.0.1`. MCP uses local standard input/output (or the same local channel when connecting to an open window). The SSH password helper uses a Unix socket only the current user can open on macOS and Linux, and loopback on Windows. These connections do not expose a service to other machines or upload data to our servers.

### Store services

In-app purchases use system store APIs (StoreKit 2 on macOS, `Windows.Services.Store` on Windows). Purchasing, restoring, and requesting products or subscription status may cause system store services to communicate with the store operator. The app does not implement online licence verification, route requests through our servers, or attach annotation data to transactions. The store operator handles transactions under its own privacy policy. Network activity by the system store, operating system, browser or external tools you run is outside the local annotation features covered by the offline statement above.

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
