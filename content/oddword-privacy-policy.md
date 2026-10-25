# Política de Privacidade — Quem é o Infiltrado?

**Última atualização:** 24 de outubro de 2026  
**Responsável:** Lucas Alvarenga Barbieri Okasima (alvarenga.dev)  
**Contato para privacidade:** [hello@alvarenga.dev](mailto:hello@alvarenga.dev)  
**País de referência:** Brasil  
**Público-alvo:** pessoas com **18 anos ou mais**

## 1. Apresentação

Esta Política de Privacidade explica como o aplicativo **Quem é o Infiltrado?** ("Aplicativo"), disponibilizado por **Lucas Alvarenga Barbieri Okasima**, identificado também como **alvarenga.dev** ("Desenvolvedor"), funciona e como as tecnologias do Google integradas ao jogo tratam informações técnicas.

O Aplicativo **não exige cadastro, criação de conta ou login**. O Desenvolvedor não mantém banco de dados de jogadores, não recebe listas individualizadas de informações pessoais coletadas pelos SDKs e não consulta dados técnicos pelo nome de cada participante. Os serviços de publicidade, análise e diagnóstico podem coletar e processar automaticamente dados técnicos, que podem constituir dados pessoais na legislação aplicável. O Desenvolvedor pode consultar **painéis estatísticos e relatórios técnicos disponibilizados pelo Google**, inclusive informações sobre falhas; por isso, não seria correto afirmar que não possui qualquer acesso a informações provenientes desses serviços.

Ao utilizar o Aplicativo, o usuário poderá consultar esta Política. **A leitura ou utilização do jogo não significa consentimento automático** para tratamentos de dados que dependam de autorização específica.

## 2. Público-alvo e classificação

O Aplicativo é **direcionado exclusivamente a pessoas com 18 anos ou mais**. Embora suas regras e palavras tenham proposta de entretenimento sem conteúdo sexual explícito ou temas impróprios, **a adequação do conteúdo não altera a definição do público-alvo adulto**. A classificação indicativa atribuída pela loja de aplicativos pode ser diferente da faixa etária definida como público-alvo.

O Aplicativo não solicita documentos de identidade ou data de nascimento para criar um cadastro, pois não existem contas. As restrições de distribuição por idade, quando disponíveis, devem ser configuradas na loja de aplicativos. Se o Aplicativo vier a ser oferecido a menores de idade, esta Política, o tratamento de dados e as configurações de publicidade precisarão ser revistos antes dessa mudança.

## 3. Como o jogo funciona e dados temporários das partidas

O Quem é o Infiltrado? é um jogo social presencial de dedução, destinado a grupos que compartilham um dispositivo. Na experiência descrita no projeto, de quatro a dez participantes informam **nomes ou apelidos**, recebem palavras secretas, conversam, votam e acompanham resultados e pontuações das rodadas.

Durante uma sessão, o Aplicativo utiliza temporariamente informações como nomes ou apelidos, palavras, papéis sorteados, votos e pontuação para executar suas regras. **Essas informações não são gravadas permanentemente pelo jogo, nem em banco de dados local nem em servidores ou nuvem do Desenvolvedor.** O Aplicativo não mantém histórico de partidas e não oferece contas ou perfis de jogadores.

O processamento temporário na memória do dispositivo é diferente de registros técnicos gerados pelos serviços integrados. Preferências de consentimento, diagnósticos e outros registros desses serviços podem existir independentemente das partidas. Os nomes, votos e palavras secretas **não são intencionalmente enviados** como eventos do Analytics, logs ou campos personalizados do Crashlytics.

As funções centrais do jogo são projetadas para funcionar sem internet. A publicidade e a comunicação dos serviços técnicos podem utilizar conexão de rede.

## 4. Informações que não solicitamos para jogar

O Aplicativo não exige nome civil, CPF, telefone, endereço, e-mail cadastral, dados bancários ou criação de perfil. Sua mecânica principal não requer acesso à câmera, ao microfone, aos contatos ou à localização precisa do dispositivo.

