## client side mp

### ini

```
db_get -i db/id | mp_ini -i id
```
Gets the document ```id``` from the database ```db``` and pipes it to
```mp_ini```. 


### load container

```
mp_ctrl -i id -c 0 -d 'load'
```

Loads the first (0) Container of the mp.

## next:
- ssmp
