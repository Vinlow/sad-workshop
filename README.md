# S.A.D Results

## Part - A

The program answers are divided into the two RFC tasks and then divided in TCP and UDP.

### Answers

#### What is the remit of the IETF (Internet Engineering Task Force)?

The IETF is a organization, entrusted with the development of the internet protocols. The organization is responsible for many internet related standards

#### What is the RFC Editor used for?

The RFC Editor is a small group inside the ISOC which gives the RCF its format and contains an index of all available RFC Documents.

### Installation

**Install Dependencies**

```javascript
npm i
```

**Start Servers**

```javascript
node server.js
```

**Start Clients**

```javascript
node client.js
```

## Part - B

### Answers

#### What does HATEOAS mean?

#### Which standards do you know to implement HATEOS?

#### What ist the Richardson Maturity Model?

The R. M. Model is a three step (or level) approach for implementing a clean REST-API. It's orientating the levels Hypermedia, HTTP and URI in a pyramid style for a clean implementation of a RESTfull service.

#### Which problem can Siren (https://github.com/kevinswiber/siren) solve?

Like HTML is used for representing views and documents, the Siren Structure for JSONs is used for representing entities in REST-APIs.

### Installation

**Install Dependencies**

```javascript
npm i
```

**Start Server**

```javascript
node index.js
```

## Part - C

### Answers

#### What does Cross-site request forgery mean?

The CSRF is an attack vector where a request from another website is designed to look like a request from a valid user.

#### What is a CSRF Token?

A CSRF Token is used to mark this user. SITE A can save or read the token, to use it for the request. To make it secure, the token has to be as unique and unforeseeable as possible.

### Installation

**Install Dependencies**

```javascript
npm i
```

**Start Server**

```javascript
node server.js
```

**Start Client**

```javascript
node client.js
```

## Part - D

### Answers

#### What ist a work queue normally used for?

A work queue is used to ensure low waiting times while work intensive times. The high load will be distributed to many workers. It is even possible to spawn more workers while the load is increasing.

#### What does fair dispatch mean related to work queues?

A fair dispatch makes sure that very worker has the save amount of work to handle. One of the possible methods to ensure this is the round robin dispatching.

#### Should ReddisMQ be used for realtime critical applications?

RabbitMQ is ready for big enterprise and cloud solutions and is one of the best solutions for critical applications, as long as a secure connection between the single components guaranteed.

### Installation

**Install Dependencies**

```javascript
npm i
```

**Start Server**

```javascript
node server.js
```

**Start Client**

```javascript
node client.js
```
