
# 1. Install Dependencies
```shell
npm install antlr4ts
npm install --save-dev antlr4ts-cli
npm install --save-dev ts-node
```

# 2. Debug by using ts-node
```json
// launch.json
"configurations": [
        {
            "name": "Current TS File",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/node_modules/ts-node/dist/bin.js",
            "args": [
                "${relativeFile}"
            ],
            "cwd": "${workspaceRoot}",
            "protocol": "inspector"
        }
```

# 3. Run by using ts-node

```json
// package
"scripts": {
    "build": "antlr4ts -visitor  -Xexact-output-dir  grammar/Hello.g4 -o src/parser",
    "start": "ts-node index.ts"
  }
```