

client = new Paho.MQTT.Client("d57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud", 8884, "mqttsend");

client.connect({ /*událost, podařilo se připojit = onSuccess, reaguji na ní fcí, která mě zajímá*/
    onSuccess: onConnect,
    userName: "robot",
    password: "P@ssW0rd!",
    useSSL: true
});

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.onMessageArrived = onMessageArrived; /*říci, že mě ta událost zajímá*/
    client.subscribe("bridge/#"); /*zapsání se k odběru zpráv*/
}

function onMessageArrived(message) { 
    console.log("onMessageArrived:" + message.destinationName); /*kam ta zpráva dorazila + hodnota*/
    console.log("onMessageArrived:" + message.payloadString);   /* payload = obsah zprávy*/
    /*jak to má být:*/ 
        
    /* let zobrazTeplotu = document.querySelector("#teplota");
    zobrazTeplotu.textContent=message.payloadString;*/
}

function sendMessage(){
    message = new Paho.MQTT.Message(document.getElementById("payload").value);  /*value = obsah textového pole*/
    message.destinationName = "/row/13/message"; 
    client.send(message); 
    payload.value = " "
}

