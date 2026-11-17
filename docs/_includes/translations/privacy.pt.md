**O AnnotaryCat não coleta nenhum dado.** Não operamos servidores que recebam seus dados: não há contas, armazenamento na nuvem, telemetria, estatísticas de uso, publicidade nem SDKs de terceiros para análise ou relatórios de falhas.

### A anotação local funciona totalmente offline

Iniciar o aplicativo e anotar, salvar e exportar dados locais não exige rede. O aplicativo não faz solicitações externas automáticas: não verifica atualizações nem envia telemetria ou relatórios de falhas automaticamente. Não baixa modelos, fontes ou dependências de execução ao iniciar. Esta declaração cobre a anotação local; os recursos remotos que você configura e usa, os serviços da loja do sistema e os navegadores ou programas externos que você abre têm os limites descritos abaixo.

### Onde seus dados ficam

- Imagens, vídeos, textos, anotações e configurações de projetos ficam no seu computador: por padrão na pasta de dados `AnnotaryCat` dentro da sua pasta Documentos, ou em uma pasta que você escolher para um projeto ou em um disco montado.
- As configurações do aplicativo, logs, registros de falhas e chaves de acesso ficam na pasta do aplicativo neste computador. Os servidores salvos e as chaves de login SSH ficam em uma pasta deste computador compartilhada com o Crescent, do mesmo desenvolvedor (`%APPDATA%\homology` no Windows); eles nunca saem do seu computador e não contêm dados de projetos nem senhas. Na versão macOS em sandbox, tanto a pasta de dados quanto a pasta do aplicativo ficam no contêiner do aplicativo.
- Os logs registram apenas nomes de comandos, códigos de erro e durações. Nunca registram dados de projetos, anotações, conteúdo de arquivos, valores de parâmetros ou senhas. Sua pasta pessoal aparece como `~` nos logs.

### Quando os dados saem do computador

Somente quando você solicitar explicitamente, e apenas para um destino escolhido por você:

- **Seu próprio servidor SSH.** Quando o conjunto de dados está em um host remoto, o aplicativo se conecta ao host informado usando o `ssh` / `sftp` do sistema.
- **Ferramentas de IA que você conectar.** Ao ativar o canal de controle ou MCP, ferramentas de IA executadas neste computador podem ler e gravar nos projetos e pastas que você autorizar. O destino dos dados enviados por essas ferramentas depende do serviço de IA utilizado. O acesso de IA pode ser desativado por projeto.
- **Relatos de problemas.** O aplicativo nunca envia nada sozinho. Ao escolher “Enviar um relato de problema”, ele abre uma página de issue do GitHub no navegador. Você revisa o pacote de diagnóstico e decide se deseja anexá-lo. Após o envio, a issue e os anexos ficam públicos e sujeitos à política de privacidade do GitHub.
- **Armazenamento S3 / compatível com S3 que você configurar.** Ao configurar e usar um conjunto de dados remoto, o aplicativo chama o AWS CLI instalado por você para acessar o armazenamento e os serviços de autenticação conforme o bucket, endpoint e as credenciais escolhidos. As solicitações nunca passam por nossos servidores.
- **Servidores onde você executa modelos personalizados.** Quando você escolhe treinar, avaliar ou prever no seu próprio servidor SSH, o aplicativo copia para lá o código do seu modelo, os dados necessários e os pesos, e busca os resultados; execuções neste computador não copiam nada. Cada projeto pode proibir a cópia de código e dados para um host específico. Seu código roda no ambiente que você escolher, e o que ele faz na rede é responsabilidade sua.
- **Páginas que você abrir.** Links de termos, privacidade e gerenciamento de assinaturas só abrem no navegador do sistema quando você os escolhe. O provedor da página trata as solicitações de rede.

O canal de controle só é acessível a partir deste computador: a versão da Mac App Store usa um socket Unix dentro do contêiner do aplicativo e não abre nenhuma porta de rede; as outras versões escutam apenas em `127.0.0.1`. O MCP usa a entrada/saída padrão local (ou o mesmo canal local ao conectar a uma janela aberta). O assistente de senhas SSH usa um socket Unix que só o usuário atual pode abrir no macOS e no Linux, e loopback no Windows. Essas conexões não expõem serviços a outros computadores nem enviam dados a nossos servidores.

### Serviços da loja

As compras no aplicativo usam APIs da loja do sistema (StoreKit 2 no macOS, `Windows.Services.Store` no Windows). Comprar, restaurar e consultar produtos ou o estado de assinaturas pode fazer com que os serviços do sistema se comuniquem com o operador da loja. O aplicativo não implementa verificação de licença online, não passa por nossos servidores nem anexa dados de anotação às transações. O operador trata as transações conforme sua própria política de privacidade. A atividade de rede da loja, do sistema operacional, do navegador e das ferramentas externas que você executar está fora desta declaração sobre a anotação local offline.

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
