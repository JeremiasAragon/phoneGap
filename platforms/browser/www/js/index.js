var app = {
    onBatteryStatus: function(evt) {
        // Manejar el evento
        document.getElementById('container').style.height=evt.level + "%";
        document.getElementsByTagName('h1')[0].innerHTML=evt.level + "%";
        var p = document.querySelector('.received');
        var status = evt.isPlugged ? "Enchufado" : "Desenchufado";
        p.innerHTML = p.innerHTML + "<br />" + status;
    },
    onBatteryCritical: function(evt) {
        // Que hacer cuando llegue a nivel critico
        alert("Nivel de bateria critico " + evt.level + "%\nBuscar enchufe!");
    },
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.getElementById('device').innerHTML = device.manufacturer + '  ' + device.model;
        app.receivedEvent('deviceready');
        window.addEventListener('batterystatus', app.onBatteryStatus, false);
        window.addEventListener('batterycritical', app.onBatteryCritical, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
