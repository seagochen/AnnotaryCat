# AnnotaryCat 피드백

[English](README.md) · [중국어 간체](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** · [Español](README.es.md) · [Português](README.pt.md) · [Русский](README.ru.md)

이 저장소에서는 AnnotaryCat의 문제 보고와 기능 요청을 받습니다.

> **이곳의 모든 내용은 공개됩니다.** 누구나 issue를 읽고 첨부 파일을 내려받을 수 있습니다. 비밀번호, API 토큰, SSH 키, 공개해서는 안 되는 이미지나 데이터는 올리지 마세요.

## 1. 진단 패키지 만들기

진단 패키지는 AnnotaryCat이 사용자의 컴퓨터에서 만드는 `.zip` 파일이며, 다음 내용이 들어 있습니다.

- `system.json`: AnnotaryCat 버전, 운영체제, CPU, GPU, 설정 (비밀번호, 토큰, 작업 공간 경로는 제외)
- `logs/`: 최근 며칠간의 작업 로그
- `crashes/`: AnnotaryCat이 정상적으로 종료되지 않았을 때의 충돌 기록

로그에는 명령 이름, 오류 코드, 소요 시간만 기록됩니다. 프로젝트 데이터, 주석, 파일 내용, 매개변수 값, 비밀번호는 들어 있지 않으며, 홈 폴더는 `~`로 표시됩니다.

AnnotaryCat의 기본 인터페이스 언어는 영어입니다. 영어 메뉴 항목은 다음과 같습니다.

| 메뉴 항목 | 하는 일 |
|---|---|
| **Help › Send a problem report…** (도움말 › 문제 보고…) | **권장.** 진단 패키지를 만들고, 이 저장소의 새 issue 페이지를 브라우저에서 엽니다 (제목과 템플릿이 미리 채워져 있음). 진단 패키지의 위치도 알려 줍니다. |
| **Help › Export diagnostics…** (도움말 › 진단 패키지 내보내기…) | 진단 패키지를 원하는 위치에 저장합니다. 그런 다음 [새 issue](../../issues/new)를 직접 여세요. |

첨부하기 전에 진단 패키지를 확인하세요. 대화 상자에서 안의 파일을 하나씩 열어 볼 수 있습니다. 공개하고 싶지 않은 내용(예: 폴더 이름)이 있으면 해당 파일을 zip에서 지우거나, 진단 패키지 없이 문제를 글로 설명해 주세요.

**AnnotaryCat이 실행되지 않으면** 대신 로그 폴더의 파일(`annotarycat-*.log`와 `crash-*.log`를 zip으로 묶은 것)을 첨부하세요.

| 운영체제 | 로그 폴더 |
|---|---|
| Windows | `%LOCALAPPDATA%\AnnotaryCat\logs` |
| macOS | `~/Library/Logs/AnnotaryCat` |
| Linux | `$XDG_STATE_HOME/annotarycat/logs` (보통 `~/.local/state/annotarycat/logs`) |

"Send a problem report…"로 만든 진단 패키지는 로그 폴더 안의 `reports` 폴더에 보관됩니다.

## 2. issue 작성하기

**제목:** `[Bug] AnnotaryCat <버전> (<운영체제>): <한 줄 요약>`

예: `[Bug] AnnotaryCat 0.2.0 (windows-x86_64): COCO 내보내기가 50%에서 멈춤`. 버전은 Help › About AnnotaryCat (도움말 › 정보)에서 확인할 수 있습니다.

**본문:** 아래 템플릿을 사용하세요. "Send a problem report…"를 사용하면 자동으로 채워집니다. 제목(헤딩)은 영어 그대로 두고, 그 아래 내용은 어떤 언어로 써도 됩니다.

```markdown
## Description

무엇이 잘못되었는지 한두 문장으로.

## Steps to reproduce

1.
2.
3.

## Expected behavior

기대했던 결과.

## Actual behavior

실제로 일어난 일 (표시된 오류 메시지 포함).

## Environment

- Version:
- OS:
- Diagnostics bundle: (.zip 파일을 여기로 끌어다 놓기)
```

마지막으로 **`.zip` 파일을 본문으로 끌어다 놓아** 첨부하고, 내용을 한 번 더 확인한 뒤 제출하세요.

도움말:

- issue 하나에는 문제 하나만 적어 주세요. 먼저 [기존 issue](../../issues)를 검색하고, 같은 문제가 있으면 거기에 댓글을 남겨 주세요.
- 스크린샷이 도움이 됩니다. 단, 개인 정보가 보이지 않는지 확인해 주세요.
- 매번 일어나는지, 가끔 일어나는지도 적어 주세요.

## 3. 기능 요청

제목: `[Feature] <원하는 기능>`. 본문에는 무엇을 하고 싶은지, 왜 필요한지, 지금은 어떻게 하고 있는지를 적어 주세요. 진단 패키지는 필요 없습니다.
