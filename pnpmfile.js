module.exports = {
  hooks: {
    readPackage
  }
}

function readPackage(pkg) {
if (pkg.dependencies["@vaadin/vaadin-date-picker"]) {
  pkg.dependencies["@vaadin/vaadin-date-picker"] = "4.1.1";
}

if (pkg.dependencies["@vaadin/vaadin-date-time-picker"]) {
  pkg.dependencies["@vaadin/vaadin-date-time-picker"] = "1.1.0";
}

if (pkg.dependencies["@vaadin/vaadin-time-picker"]) {
  pkg.dependencies["@vaadin/vaadin-time-picker"] = "2.1.0";
}

  return pkg;
}
