<center>
    <h1>Date in Json</h1>
</center>

- The ideia: create a diferent way that other people can use week days
---


```
{
  "for_use": "host/api/week"
}
```

using the route:

```
https://dateinjson.vercel.app/api/week/
```

select by number

```
1 to 7 or/and add the country
```

```
// https://dateinjson.vercel.app/api/week/1

{
  "num": 1,
  "pt": "Domingo",
  "pt-br": "Domingo"
}
```

```
// https://dateinjson.vercel.app/api/week/1/en

{
  "num": 1,
  "country": "en",
  "day": "Sunday"
}
```
---

## Tasks

✅ add json file

✅ add get all route

✅ add get by param (number of day in the week)

✅ add get by number of weekday and country

💤 add get by local language

💤 add all the languages in json file

---
## Colab
