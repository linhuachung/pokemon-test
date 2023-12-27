### Pokemon
# ENV
VITE_APP_API='http://localhost:8000'
VITE_APP_TYPE='prod'
VITE_APP_WS = 'ws'
VITE_APP_PORT = '5173'
VITE_APP_TITLE= 'Pokemon'

# NODE
version: 18^

## Structure Folder

```typescript
   src;
      api;
      assets;
      components;
      config;
      constants;
      contexts;
      helpers;
      hooks;
      interfaces;
      pages;
      routes;
      store;
      style;
      translate;
      type;
```

### Dependencies:

```javascript
    "axios": "^1.4.0",
    "dotenv": "^16.1.4",
    "https": "^1.0.0",
    "i18next": "^22.5.0",
    "i18next-browser-languagedetector": "^7.0.1",
    "immutable": "^4.3.0",
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    "react-hook-form": "^7.43.9",
    "react-i18next": "^12.3.1",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.11.1",
    "react-toastify": "^8.1.0",
    "redux-devtools-extension": "^2.13.9",
    "styled-components": "^6.0.0-rc.1",
    "ts-node": "^10.9.1",
    "vite-plugin-eslint": "^1.8.1"
```

### DevDependencies:

```javascript
    "@types/node": "^20.2.3",
    "@types/react": "^18.2.8",
    "@types/react-dom": "^17.0.0",
    "@types/stylis": "^4.2.0",
    "@typescript-eslint/eslint-plugin": "^5.59.7",
    "@typescript-eslint/parser": "^5.59.7",
    "@reduxjs/toolkit": "^1.9.5",
    "@types/styled-components": "^5.1.26",
    "@types/video-react": "^0.15.1",
    "@vitejs/plugin-react-refresh": "^1.3.6",
    "eslint": "^8.41.0",
    "eslint-plugin-react": "^7.32.2",
    "terser": "^5.17.4",
    "terser-brunch": "^4.1.0",
    "typescript": "^5.1.3",
    "vite": "^4.3.5",
    "vite-plugin-react": "^4.0.0"
```

## Available Scripts

```javscript
    yarn dev
    yarn lint
    yarn build_tsc
    yarn build
    yarn preview
```
