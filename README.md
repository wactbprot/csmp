## client side mp

### ini

```
db_get -i db/id | mp_ini -i id
```
Gets the document ```id``` from the database ```db``` and pipes it to
```mp_ini```. 


### ctrl container

```
mp_ctrl -i id -c 0 -d 'load'
```

Loads the first (0) Container of the mp.


## status request


```
mp_stat -i id -c 0 
```

Returns the status of the  first (0) Container of the mp.

## next:
- ssmp
