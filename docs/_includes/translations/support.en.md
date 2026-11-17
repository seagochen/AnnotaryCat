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
