Backend Axa (Api REST)
==========

Api for search clients and policies linked to clients

# Client

## Retrive Client By ID



	GET /clients/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id	  | String	  |  <p>Client id</p>                    |

## Retrive Client By Name



	GET /clients/by-name/:name


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name	  | String	  |  <p>Client name</p>                  |

# Policie

## Retrive Policies By Client Name



	GET /policies/by-name/:name


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name	  | String	  |  <p>Client name linked to policies</p>                    |
| begin			| Number			| **optional** <p>Pagination begin number.</p>							|
| end			| Number			| **optional** <p>Amount of returned items.</p>				

## Retrive Client Data By Policie Number



	GET  /policies/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id	  | String	  |  <p>Policie number linked to client</p>                  |