# Desafio React News Mobile

Aplicativo de notícias desenvolvido em React Native com Expo e React Query, permitindo que usuários pesquisem, filtrem por categorias e adicionem notícias aos favoritos. O app conecta o usuário com diversas fontes de notícias, salva os artigos favoritos e notícias offline localmente usando AsyncStorage.

---

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/) — Framework principal para o desenvolvimento mobile
- [Expo](https://expo.dev/) — Para facilitar build e deploy do app
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para maior segurança no código
- [Expo Router](https://expo.github.io/router/) — Navegação entre telas e rotas dinâmicas
- [Axios](https://axios-http.com/) — Comunicação com a API
- [React Query](https://tanstack.com/query/latest) — Gerenciamento de cache, requisições e estado assíncrono
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) — Armazenamento local de notícias favoritas
- [NativeWind](https://nativewind.dev/) — Estilização rápida e responsiva

---

## 🔧 Instalação e execução

### Pré-requisitos

- Node.js (>= 20)
- Yarn ou NPM
- Android Studio ou Xcode configurado
- Emulador ou dispositivo físico

### Passos

```bash
# Clonar o repositório
git https://github.com/RodrigoLinniker/desafio-react-native.git

# Entrar no diretório
cd desafio-react-native

# Instalar dependências
yarn install
# ou
npm install

#Rodar projeto
yarn start

# Rodar no Android
yarn android

# Rodar no iOS
yarn ios
```

---

### Observações

A API utilizada é a GNews API, sendo necessário gerar uma chave gratuita para testes e colocar no .env :
**EXPO_PUBLIC_GNEWS_API_TOKEN="CHAVEAPI"**

---

### Decisões técnicas

- **React Native com Expo** — Simplifica o desenvolvimento mobile e permite builds rápidos em Android e iOS sem configuração complexa.
- **React Query** — Gerencia requisições assíncronas, cache de dados e scroll infinito de notícias de forma eficiente, garantindo atualização automática da interface.
- **Axios com Interceptors e Toasts** — Centraliza o tratamento de erros da API, exibindo mensagens de toast para o usuário em caso de falhas ou ausência de conexão.
- **AsyncStorage** — Armazena notícias offline, garantindo que o usuário veja conteúdo mesmo sem conexão com a internet.
- **NativeWind** — Facilita a estilização rápida e responsiva, mantendo consistência visual em todo o app.
- **Estrutura modular** — Separação entre hooks, controllers e componentes para manter o código organizado, testável e escalável.
