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
git

# Entrar no diretório
cd psycs-app

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
EXPO_PUBLIC_GNEWS_API_TOKEN="CHAVEAPI"
