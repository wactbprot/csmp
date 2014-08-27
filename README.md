client side mp
--------------

## Installation

```
git clone https://github.com/wactbprot/csmp.git
cd csmp
npm install
```

### Abbreviations

* MP ... measurement program
* CD ... calibration document
* ```mpid``` ... document id of the MP definition 
* ```cdid`` ...  id of a calibration document


### MP initialization

```
mp_ini -i mpid 
```

loads the document (the MP definition) with ```mpid```
and initializes the build up.

### Clone a MP

It is possible to transfer the complete MP (including _state_) to another instance
of ssmp running on a different machine (```otherserver```) or on a different port
(```otherport```).

This is done with:

```
mp_get -i mpid | mp_post -i mpid -s otherserver -P otherport
```

### Control a container

The command:
```
mp_ctrl -i mpid -c 0 -d load
```
Loads the first (0) container of the mp and 
```
mp_ctrl -i mpid -c 0 -d stop
```
stops the first (0) Container of the MP with the id ```mpid```.
The command:

```
mp_ctrl -i mpid -c 0 -d 'load;run'
```
loads and afterwards runs all the _task_s  in the _recipe_ of 
the first (0) container of the MP with the id ```mpid```. There is a 
small syntax for the command string documented 
[here](https://github.com/wactbprot/ssmp/blob/master/doc/utils.js.md#cmd_to_array).

## Request the state


The _state_ of a certain container (0 below) can be requested by
```
mp_stat -i mpid -c 0 
```

## Set values to any path

Writing values (```0.5``` below) to any path (```exchange/target_fill/Value```
below) of a MP (with the id ```mpid```) is done with:
```
mp_set -i mpid -p exchange/target_fill/Value -d 0.5 
```
A further example is:
```
mp_set -i mpid -p state/2/0/0 -d ready
```

## Get objects

```
mp_get -i mpid -p state/0 
```
returns somthing like:

```
[

    [
        "ready",
        "ready",
        "ready",
        "ready",
        "ready"
    ]

]
```


## Polling an endpoint

```
mp_poll -i mpid -p state/0
```

## Commit an CD id

ssmp needs to know which CD should be used; tell him by 
executing:

```
mp_id+ -i mpid -d cdid
```
of course there is a 
```
mp_id- -i mpid -d cdid
```
and a
```
mp_id -i mpid -d cdid
```
command. 