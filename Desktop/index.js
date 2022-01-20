const { app, BrowserWindow } = require("electron");

let appWindow;

function crearVentana() {
  appWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: true,
    minWidth: 800,
    minHeight: 600,
    center: true,
    show: false,
    icon: "icon.png",
  });

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
