**报告问题或提建议：** 在 <https://github.com/seagochen/AnnotaryCat/issues> 新建问题。应用里的「帮助 › 问题反馈…」会先让你检查文件，选择保存位置并导出日志 ZIP；选择继续反馈才会打开这个页面，由你附上诊断包并提交。诊断包只含版本、系统信息和日志（日志只记录命令名、错误代码和耗时，不含项目数据、文件内容或密码）。附上后，问题和附件对所有人公开。

**订阅：**
- 订阅、续订和取消都在你安装应用的商店里处理：
  - Mac App Store：「App Store › 账户 › 订阅」；
  - Microsoft Store：<https://account.microsoft.com/services>（用购买时的 Microsoft 账户登录）。
- 应用的「帮助 › AnnotaryCat Pro…」里的「管理订阅」会打开对应的页面。
- 换了电脑或重装后，用购买时的账户登录商店，然后在「帮助 › AnnotaryCat Pro…」中点「恢复购买」。
- 两个商店的订阅分别购买，不能互通。
- 退款：Mac App Store 请向 Apple 申请；Microsoft Store 请向 Microsoft 申请，按其销售条款和当地法律处理。

**常见问题：**
- *数据存在哪里？* 默认在文档文件夹里的 `AnnotaryCat` 数据目录（Mac App Store 版在应用容器内）；链接目录的项目，以及旧版本保存到指定位置的项目，在你选择的位置。「首选项 › 文件位置」显示具体路径。在 Windows 上，应用的设置在 `%LOCALAPPDATA%\AnnotaryCat`，保存的服务器和 SSH 登录密钥在 `%APPDATA%\homology`，与同一开发者的 Crescent 共用。应用不会把数据发送给开发者；你选择远程数据源或在自己的服务器上运行模型时，文件与标注只在本机和你配置的服务器或存储之间传输。
- *ReID 能做什么？* ReID 是 Pro 功能。可以导入已有的 Market-1501 格式裁图数据集，浏览轨迹、排除不合格的轨迹，检查身份逻辑冲突，逐对审核候选对并定稿，然后导出为 Market-1501 或成对清单。用你自己的代码作为自定义模型训练，导出为 ONNX 后，可以在本机抽取特征、挖掘新的待审核候选对（主机上的数据集不支持抽取和挖掘）。
- *自定义模型需要什么？* 你自己的 Python 环境（本机或你的 SSH 服务器）和你自己的代码；应用提供模板，负责复制代码和数据、启动和取回结果，不在应用里训练。Mac App Store 版只能使用远程服务器上的环境。
- *Mac App Store 版重新安装后要再选一次数据集文件夹？* 沙盒授权与应用的签名绑定，重新安装或更换版本后可能需要重新选择链接的数据集文件夹。
- *订阅结束后数据还在吗？* 在。需要 Pro 的项目仍可浏览和导出，只是在重新订阅前不能修改。

## English

**Report a problem or suggest a feature:** open an issue at <https://github.com/seagochen/AnnotaryCat/issues>. In the app, Help › Report a problem… lets you review the files and export a diagnostics ZIP to a location you choose first. Continuing to GitHub opens that page for you to attach the bundle and submit. The bundle holds only the version, system information and logs (which record command names, error codes and durations, never project data, file contents or passwords). Once attached, the issue and the bundle are public.

**Subscriptions:**
- Subscribing, renewal and cancellation are handled by the store you installed the app from:
  - Mac App Store: App Store › Account › Subscriptions;
  - Microsoft Store: <https://account.microsoft.com/services>, signed in with the Microsoft account you bought it with.
- Manage subscription in the app's Help › AnnotaryCat Pro… opens the right page.
- On a new computer or after reinstalling, sign in to the store with the account you bought it with, then choose Restore purchases in Help › AnnotaryCat Pro….
- Subscriptions are bought separately in each store and do not carry over.
- Refunds: for the Mac App Store, ask Apple; for the Microsoft Store, ask Microsoft, under its Terms of Sale and the law where you live.

**Common questions:**
- *Where is my data?* By default in the `AnnotaryCat` data folder in your Documents folder (inside the app's container in the Mac App Store version); projects saved to a location you chose, or linked to a folder, stay there. Preferences › Storage shows the paths. On Windows, the app's settings are in `%LOCALAPPDATA%\AnnotaryCat`, and saved servers and SSH login keys are in `%APPDATA%\homology`, shared with Crescent from the same developer. The app sends no data to the developer. If you choose a remote data source or run a model on your own server, files and annotations move only between your computer and the server or storage you configure.
- *What can ReID do?* It is a Pro feature. You can import existing Market-1501-style crop datasets, browse tracks, set unusable ones aside, check identity conflicts, review candidate pairs and finalize, then export as Market-1501 or a pair list. With your own code trained as a custom model and exported to ONNX, you can extract features and mine new candidate pairs to review on this computer (not for datasets on a host).
- *What do custom models need?* Your own Python environment (on this computer or your SSH server) and your own code; the app gives templates, copies the code and data, starts the runs and fetches their results, and never trains inside the app. The Mac App Store version can use environments on remote servers only.
- *Why does the Mac App Store version ask for dataset folders again after a reinstall?* Sandbox permissions are tied to the app's signature; after a reinstall or a new version you may need to choose linked dataset folders again.
- *Is my data still there when a subscription ends?* Yes. Projects that need Pro can still be browsed and exported, but not changed until you subscribe again.
