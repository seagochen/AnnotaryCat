# AnnotaryCat フィードバック

[English](README.md) · [簡体字中国語](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt.md) · [Русский](README.ru.md)

このリポジトリでは、AnnotaryCat の不具合報告と機能の要望を受け付けています。

> **ここに投稿した内容はすべて公開されます。** 誰でも issue を読み、添付ファイルをダウンロードできます。パスワード、API トークン、SSH 鍵、公開してはいけない画像やデータは投稿しないでください。

## 1. 診断パッケージを作る

診断パッケージは、AnnotaryCat がお使いのコンピューター上で作る `.zip` ファイルです。中身は次のとおりです。

- `system.json`：AnnotaryCat のバージョン、OS、CPU、GPU、設定（パスワード、トークン、ワークスペースのパスは含みません）
- `logs/`：最近数日間の操作ログ
- `crashes/`：AnnotaryCat が正常に終了しなかったときのクラッシュ記録

ログに記録されるのはコマンド名、エラーコード、処理時間だけです。プロジェクトのデータ、アノテーション、ファイルの内容、パラメーターの値、パスワードは含まれません。ホームフォルダーは `~` と表示されます。

AnnotaryCat の既定の表示言語は英語です。英語のメニュー項目は次の 2 つです。

| メニュー項目 | 内容 |
|---|---|
| **Help › Send a problem report…**（ヘルプ › 問題を報告…） | **おすすめ。** 診断パッケージを作り、このリポジトリの新しい issue のページをブラウザーで開きます（タイトルとテンプレートは入力済み）。診断パッケージの場所も表示します。 |
| **Help › Export diagnostics…**（ヘルプ › 診断パッケージを書き出す…） | 診断パッケージを選んだ場所に保存します。その後、[新しい issue](../../issues/new) をご自身で開いてください。 |

添付する前に、診断パッケージの中身を確認してください。ダイアログから中のファイルを一つずつ開けます。公開したくない内容（フォルダー名など）があれば、そのファイルを zip から削除するか、診断パッケージを添付せずに文章で問題を説明してください。

**AnnotaryCat が起動しない場合**は、代わりにログフォルダーのファイル（`annotarycat-*.log` と `crash-*.log` を zip にまとめたもの）を添付してください。

| OS | ログフォルダー |
|---|---|
| Windows | `%LOCALAPPDATA%\AnnotaryCat\logs` |
| macOS | `~/Library/Logs/AnnotaryCat` |
| Linux | `$XDG_STATE_HOME/annotarycat/logs`（通常は `~/.local/state/annotarycat/logs`） |

「Send a problem report…」で作った診断パッケージは、ログフォルダー内の `reports` フォルダーに保存されています。

## 2. issue を書く

**タイトル：** `[Bug] AnnotaryCat <バージョン> (<OS>): <問題の要約>`

例：`[Bug] AnnotaryCat 0.2.0 (windows-x86_64): COCO への書き出しが 50% で止まる`。バージョンは Help › About AnnotaryCat（ヘルプ › バージョン情報）で確認できます。

**本文：** 次のテンプレートを使ってください。「Send a problem report…」を使うと自動で入力されます。見出しは英語のまま残し、その下の内容はどの言語で書いてもかまいません。

```markdown
## Description

何が起きたかを 1〜2 文で。

## Steps to reproduce

1.
2.
3.

## Expected behavior

期待していた結果。

## Actual behavior

実際に起きたこと（表示されたエラーメッセージも）。

## Environment

- Version:
- OS:
- Diagnostics bundle:（.zip ファイルをここにドラッグ）
```

最後に **`.zip` ファイルを本文にドラッグして**添付し、もう一度内容を確認してから送信してください。

ヒント：

- 1 つの issue には 1 つの問題だけを書いてください。送信の前に[既存の issue](../../issues) を検索し、同じ問題があればそこにコメントを追加してください。
- スクリーンショットは役に立ちます。ただし個人的な情報が写っていないか確認してください。
- 毎回起きるのか、ときどき起きるのかも書いてください。

## 3. 機能の要望

タイトル：`[Feature] <ほしい機能>`。本文には、何をしたいのか、なぜ必要なのか、今はどのようにしているのかを書いてください。診断パッケージは不要です。
