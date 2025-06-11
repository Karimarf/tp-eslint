### lien github:https://github.com/Karimarf/tp-eslint

## 2
# 2

![img.png](img.png)

On observe qu'il y a 5 problemes (3 erreurs et 2 warnings) 
Je vais donc utilisé la commande npx eslint --fix app.js

# 3
Apres le remplacement des console.log en print, on observe que les erreurs on disparues.

## 3
# 3
1:1   warning  Unexpected console statement             no-console
2:3   error    Expected indentation of 2 spaces but found 4  indent
3:5   error    Strings must use singlequote             quotes

✖ 3 problems (2 errors, 1 warning)

-Apres avoir fait la commande npm run lint , on observe qu'il y a des erreurs


## 5

![img_1.png](img_1.png)

## 6
- je crée une branche avec la commande git checkout -b feature/ajout-fonction afin de conserver mes derniers commit

- Apres avoir crée la branch , je crée un file app.js avec des erreurs , evidament le commit passe pas.

- je commit apres les modifications et pourtant dans les github action ça bloque 
![img_2.png](img_2.png)
