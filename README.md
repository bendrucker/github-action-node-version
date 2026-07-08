# github-action-node-version

> Get the Node.js version an action uses, to test it with the same version

## Usage

```yaml
- uses: actions/checkout@v4
- id: node-version
  uses: bendrucker/github-action-node-version@v1.0.1
- uses: actions/setup-node@v4
  with:
    node-version: ${{ steps.node-version.outputs.version }}
```

Pin an exact version tag (or a commit SHA) rather than a floating major tag. Releases are immutable, so a pinned version never changes underneath you.
