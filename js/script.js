// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {

  // input

  let lengthA = parseFloat(document.getElementById('lengthA').value)
  let lengthB = parseFloat(document.getElementById('lengthB').value)
  let lengthC = parseFloat(document.getElementById('lengthC').value)

  // process

  let angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  let angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  let angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  let angleSum = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  // output

  if (angleSum != 180) {
    document.getElementById("user-info").innerHTML = "Impossible triangle."
  } else if (lengthA == lengthB && lengthB == lengthC) {
    document.getElementById("user-info").innerHTML = "Equilateral triangle."
  } else if (lengthA != lengthB && lengthB != lengthC && lengthC != lengthA) {
    document.getElementById("user-info").innerHTML = "Scalene triangle."
  } else {
    document.getElementById("user-info").innerHTML = "Isosceles triangle."
  }
}