**Isso não significa ausência total de coleta:** os SDKs descritos nesta Política podem processar endereço IP, identificadores técnicos, interações, diagnósticos e informações de desempenho.

## 5. Categorias de dados técnicos tratados

Conforme a plataforma, as versões dos SDKs, as configurações de privacidade e os serviços usados, poderão ser coletadas ou compartilhadas as seguintes categorias:

| Categoria | Exemplos | Finalidades possíveis |
|---|---|---|
| **Informações e desempenho do aplicativo** | Registros de falhas, diagnósticos, tempo de inicialização, estabilidade e outros indicadores de desempenho | Detectar e corrigir erros; melhorar a estabilidade e os serviços |
| **Identificadores do dispositivo e outros IDs** | Identificador de instalação do Firebase, identificador do Crashlytics, identificadores do aplicativo e de publicidade quando permitidos | Diagnóstico, análise, anúncios, prevenção de fraude e segurança |
| **Dados de utilização e publicidade** | Aberturas do aplicativo, eventos técnicos, impressões, cliques e outras interações relacionadas a anúncios | Estatísticas gerais, entrega e medição de publicidade |
| **Dados técnicos de conexão** | Endereço IP, versão do sistema, informações de dispositivo e localização aproximada derivada do IP | Entrega de serviços, segurança, prevenção de abuso e aplicação de regras regionais |
| **Preferências de privacidade** | Estado e escolhas de consentimento publicitário | Respeitar preferências e obrigações legais |

Nem todas as categorias são necessariamente tratadas por todos os serviços ou em todos os dispositivos. **Identificadores e dados técnicos podem ser dados pessoais**, mesmo sem associação ao nome do jogador. A transmissão é realizada por tecnologias integradas, sem criação de uma base de dados pessoal própria do jogo; o Desenvolvedor consulta relatórios e indicadores técnicos disponíveis nos painéis dos fornecedores, dentro dos limites de acesso concedidos por esses serviços.

## 6. Firebase Analytics

Utilizamos o **Google Analytics for Firebase** para compreender tendências gerais de utilização do Aplicativo e orientar melhorias. Esse serviço pode registrar eventos de uso, abertura de sessões, informações da instalação, versão do aplicativo, características técnicas do aparelho e identificadores próprios.

Os dados analíticos não têm como finalidade identificar nominalmente os participantes. No painel do serviço, o Desenvolvedor pode consultar estatísticas, tendências de uso e outros relatórios disponibilizados pela plataforma, mas **não mantém uma base própria de dados pessoais individualizados dos jogadores**. Não enviamos intencionalmente ao Analytics nomes dos participantes, palavras secretas, votos individuais ou conteúdo das rodadas.

A coleta do Analytics pode depender de consentimento ou de outra base legal válida, conforme a região e a operação realizada. Os mecanismos técnicos de habilitação, desabilitação e limitação da coleta devem respeitar tais requisitos.

