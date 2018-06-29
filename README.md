# yamljs

## Notice
This project is out of date with https://github.com/Livefyre/py-yacc. Users
should instead switch injected configs.

```
export YACC_INJECT=$(pyyacc3 config/app.yaml /etc/default/cluster.yaml -o -)
... run my program ...

var config = yamljs.loadInjected();
```

# Overview

Extends [js-yaml][1] with a few Livefyre specific types.

# Usage
To compile yaml to json:

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
