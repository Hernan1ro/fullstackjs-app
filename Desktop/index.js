const { app, BrowserWindow } = require("electron");

let appWindow;

function crearVentana() {
  appWindow = new BrowserWindow({});

  // Cuando la aplicación es cerrada
  appWindow.on("close", () => {
    appWindow = null;
  });

  // Cargat HTML
  appWindow.loadFile("./index.html");

  // cuando la app este lista, mostar venta
  appWindow.once("ready-to-show", () => {
    appWindow.show();
  });
}

app.on("ready", crearVentana);
