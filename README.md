yamljs
====

Extends js-yaml`https://github.com/nodeca/js-yaml` with a few Livefyre specific types.

To compile yaml to json

```
yamljs.js sample1.yaml sample2.yaml > config.json
```

yamljs will take any number of yaml files and overlay them. For example, if sample1.yaml defines env: dev,
and sample2.yaml defines env: staging, then config.json will end up with {"env": "staging"}
