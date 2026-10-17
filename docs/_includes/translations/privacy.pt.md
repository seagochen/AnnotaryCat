**O AnnotaryCat não coleta nenhum dado.** Não operamos servidores que recebam seus dados: não há contas, armazenamento na nuvem, telemetria, estatísticas de uso, publicidade nem SDKs de terceiros para análise ou relatórios de falhas.

### Onde seus dados ficam

- Imagens, vídeos, textos, anotações e configurações de projetos ficam na pasta de trabalho que você escolher, no seu computador ou em um disco montado.
- As configurações do aplicativo, logs, registros de falhas e chaves de acesso ficam no diretório de configuração do seu usuário neste computador. Na versão macOS em sandbox, ficam no contêiner do aplicativo.
- Os logs registram apenas nomes de comandos, códigos de erro e durações. Nunca registram dados de projetos, anotações, conteúdo de arquivos, valores de parâmetros ou senhas. Sua pasta pessoal aparece como `~` nos logs.

### Quando os dados saem do computador

Somente quando você solicitar explicitamente, e apenas para um destino escolhido por você:

- **Seu próprio servidor SSH.** Quando o conjunto de dados está em um host remoto, o aplicativo se conecta ao host informado usando o `ssh` / `sftp` do sistema.
- **Ferramentas de IA que você conectar.** Ao ativar o canal de controle ou MCP, ferramentas de IA executadas neste computador podem ler e gravar nos projetos e pastas que você autorizar. O destino dos dados enviados por essas ferramentas depende do serviço de IA utilizado. O acesso de IA pode ser desativado por projeto.
- **Relatos de problemas.** O aplicativo nunca envia nada sozinho. Ao escolher “Enviar um relato de problema”, ele abre uma página de issue do GitHub no navegador. Você revisa o pacote de diagnóstico e decide se deseja anexá-lo. Após o envio, a issue e os anexos ficam públicos e sujeitos à política de privacidade do GitHub.

### Senhas e chaves

- A senha SSH é usada uma vez e não é armazenada.
- A chave de acesso criada ao escolher “conectar automaticamente daqui em diante” fica neste computador, legível apenas pela sua conta de usuário.
- Se tokens de API forem suportados no futuro, serão armazenados no chaveiro do sistema.
- Senhas, chaves e tokens nunca são gravados em arquivos de projeto, logs ou resultados de comandos.

### Crianças

O aplicativo não coleta informações de crianças porque não coleta informações de ninguém.

### Alterações e contato

Alterações nesta política são publicadas com atualizações do aplicativo, e esta página informa a data de vigência.
Dúvidas: [issues do GitHub](https://github.com/seagochen/AnnotaryCat/issues).
