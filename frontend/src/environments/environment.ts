/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'weijielam-fsnd.eu', // the auth0 domain prefix
    audience: 'coffee-shop-fsnd-wei', // the audience set for the auth0 app
    clientId: 'WpgFSHIjjC94Sh3YKK4Z3dR6GBqY33Dp', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
