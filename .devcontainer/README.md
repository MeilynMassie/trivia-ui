# Trivia UI Development Container

This directory contains the development container configuration for the Trivia UI Angular application.

## Quick Start

### Using GitHub Codespaces
1. Open this repository in GitHub Codespaces
2. VS Code will automatically detect the devcontainer and prompt to reopen in container
3. Click "Reopen in Container"
4. The container will build and dependencies will install automatically

### Using Docker Desktop + VS Code
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [VS Code Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open the workspace folder in VS Code
4. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) and select "Dev Containers: Reopen in Container"
5. Wait for the container to build and install dependencies

## What's Included

### Angular & Project Setup
- **Angular 21** (as specified in package.json)
- **TypeScript 5.9** 
- **Yarn 1.22.22** (package manager)

### Base Environment
- Node.js 22 (LTS)
- Git & GitHub CLI

### VS Code Extensions
- **Angular Language Service** - Angular template syntax support
- **TypeScript** - Latest TypeScript features
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind CSS class suggestions
- **Vitest Explorer** - Test runner UI

### Port Forwarding
- **Port 4200**: Angular development server (`ng serve`)

## Available Scripts

```bash
# Start development server
yarn start
# or
npm start

# Build for production
yarn build
# or
npm build

# Run tests
yarn test
# or
npm test

# Run Angular CLI commands
yarn ng [command]
# or
npm run ng [command]
```

## Development Workflow

1. **Start the dev server**:
   ```bash
   yarn start
   ```
   The app will be available at `http://localhost:4200`

2. **Make changes** - Files are auto-compiled and the browser auto-reloads

3. **Run tests**:
   ```bash
   yarn test
   ```

4. **Format code**:
   - Prettier is configured to run on save
   - Manual format: `prettier --write .`

## Troubleshooting

### Port 4200 Already in Use
If you get an error that port 4200 is in use, you can specify a different port:
```bash
yarn start -- --port 4300
```

### Dependencies Won't Install
The `postCreateCommand` should automatically run `yarn install`. If it doesn't:
```bash
yarn install
```

### Slow Performance
On Windows/Mac with Docker Desktop, mounted volumes can be slow. Consider:
- Using WSL 2 backend (Windows)
- Using native virtualization
- Building images locally for better caching

## Learn More

- [Angular Documentation](https://angular.io/docs)
- [Dev Containers Documentation](https://containers.dev/)
- [Microsoft Dev Containers Guide](https://code.visualstudio.com/docs/devcontainers/containers)
