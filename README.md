# identite-atelier4

## Liste des routes

### Inscription d'un utilisateur
Route : ```/auth/signup``` : Méthode POST

Cette route permet l'inscription d'un nouvel utilisateur.

**Les paramètres** nécéssaire sont :
- ```username``` : *minimum 1 caractère*
- ```firstname``` : *minimum 1 caractère*
- ```lastname``` : *minimum 1 caractère*
- ```email``` : *il faut une adresse mail valide*
- ```password``` : *minimum 6 caractère*

**La réponse** est un code 201 et un JSON avec comme info :
- ```token```
	- ```sub:``` c'est l'id de l'utilisateur
	- ```exp``` c'est la date d'expiration du token

Si il y a une erreur la réponse sera un code 404 avec l'erreur d'indiquer

### Connexion d'un utilisateur
Route : ```/auth/login``` : Méthode POST

Cette route permet la connexion à un utilisateur.

**Les paramètres** nécéssaire sont :
- ```email```  : *il faut une adresse mail valide*
- ```password``` : *minimum 6 caractère*

**La réponse** est un code 200 et un JSON avec comme info :
- ```token```
	- ```sub:``` c'est l'id de l'utilisateur
	- ```exp``` c'est la date d'expiration du token

Si il y a une erreur la réponse sera un code 404 avec l'erreur d'indiquer

### Information d'un utilisateur
Route : ```/auth/me``` : Méthode GET

Cette route permet la connexion à un utilisateur.

Il faut utiliser un **Bearer authentification**.

**La réponse** est un code 200 et un JSON avec comme info :
- ```username```
- ```firstname```
- ```lastname```
- ```email```

Si il y a une erreur la réponse sera un code 404 avec l'erreur d'indiquer

## Commande
Pour lancer le projet :
```
npm start
```

Pour effectuer les testes :
```
npm test
```
