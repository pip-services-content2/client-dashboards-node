# Dashboards Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-dashboards](https://github.com/pip-services-content2/service-dashboards-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client
* Direct client
* Null test client

<a name="links"></a> Quick Links:

* [Development Dashboard](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-dashboards-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('client-dashboards-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.DashboardsHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
} catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Get a dashboard
let dashboard = await client.getDashboard(
    null,
    '123', 'Test App 1', 'default'
);
```

```javascript
// Sets an updated dashboard
let dashboard = await client.setDashboard(
    null,
    dashboard
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

