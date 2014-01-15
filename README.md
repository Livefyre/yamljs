yamljs
====

Extends [js-yaml][1] with a few Livefyre specific types.

To compile yaml to json

```
yamljs.js sample1.yaml sample2.yaml > config.json
```

yamljs will take any number of yaml files and overlay them. For example, given two files: 

**sample1.yaml**
`env: dev`

**sample2.yaml**
`env: staging`

then the generatedd config.json is
`{"env": "staging"}`


  [1]: https://github.com/nodeca/js-yaml