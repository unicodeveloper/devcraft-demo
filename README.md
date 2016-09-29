# DevCraft Demo - KE Food Quest

This is a sample app to demonstrate use of auth0 for identity management in an SPA. This is codelab from a workshop at DevCraft 2016 by [Segun Famisa](https://github.com/segunfamisa) and I.

A user signs into the app to unlock a tasty plate of Kenyan delicacy. Most likely the Ughali

## Screenshots

![screen shot 2016-09-29 at 5 25 26 am](https://cloud.githubusercontent.com/assets/2946769/18939004/b79e42a8-8605-11e6-85de-b509ebff9570.png)
_HomePage_
![screen shot 2016-09-29 at 5 25 42 am](https://cloud.githubusercontent.com/assets/2946769/18939006/b79f314a-8605-11e6-971d-29bf4470d7ba.png)
_Auth0 lock Widget_
![screen shot 2016-09-29 at 5 25 11 am](https://cloud.githubusercontent.com/assets/2946769/18939005/b79ebf26-8605-11e6-975b-cd57b76a3d60.png)
_Profile Info_
![screen shot 2016-09-29 at 5 25 03 am](https://cloud.githubusercontent.com/assets/2946769/18939008/b7a0bd9e-8605-11e6-8770-f81113ba3dbc.png)
_Serves Ughali


## Installation

After cloning the repo, go ahead and do the following:

```bash
bower install
```

Place your Auth0 `clientID` and `domain` in `lockProvider.init`.

```js
// app.js

...

lockProvider.init({
  clientID: AUTH0_CLIENT_ID,
  domain: AUTH0_DOMAIN
});

...
```

To run this project, you can use `http-server` or `webpack-dev-server`:

```bash
npm install -g http-server

http-server
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [JSON Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
