# Client API (version 1) <br/> Dashboards Microservices Client SDK for Node.js / ES2017

Node.js client API for Dashboards microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [TileV1 class](#class1)
* [TileGroupV1 class](#class2)
* [DashboardV1 class](#class3)
* [IDashboardsClientV1 interface](#interface)
    - [getDashboards()](#operation1)
    - [getDashboard()](#operation2)
    - [setDashboard()](#operation3)
    - [deleteDashboards()](#operation4)
* [DashboardsHttpClientV1 class](#client_http)
* [DashboardsSenecaClientV1 class](#client_seneca)
* [DashboardsLambdaClientV1 class](#client_lambda)
* [DashboardsDirectClientV1 class](#client_direct)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

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

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('client-dashboards-node');

// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
var client = sdk.DashboardsHttpClientV1(config);

// Open client connection to the microservice
await client.open(null);
    
console.log('Opened connection');
        
    // Get a dashboard
let dashboard = await client.getDashboard(
    null,
    '123', 'Test App 1', 'default'
);

console.log('Created dashboard is');
console.log(dashboard);
        
// Sets an updated dashboard
let dashboard = await client.setDashboard(null, dashboard);

console.log('Updated dashboard is');
console.log(dashboard);
                
// Close connection
await client.close(null); 
```

## Data types

### <a name="class1"></a> TileV1 class

Contains a single tile from a tile group

**Properties:**
- title: string - tile title
- index: number - tile index within its group
- size: string - tile size
- color: string - background color
- params: any - tile configuration parameters

### <a name="class2"></a> TileGroupV1 class

Contains a group of tiles from a dashboard

**Properties:**
- title: string - group title
- index: number - group index within dashboard
- tiles: TileV1[] - tiles from this group

### <a name="class3"></a> DashboardV1 class

Represents an application dashboard. 

**Properties:**
- id: string - unique dashboard id
- user_id: string - owner id
- app: string - application name
- kind: string - (optional) id to choose from multiple dashboards within the same app
- groups: TileGroupV1[] - groups of tiles

## <a name="interface"></a> IDashboardsClientV1 interface

If you are using Typescript, you can use IDashboardsClientV1 as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IDashboardsClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IDashboardsClientV1 {
    getDashboards(correlationId, filter, paging);
    getDashboard(correlationId, userId, app, kind);
    setDashboard(correlationId, dashboard);
    deleteDashboards(correlationId, filter);
}
```

### <a name="operation1"></a> getDashboards(correlationId, filter, paging)

Retrieves a list of dashboards by specified criteria

**Params properties:** 
- correlationId: string - id that uniquely identifies transaction
- filter: object - filter parameters
  - id: string - (optional) dashboard unique id
  - user_id: string - (optional) user unique id
  - app: string - (optional) application name
  - kind: string - (optional) dashboard kind. It allows multiple dashboards for an app
- paging: object - paging parameters
  - paging: bool - (optional) true to enable paging and return total count
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
- return: DataPage<DashboardV1> - retrieved page of Dashboard objects

### <a name="operation2"></a> getDashboard(correlationId, userId, app, kind)

Retrieves dashboard by its unique id. 

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- userId: string - user unique id
- app: string - application name
- kind: string - dashboard kind. It allows multiple dashboards for an app
- return: DashboardV1 - retrieved Dashboard object

### <a name="operation3"></a> setDashboard(correlationId, dashboard)

Sets a new or updates existing dashboard

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- dashboard: DashboardV1 - a dashboard to be updated
- return: DashboardV1 - updated Dashboard object
 
### <a name="operation4"></a> deleteDashboards(correlationId, filter)

Deletes system dashboard specified by search criteria

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- filter: object - filter parameters
  - id: string - (optional) dashboard unique id
  - user_id: string - (optional) user unique id
  - app: string - (optional) application name
  - kind: string - (optional) dashboard kind. It allows multiple dashboards for an app
 
## <a name="client_http"></a> DashboardsHttpClientV1 class

DashboardsHttpClientV1 is a client that implements HTTP protocol

```javascript
class DashboardsHttpClientV1 extends CommandableHttpClient implements IDashboardsClientV1 {
    constructor(config: any);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getDashboards(correlationId, filter, paging);
    getDashboard(correlationId, userId, app, kind);
    setDashboard(correlationId, dashboard);
    deleteDashboards(correlationId, filter);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> DashboardsSenecaClientV1 class

DashboardsSenecaClientV1 is a client that implements Seneca protocol

```javascript
class DashboardsSenecaClientV1 extends CommandableSenecaClient implements IDashboardsClientV1 {
    constructor(config: any);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getDashboards(correlationId, filter, paging);
    getDashboard(correlationId, userId, app, kind);
    setDashboard(correlationId, dashboard);
    deleteDashboards(correlationId, filter);
}
```

**Constructor config properties:** 
- connection: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - type: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_seneca"></a> DashboardsLambdaClientV1 class

DashboardsLambdaClientV1 is a client that connects to AWS lambda function

```javascript
class DashboardsLambdaClientV1 extends CommandableLambdaClient implements IDashboardsClientV1 {
    constructor(config: any);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getDashboards(correlationId, filter, paging);
    getDashboard(correlationId, userId, app, kind);
    setDashboard(correlationId, dashboard);
    deleteDashboards(correlationId, filter);
}
```

**Constructor config properties:** 
- connection: object - AWS lambda connection options. 
  - type: string - 'aws'
  - arn: string - Lambda function arn
- credential: object - AWS lambda credential options
  - access_id: string - Amazon access id
  - access_key: string - Amazon secret access key

## <a name="client_seneca"></a> DashboardsDirectClientV1 class

DashboardsDirectClientV1 is a client that calls controller directly from the same container.
It can be used in monolythic deployments when multiple microservices run in the same process.

```javascript
class DashboardsDirectClientV1 extends DirectClient implements IDashboardsClientV1 {
    constructor(config: any);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getDashboards(correlationId, filter, paging);
    getDashboard(correlationId, userId, app, kind);
    setDashboard(correlationId, dashboard);
    deleteDashboards(correlationId, filter);
}
```
