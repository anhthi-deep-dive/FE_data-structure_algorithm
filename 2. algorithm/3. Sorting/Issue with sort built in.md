# Issue with sort built in function

```
  const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
  letters.sort(); // ['a', 'b', 'd', 'e', 'r', 'z']
```

It's wrong with number because the sort `converts numbers to strings` and `sort with charCodeAt`

```
  const numbers = [2, 65, 34, 2, 1, 7, 8];
  numbers.sort(); // [1, 2, 2, 34, 65, 7, 8]
```

Solution

```
  const numbers = [2, 65, 34, 2, 1, 7, 8];
  numbers.sort((a, b) => {
    return a - b;
  });
```
