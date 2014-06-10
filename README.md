## client side mp

### ini

```
mp_ini -i id -d load
```
loads the document (the mp definition) with ```id``` from the
database ```db``` and builds the mp.


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

## put data to ssmp exchange

```
mp_put -i id -p target_fill/Value -d 0.5 
```
