# identite-atelier4

## Liste des routes

### Inscription d'un utilisateur
Route : ```/auth/signup```
Cette route permet l'inscription d'un nouveau vendeur.

**Les paramètres** nécéssaire sont :
- ```username```
- ```firstname```
- ```lastname```
- ```email```
- ```password```

**La réponse** est un code 202 et un JSON avec comme info :
- ```token```
	- ```sub:``` c'est l'id du vendeur
	- ```exp``` c'est la date d'expiration du token

Si il y a une erreur la réponse sera un code 404 avec le l'erreur d'indiquer

### Connexion d'un utilisateur
Route : ```/auth/signin```
Cette route permet la connexion à un vendeur.

**Les paramètres** nécéssaire sont :
- ```email```
- ```password```

**La réponse** est un code 202 et un JSON avec comme info :
- ```token```
	- ```sub:``` c'est l'id du vendeur
	- ```exp``` c'est la date d'expiration du token

Si il y a une erreur la réponse sera un code 404 avec le l'erreur d'indiquer

### Information d'un utilisateur
Route : ```/auth/me```
Cette route permet la connexion à un vendeur.

**Le paramètre** nécéssaire est :
- ```token```
	- ```sub:``` c'est l'id du vendeur
	- ```exp``` c'est la date d'expiration du token

**La réponse** est un code 202 et un JSON avec comme info :
- ```username```
- ```firstname```
- ```lastname```
- ```email```

Si il y a une erreur la réponse sera un code 404 avec le l'erreur d'indiquer

## Commande
Pour lancer le projet :
```
npm start
```

Pour effectuer les testes :
```
npm test
```
