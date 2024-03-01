# github-action-node-version

> Get the Node.js version an action uses, to test it with the same version

## Usage

```yaml
- uses: actions/checkout@v4
- id: node-version
  uses: bendrucker/github-action-node-version@v1
- uses: actions/setup-node@v4
  with:
    node-version: ${{ steps.node-version.outputs.version }}
```
