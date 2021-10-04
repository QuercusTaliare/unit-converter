export function convertUnits(unitOneNumber, unitOne, unitTwo) {
  if (unitOne === unitTwo) {
    return parseInt(unitOneNumber)
  }
  if (unitOne === "Kilometer" && unitTwo === "Meter") {
    return parseInt(unitOneNumber) * 1000
  }
  if (unitOne === "Kilometer" && unitTwo === "Centimeter") {
    return parseInt(unitOneNumber) * 100000
  }
  if (unitOne === "Kilometer" && unitTwo === "Millimeter") {
    return parseInt(unitOneNumber) * 1000000
  }
  if (unitOne === "Meter" && unitTwo === "Kilometer") {
    return parseInt(unitOneNumber) / 1000
  }
  if (unitOne === "Meter" && unitTwo === "Centimeter") {
    return parseInt(unitOneNumber) * 100
  }
  if (unitOne === "Meter" && unitTwo === "Millimeter") {
    return parseInt(unitOneNumber) * 1000
  }
  if (unitOne === "Centimeter" && unitTwo === "Kilometer") {
    return parseInt(unitOneNumber) / 100000
  }
  if (unitOne === "Centimeter" && unitTwo === "Meter") {
    return parseInt(unitOneNumber) / 1000
  }
  if (unitOne === "Centimeter" && unitTwo === "Millimeter") {
    return parseInt(unitOneNumber) * 10
  }
  if (unitOne === "Millimeter" && unitTwo === "Kilometer") {
    return parseInt(unitOneNumber) / 1000000
  }
  if (unitOne === "Millimeter" && unitTwo === "Meter") {
    return parseInt(unitOneNumber) / 1000
  }
  if (unitOne === "Millimeter" && unitTwo === "Centimeter") {
    return parseInt(unitOneNumber) / 10
  }
}

export function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2")
}