Informações adicionais: [Privacidade e segurança no Firebase](https://firebase.google.com/support/privacy).

## 7. Firebase Crashlytics

Utilizamos o **Firebase Crashlytics** para identificar falhas, analisar problemas técnicos e melhorar a estabilidade do Aplicativo. Seus relatórios podem incluir registros de falha, rastreamentos técnicos, versão do software, características do dispositivo e identificadores da instalação.

Quando Analytics e Crashlytics estão integrados, eventos técnicos podem ser incluídos no contexto de relatórios de falhas. **Os relatórios de erros e seus detalhes técnicos podem ser consultados pelo Desenvolvedor no Firebase Console**, mas não são organizados como um cadastro identificável por nome de jogador. Não utilizamos intencionalmente esses mecanismos para registrar palavras, votos ou nomes de participantes.

Segundo a documentação do Firebase, o Crashlytics mantém determinados registros de falhas e identificadores associados por **90 dias antes de iniciar sua remoção** dos sistemas ativos e de backup; outros dados e serviços podem estar sujeitos a períodos diferentes.

Informações adicionais: [Privacidade e segurança no Firebase](https://firebase.google.com/support/privacy).

## 8. Google AdMob e restrições de publicidade

O Aplicativo utiliza o **Google AdMob** para exibir anúncios, permitindo oferecer o jogo sem exigir pagamento para participar. O Google Mobile Ads SDK pode processar endereço IP, identificadores do dispositivo e do aplicativo, interações com anúncios e informações de desempenho e diagnóstico, inclusive para entrega, medição, segurança e prevenção de fraude.

O Desenvolvedor **configurou os controles disponíveis no AdMob para restringir publicidade das seguintes categorias**:

- Conteúdo sexual, sexualmente sugestivo ou referências a sexo;
- Campanhas, candidatos e temas publicitários de natureza política;
- Apostas, jogos de azar e publicidade de cassinos;
- Jogos de cassino sociais ou simulações de apostas.

Para isso, são utilizados os controles de bloqueio de categorias sensíveis e restritas disponibilizados pelo AdMob, conforme sua disponibilidade. **Os filtros dependem da classificação automatizada realizada pela plataforma e não garantem bloqueio absoluto de todo anúncio indesejado.** Caso seja identificado conteúdo inadequado, poderão ser utilizados recursos de revisão e bloqueio adicionais oferecidos pelo fornecedor.

A restrição de anúncios sobre determinadas categorias não implica necessariamente que outros anúncios sejam não personalizados. A personalização, quando aplicável, dependerá das escolhas de privacidade, das configurações adotadas e da legislação pertinente.

Informações adicionais: [Publicidade e privacidade do Google](https://policies.google.com/technologies/ads?hl=pt-BR) e [controles de categorias do AdMob](https://support.google.com/admob/answer/3150176?hl=pt-BR).

## 9. Google UMP e escolhas de privacidade

Utilizamos o **Google User Messaging Platform (UMP)** para apoiar a apresentação de avisos e o gerenciamento de preferências de privacidade ligadas à publicidade. Conforme a região e os requisitos legais, o Aplicativo poderá solicitar consentimento e disponibilizar a revisão dessas escolhas.

A autorização para publicidade personalizada **não é presumida** pela instalação, pela aceitação dos termos de uso ou pela leitura desta Política. Quando a legislação exigir consentimento, o mecanismo deverá oferecer as opções aplicáveis e respeitar as decisões registradas.

Os controles do UMP dizem respeito aos tratamentos cobertos por suas mensagens. Eles **não representam automaticamente um controle sobre todos os dados do Firebase Analytics ou Crashlytics**, que possuem configurações e regras próprias.

O sistema operacional pode oferecer controles adicionais sobre identificadores de publicidade e rastreamento.

## 10. Tratamento por terceiros e transparência no Google Play

O Aplicativo não vende dados dos jogadores, não mantém servidores próprios com históricos de partidas e não compartilha intencionalmente nomes, palavras, votos ou placares com o Google. **Os SDKs integrados podem transmitir informações técnicas diretamente à infraestrutura do Google e, conforme o serviço, a parceiros publicitários autorizados.** O tratamento segue as funcionalidades, as configurações e as políticas do fornecedor, observados os requisitos legais aplicáveis.

**Limites do acesso do Desenvolvedor:** não administramos um banco de dados próprio com esses registros nem temos uma ferramenta para pesquisar dados pessoais pelo nome de alguém que jogou. Entretanto, podemos consultar **indicadores estatísticos de utilização, relatórios de publicidade e registros técnicos de falhas** disponibilizados nos painéis do Google. Os dados brutos e operações de armazenamento ou retenção dos serviços são gerenciados nas respectivas plataformas. Essa divisão operacional não elimina as obrigações de transparência e proteção de dados que eventualmente caibam ao Desenvolvedor.

Na seção **Segurança dos dados** do Google Play, conforme as informações fornecidas pelo Desenvolvedor, constam como **coletados e/ou compartilhados**:

- **Informações e desempenho do aplicativo:** registros de falhas, dados de diagnóstico e outros dados de desempenho;
- **Identificadores do dispositivo e outros IDs**, processados pelos serviços integrados.

A documentação do **Google Mobile Ads SDK** também informa o tratamento automático, conforme sua implementação, de informações de interação com o aplicativo e anúncios, endereço IP, dados de diagnóstico e identificadores. A política descreve essas práticas mesmo que o Desenvolvedor não receba tais dados na forma de uma lista pessoal de usuários.

Informações adicionais: [divulgação de dados do Google Mobile Ads SDK](https://developers.google.com/admob/android/privacy/play-data-disclosure?hl=pt-BR) e [privacidade e segurança no Firebase](https://firebase.google.com/support/privacy).

## 11. Segurança e criptografia em trânsito

Os dados transmitidos pelos SDKs utilizados são protegidos por mecanismos de segurança próprios dos respectivos fornecedores. Segundo o Google, o **Google Mobile Ads SDK utiliza criptografia em trânsito por TLS**, para proteger os dados durante sua transmissão.

O Desenvolvedor procura minimizar a exposição dos dados do jogo, manter os componentes atualizados e evitar que informações de uma partida sejam registradas por engano em ferramentas de diagnóstico.

Nenhum mecanismo de segurança oferece risco zero. As práticas efetivas devem ser verificadas conforme a versão distribuída do Aplicativo.

## 12. Armazenamento, retenção e solicitações de exclusão

**Dados de partidas:** não há conta a excluir, histórico persistente, banco de dados de jogadores ou armazenamento de partidas em servidores próprios. Nomes, papéis, palavras, votos e pontos são processados temporariamente durante a sessão e descartados quando a sessão termina ou seu estado em memória deixa de existir.

**Dados técnicos gerenciados pelos fornecedores:** informações de publicidade (AdMob), consentimento (UMP), eventos analíticos (Firebase Analytics) e diagnóstico (Crashlytics) são tratadas nos ambientes e sistemas desses serviços, de acordo com suas respectivas políticas, configurações e prazos de retenção. O Desenvolvedor não possui uma base própria contendo esses registros individualizados, embora possa ter acesso a relatórios estatísticos e técnicos nos painéis Google. O Firebase informa que o Crashlytics conserva determinados registros e identificadores por **90 dias antes de iniciar o processo de remoção** de seus sistemas ativos e de backup. Outros serviços e dados podem seguir critérios diferentes.

**Ausência de ferramenta específica de exclusão:** como não criamos conta ou identificador cadastral próprio, **não oferecemos no Aplicativo uma função de exclusão individual de registros técnicos armazenados pelos SDKs** nem um painel de consulta por usuário. O Desenvolvedor não consegue garantir a localização ou a exclusão imediata de um registro de terceiro a partir do nome de um jogador. O próprio Google disponibiliza políticas e mecanismos de gerenciamento de dados, identificadores e preferências, cujas opções variam por serviço e dispositivo.

**Direitos legais preservados:** essa limitação técnica **não exclui os direitos previstos na legislação aplicável**. Solicitações relacionadas a privacidade, inclusive à possibilidade de eliminação quando legalmente cabível, podem ser encaminhadas a [hello@alvarenga.dev](mailto:hello@alvarenga.dev). Cada caso será analisado conforme a responsabilidade do Desenvolvedor, a existência de informações que permitam localizar os dados, os recursos dos fornecedores e os limites legais. Quando aplicável e tecnicamente viável, serão adotadas ou encaminhadas as medidas cabíveis; não é prometida exclusão de registros que não possam ser identificados ou gerenciados pelo Desenvolvedor.

A **desinstalação do Aplicativo** encerra a utilização do jogo nesse dispositivo, mas **não implica apagamento imediato de registros técnicos anteriormente transmitidos** aos serviços de terceiros.

Mais informações: [privacidade do Firebase](https://firebase.google.com/support/privacy), [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR) e [direitos dos titulares segundo a ANPD](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares).

## 13. Finalidades e fundamentos legais

Os dados são tratados, conforme a operação e a legislação aplicável, para: executar o jogo; prestar serviços de publicidade; medir o uso e o desempenho; diagnosticar falhas; prevenir fraudes; respeitar escolhas de privacidade; e cumprir obrigações legais.

As bases legais poderão incluir, conforme o caso, **consentimento**, **execução dos serviços solicitados**, **cumprimento de obrigação legal** ou **interesse legítimo**, onde permitido e adequadamente avaliado. Tratamentos que exijam consentimento não serão fundamentados simplesmente na disponibilização desta Política.

No Brasil, aplicam-se as disposições pertinentes da **Lei Geral de Proteção de Dados Pessoais (LGPD, Lei nº 13.709/2018)**. Em outras localidades, podem incidir normas como o GDPR europeu e legislações estaduais ou nacionais de proteção de dados, conforme seus respectivos critérios territoriais.

## 14. Direitos do usuário

Dependendo da legislação e do tratamento realizado, o usuário pode ter direito de confirmar a existência de tratamento, solicitar acesso, correção, informações sobre compartilhamento, bloqueio, anonimização, portabilidade, oposição, revogação de consentimento ou eliminação de dados pessoais, nos casos previstos em lei.

O Desenvolvedor não disponibiliza uma busca nominal por registros técnicos de jogadores, porque o jogo não possui contas ou cadastro individual. Isso pode limitar a identificação de determinadas informações processadas automaticamente pelos SDKs. **A existência dessas limitações não impede o envio de uma solicitação legal de privacidade** para [hello@alvarenga.dev](mailto:hello@alvarenga.dev); a resposta explicará as providências possíveis e, quando necessário, os meios próprios do Google ou do dispositivo relacionados aos dados tratados.

Para tratamentos realizados pelo Google sob responsabilidade própria, poderão ser utilizados também os canais e configurações de privacidade oferecidos diretamente por esse fornecedor. Pedidos serão avaliados de acordo com a legislação e o papel de cada parte no tratamento.

## 15. Transferências internacionais

O Google pode processar informações técnicas em infraestrutura distribuída internacionalmente. Assim, dados tratados pelos serviços integrados podem ser transferidos para outros países, de acordo com suas políticas e com as salvaguardas exigidas pela legislação aplicável.

O tratamento e as transferências internacionais deverão respeitar, conforme o caso, a LGPD, o GDPR e normas equivalentes.

## 16. Links e anúncios de terceiros

Os anúncios exibidos podem direcionar o usuário a sites e aplicativos operados por terceiros. O Desenvolvedor não controla integralmente o conteúdo, os produtos ou as políticas desses destinos externos. Recomendamos a leitura das respectivas políticas de privacidade antes de fornecer informações pessoais.

## 17. Alterações desta Política

Esta Política poderá ser atualizada em razão de mudanças no Aplicativo, nos SDKs, nas práticas de tratamento ou nas exigências legais. A data de atualização será indicada no início do documento. Alterações relevantes serão comunicadas quando exigido, e novo consentimento será solicitado se necessário.

## 18. Responsável e contato

**Lucas Alvarenga Barbieri Okasima (alvarenga.dev)**  
**E-mail:** [hello@alvarenga.dev](mailto:hello@alvarenga.dev)  
**Última atualização:** 24 de outubro de 2026

Para esclarecimentos e pedidos relacionados à privacidade e à proteção de dados, utilize o endereço eletrônico acima.

---

### Fontes oficiais para informações sobre os serviços

- [Google — Privacidade e segurança no Firebase](https://firebase.google.com/support/privacy)
- [Google — Divulgação de dados do Mobile Ads SDK no Google Play](https://developers.google.com/admob/android/privacy/play-data-disclosure?hl=pt-BR)
- [Google — Configuração de mensagens de privacidade com UMP](https://developers.google.com/admob/android/privacy?hl=pt-BR)
- [Google AdMob — Bloqueio de categorias sensíveis](https://support.google.com/admob/answer/3150176?hl=pt-BR)
- [Google — Política de Privacidade](https://policies.google.com/privacy?hl=pt-BR)
- [ANPD — Direitos dos titulares](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares)
