client side mp
--------------

## Installation

```
git clone https://github.com/wactbprot/csmp.git
cd csmp
npm install
```




### ini

```
mp_ini -i id 
```
which is equal to

```
mp_ini -i id -d load
```


loads the document (the mp definition) with ```id```
and initializes the build up of the mp.

### clone 

It is possible to transfer the complete mp including state to another instance
of ssmp ronning on a different machine (```otherserver```) on a different port
(```otherport```).

Is easy done with:

```
mp_get -i id | mp_post -i id -s otherserver -P otherport
```

### ctrl container

```
mp_ctrl -i id -c 0 -d load
```

Loads the first (0) Container of the mp.


```
mp_ctrl -i id -c 0 -d run
```

Runs all the tasks in the recipe of the first (0) container of the mp with the id id.


```
mp_ctrl -i id -c 0 -d stop
```

Stop the first (0) Container of the mp.


## status request


```
mp_stat -i id -c 0 
```

Returns the status of the  first (0) Container of the mp.

- ssmp

## set values to any path

```
mp_set -i id -p exchange/target_fill/Value -d 0.5 
```

or

```
mp_set -i mpdef -p state/2/0/0 -d ready
```

## get single objects

with

```
mp_get -i mpdef -p state/0 
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


## polling a endpoint

```
mp_poll -i mpdef -p state/0
```
