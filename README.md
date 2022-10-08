
# Equals.ts CLI

simple cli to create server backend using express server with all files pre configured


## Installation

install equals.ts cli with yarn

```bash
  sudo yarn global add equals.ts
```

### more details
```bash
  equals help
```






# More Details

#### create new project

```bash
  equals new my-project
  cd my-project
  yarn install
```

#### run project

```bash
  yarn dev
```

# All available commands

## install:

install your preferencial orm: typeorm or mongoose

#### typeorm

drive: postgres or mysql

```bash
  equals install:orm typeorm postgres
```

#### mongoose

drive: postgres or mysql

```bash
  equals install:orm mongoose
```

install command, creates the database.ts file inside the 'src/env/' folder that contains the database settings
## make:

create endpoint restfull module 
```bash
  equals make:modules endpoint
```

