# Development

## Modes and Environment Variables

### Modes

`Mode` is an important concept in Vue CLI projects. By default, there are three modes:

- `development` is used by `vue-cli-service serve`
- `test` is used by `vue-cli-service test:unit`
- `production` is used by `vue-cli-service build` and `vue-cli-service e2e`

However, you can overwrite the mode default used for a command by using `--mode` option flag.

```
vue-cli-service build --mode development
```

### Environment Variables

You can specify env variable by placing the following file in your project root.

```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

An env file simply contains key=value pairs of envaironment variables:

```
FOO=bar
VUE_APP_NOT_SECRET_CODE=some_value
```

Do not store any secrets (such as API private key) in your project.
