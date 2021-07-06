This program is a basic demo to show the **HTTP-PROXY** example.

Since this program is a *http-proxy* over the other **backend server**, we have to start **2 servers**.

1. **Parent Server** which is the original server which responds, and is going to start at 3000 (please check server1/index.js)
2. **Proxy Server**, the server we hit which internally hit the *server1* and gets back the data. This server starts at 4567 (please check server2/index.js)

Steps:

1. Go to server1 -> npm start
2. Go to server2 -> npm start

Go to browser and hit localhost:<PORT_OF_PROXY>, eg: _http://localhost:4567_

The above call hit the Proxy Server with **GET** call which internally lands on the other server and gets the data back.
