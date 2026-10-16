# Feedback do AnnotaryCat

[English](README.md) · [Chinês simplificado](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · **Português** · [Русский](README.ru.md)

Este repositório reúne relatos de problemas e sugestões de recursos para o AnnotaryCat.

> **Tudo o que é publicado aqui é público.** Qualquer pessoa pode ler as issues e baixar os anexos. Não publique senhas, tokens de API, chaves SSH nem imagens ou dados que você não tenha permissão para compartilhar.

## 1. Criar o pacote de diagnóstico

O pacote de diagnóstico é um arquivo `.zip` que o AnnotaryCat cria no seu computador. Ele contém:

- `system.json`: a versão do AnnotaryCat, o sistema operacional, a CPU, a GPU e as configurações (sem senhas, tokens nem caminhos dos espaços de trabalho);
- `logs/`: os registros de operação dos últimos dias;
- `crashes/`: os registros de falha, caso o AnnotaryCat não tenha sido fechado normalmente.

Os registros guardam apenas nomes de comandos, códigos de erro e durações. Eles não contêm dados de projetos, anotações, conteúdo de arquivos, valores de parâmetros nem senhas. A sua pasta pessoal aparece como `~`.

O idioma padrão da interface do AnnotaryCat é o inglês. Os itens do menu em inglês são:

| Item do menu | O que faz |
|---|---|
| **Help › Send a problem report…** (Ajuda › Enviar relatório de problema…) | **Recomendado.** Cria o pacote, abre no navegador uma nova issue neste repositório com o título e o modelo já preenchidos e mostra onde o pacote está. |
| **Help › Export diagnostics…** (Ajuda › Exportar pacote de diagnóstico…) | Salva o pacote no local que você escolher. Depois, abra você mesmo uma [nova issue](../../issues/new). |

Antes de anexar o pacote, confira o conteúdo: a janela permite abrir cada arquivo. Se algo não deve ficar público (o nome de uma pasta, por exemplo), remova esse arquivo do zip ou não anexe o pacote e descreva o problema em palavras.

**Se o AnnotaryCat não abrir**, anexe os arquivos da pasta de registros (os arquivos `annotarycat-*.log` e `crash-*.log`, compactados em um zip):

| Sistema | Pasta de registros |
|---|---|
| Windows | `%LOCALAPPDATA%\AnnotaryCat\logs` |
| macOS | `~/Library/Logs/AnnotaryCat` |
| Linux | `$XDG_STATE_HOME/annotarycat/logs` (geralmente `~/.local/state/annotarycat/logs`) |

Os pacotes criados por Send a problem report… ficam na pasta `reports`, dentro da pasta de registros.

## 2. Escrever a issue

**Título:** `[Bug] AnnotaryCat <versão> (<sistema>): <resumo em uma linha>`

Por exemplo: `[Bug] AnnotaryCat 0.2.0 (windows-x86_64): a exportação para COCO para em 50%`. A versão aparece em Help › About AnnotaryCat (Ajuda › Sobre).

**Texto:** use este modelo; Send a problem report… o preenche para você. Mantenha os títulos das seções em inglês e escreva o conteúdo em qualquer idioma.

```markdown
## Description

O que deu errado, em uma ou duas frases.

## Steps to reproduce

1.
2.
3.

## Expected behavior

O que você esperava que acontecesse.

## Actual behavior

O que aconteceu de fato, incluindo a mensagem de erro exibida.

## Environment

- Version:
- OS:
- Diagnostics bundle: (arraste o arquivo .zip para cá)
```

Depois, **arraste o arquivo `.zip` para o texto** para anexá-lo, revise tudo mais uma vez e envie.

Dicas:

- Um problema por issue. Pesquise antes nas [issues existentes](../../issues); se o seu problema já estiver lá, acrescente um comentário.
- Capturas de tela ajudam, desde que não mostrem nada privado.
- Diga se acontece sempre ou só às vezes.

## 3. Sugestões de recursos

Título: `[Feature] <o que você gostaria>`. No texto, descreva o que você quer fazer, por quê e como faz isso hoje. O pacote de diagnóstico não é necessário.
