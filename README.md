# FiapReserve

## a) Sobre o Projeto

**Nome do app:** FiapReserve

**Descrição do problema que resolve:** A dificuldade e a perda de tempo na busca por espaços de estudo e laboratórios disponíveis no edifício. O aplicativo centraliza a visualização e a reserva de salas, evitando conflitos de horários e a frustração de encontrar uma sala ocupada.

**Qual operação da FIAP foi escolhida e por quê:** Escolhemos a **Gestão de Infraestrutura e Recursos Acadêmicos** (especificamente, a reserva de salas e laboratórios). Escolhemos essa operação porque, como alunos, sabemos da alta demanda por espaços específicos (como Salas Maker e Laboratórios) para o desenvolvimento de CPs, projetos e trabalhos em grupo. Otimizar esse processo melhora diretamente a experiência do aluno e facilita o controle por parte da faculdade.

**Funcionalidades implementadas:**
* **Interface de Login:** Tela inicial de autenticação do usuário via RM ou Email institucional.
* **Listagem de Salas em Tempo Real:** Tela de visualização rápida do status das salas (Livre / Ocupado).
* **Sistema de Reserva (Context API):** Tela dedicada para reservar salas disponíveis. A ação utiliza o gerenciamento de estado global (Context API) para atualizar instantaneamente a disponibilidade da sala escolhida em todas as abas do aplicativo, sem necessidade de recarregar a tela.
* **Navegação por Abas:** Roteamento estruturado utilizando `expo-router` (Tabs Navigation).

---

## b) Nome dos integrantes

* Isabelle Dias Belini
* Júlia Souza Marques
* Manoella dos Santos Ginez
---

## f) Próximos Passos

Caso houvesse mais tempo para a continuidade do projeto, o grupo implementaria as seguintes melhorias:

* **Integração com Backend e Banco de Dados:** Substituir a Context API (armazenamento em memória) por uma API real (como Firebase ou Node.js) para persistência definitiva das reservas.
* **Autenticação Real:** Validar as credenciais de login (RM e Senha) com um banco de usuários.
* **Gestão de "Minhas Reservas":** Dar funcionalidade à aba de histórico, permitindo ao usuário visualizar suas reservas ativas e a opção de cancelá-las.
* **Filtros Avançados:** Permitir a busca de salas por tipo (Andar, Laboratório, Maker, Teórica), capacidade de alunos e seleção de blocos de horários específicos.