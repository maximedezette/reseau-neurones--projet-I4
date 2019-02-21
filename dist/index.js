

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http:// www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ==============================================================================
 */

// This tiny example illustrates how little code is necessary build /
// train / predict from a model in TensorFlow.js.  Edit this code
// and refresh the index.html to quickly explore the API.

// Tiny TFJS train / predict example.

var model;


async function run() {


var sepalLength = parseFloat(document.getElementById("sepal_length").value);
var sepalWidth = parseFloat(document.getElementById("sepal_width").value);
var petalLength = parseFloat(document.getElementById("petal_length").value);
var petalWidth = parseFloat(document.getElementById("petal_width").value);


var irisTesting = [
  {
    "sepal_length": 5.7,
    "sepal_width": 2.9,
    "petal_length": 4.2,
    "petal_width": 1.3,
   
  },
  {
    "sepal_length": 5.4,
    "sepal_width": 3.9,
    "petal_length": 1.7,
    "petal_width": 0.4,
    "species": "setosa"
  },
  {
    "sepal_length": 5.9,
    "sepal_width": 3,
    "petal_length": 5.1,
    "petal_width": 1.8,
    "species": "virginica"
  },
  {
    "sepal_length": 5.7,
    "sepal_width": 2.9,
    "petal_length": 4.2,
    "petal_width": 1.3,
    "species": "versicolor"
  }
  
];
    
  


  irisTesting[0]['sepal_length'] = sepalLength;
  irisTesting[0]['sepal_width'] = sepalWidth;
  irisTesting[0]['petal_length'] = petalLength;
  irisTesting[0]['petal_width'] = petalWidth;

  console.log(irisTesting);
 
// Données pour l'entrainement
 var iris= [
    {
      "sepal_length": 5.1,
      "sepal_width": 3.5,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.9,
      "sepal_width": 3,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.7,
      "sepal_width": 3.2,
      "petal_length": 1.3,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.6,
      "sepal_width": 3.1,
      "petal_length": 1.5,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3.6,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.6,
      "sepal_width": 3.4,
      "petal_length": 1.4,
      "petal_width": 0.3,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3.4,
      "petal_length": 1.5,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.4,
      "sepal_width": 2.9,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.9,
      "sepal_width": 3.1,
      "petal_length": 1.5,
      "petal_width": 0.1,
      "species": "setosa"
    },
    {
      "sepal_length": 5.4,
      "sepal_width": 3.7,
      "petal_length": 1.5,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.8,
      "sepal_width": 3.4,
      "petal_length": 1.6,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.8,
      "sepal_width": 3,
      "petal_length": 1.4,
      "petal_width": 0.1,
      "species": "setosa"
    },
    {
      "sepal_length": 4.3,
      "sepal_width": 3,
      "petal_length": 1.1,
      "petal_width": 0.1,
      "species": "setosa"
    },
    {
      "sepal_length": 5.8,
      "sepal_width": 4,
      "petal_length": 1.2,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.7,
      "sepal_width": 4.4,
      "petal_length": 1.5,
      "petal_width": 0.4,
      "species": "setosa"
    },
    {
      "sepal_length": 5.4,
      "sepal_width": 3.9,
      "petal_length": 1.3,
      "petal_width": 0.4,
      "species": "setosa"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 3.5,
      "petal_length": 1.4,
      "petal_width": 0.3,
      "species": "setosa"
    },
    {
      "sepal_length": 5.7,
      "sepal_width": 3.8,
      "petal_length": 1.7,
      "petal_width": 0.3,
      "species": "setosa"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 3.8,
      "petal_length": 1.5,
      "petal_width": 0.3,
      "species": "setosa"
    },
    {
      "sepal_length": 5.4,
      "sepal_width": 3.4,
      "petal_length": 1.7,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 3.7,
      "petal_length": 1.5,
      "petal_width": 0.4,
      "species": "setosa"
    },
    {
      "sepal_length": 4.6,
      "sepal_width": 3.6,
      "petal_length": 1,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 3.3,
      "petal_length": 1.7,
      "petal_width": 0.5,
      "species": "setosa"
    },
    {
      "sepal_length": 4.8,
      "sepal_width": 3.4,
      "petal_length": 1.9,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3,
      "petal_length": 1.6,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3.4,
      "petal_length": 1.6,
      "petal_width": 0.4,
      "species": "setosa"
    },
    {
      "sepal_length": 5.2,
      "sepal_width": 3.5,
      "petal_length": 1.5,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.2,
      "sepal_width": 3.4,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.7,
      "sepal_width": 3.2,
      "petal_length": 1.6,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.8,
      "sepal_width": 3.1,
      "petal_length": 1.6,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.4,
      "sepal_width": 3.4,
      "petal_length": 1.5,
      "petal_width": 0.4,
      "species": "setosa"
    },
    {
      "sepal_length": 5.2,
      "sepal_width": 4.1,
      "petal_length": 1.5,
      "petal_width": 0.1,
      "species": "setosa"
    },
    {
      "sepal_length": 5.5,
      "sepal_width": 4.2,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.9,
      "sepal_width": 3.1,
      "petal_length": 1.5,
      "petal_width": 0.1,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3.2,
      "petal_length": 1.2,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.5,
      "sepal_width": 3.5,
      "petal_length": 1.3,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.9,
      "sepal_width": 3.1,
      "petal_length": 1.5,
      "petal_width": 0.1,
      "species": "setosa"
    },
    {
      "sepal_length": 4.4,
      "sepal_width": 3,
      "petal_length": 1.3,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 3.4,
      "petal_length": 1.5,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3.5,
      "petal_length": 1.3,
      "petal_width": 0.3,
      "species": "setosa"
    },
    {
      "sepal_length": 4.5,
      "sepal_width": 2.3,
      "petal_length": 1.3,
      "petal_width": 0.3,
      "species": "setosa"
    },
    {
      "sepal_length": 4.4,
      "sepal_width": 3.2,
      "petal_length": 1.3,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3.5,
      "petal_length": 1.6,
      "petal_width": 0.6,
      "species": "setosa"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 3.8,
      "petal_length": 1.9,
      "petal_width": 0.4,
      "species": "setosa"
    },
    {
      "sepal_length": 4.8,
      "sepal_width": 3,
      "petal_length": 1.4,
      "petal_width": 0.3,
      "species": "setosa"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 3.8,
      "petal_length": 1.6,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 4.6,
      "sepal_width": 3.2,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5.3,
      "sepal_width": 3.7,
      "petal_length": 1.5,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 5,
      "sepal_width": 3.3,
      "petal_length": 1.4,
      "petal_width": 0.2,
      "species": "setosa"
    },
    {
      "sepal_length": 7,
      "sepal_width": 3.2,
      "petal_length": 4.7,
      "petal_width": 1.4,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.4,
      "sepal_width": 3.2,
      "petal_length": 4.5,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.9,
      "sepal_width": 3.1,
      "petal_length": 4.9,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.5,
      "sepal_width": 2.3,
      "petal_length": 4,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.5,
      "sepal_width": 2.8,
      "petal_length": 4.6,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.7,
      "sepal_width": 2.8,
      "petal_length": 4.5,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 3.3,
      "petal_length": 4.7,
      "petal_width": 1.6,
      "species": "versicolor"
    },
    {
      "sepal_length": 4.9,
      "sepal_width": 2.4,
      "petal_length": 3.3,
      "petal_width": 1,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.6,
      "sepal_width": 2.9,
      "petal_length": 4.6,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.2,
      "sepal_width": 2.7,
      "petal_length": 3.9,
      "petal_width": 1.4,
      "species": "versicolor"
    },
    {
      "sepal_length": 5,
      "sepal_width": 2,
      "petal_length": 3.5,
      "petal_width": 1,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.9,
      "sepal_width": 3,
      "petal_length": 4.2,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 6,
      "sepal_width": 2.2,
      "petal_length": 4,
      "petal_width": 1,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.1,
      "sepal_width": 2.9,
      "petal_length": 4.7,
      "petal_width": 1.4,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.6,
      "sepal_width": 2.9,
      "petal_length": 3.6,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 3.1,
      "petal_length": 4.4,
      "petal_width": 1.4,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.6,
      "sepal_width": 3,
      "petal_length": 4.5,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.8,
      "sepal_width": 2.7,
      "petal_length": 4.1,
      "petal_width": 1,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.2,
      "sepal_width": 2.2,
      "petal_length": 4.5,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.6,
      "sepal_width": 2.5,
      "petal_length": 3.9,
      "petal_width": 1.1,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.9,
      "sepal_width": 3.2,
      "petal_length": 4.8,
      "petal_width": 1.8,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.1,
      "sepal_width": 2.8,
      "petal_length": 4,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 2.5,
      "petal_length": 4.9,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.1,
      "sepal_width": 2.8,
      "petal_length": 4.7,
      "petal_width": 1.2,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.4,
      "sepal_width": 2.9,
      "petal_length": 4.3,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.6,
      "sepal_width": 3,
      "petal_length": 4.4,
      "petal_width": 1.4,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.8,
      "sepal_width": 2.8,
      "petal_length": 4.8,
      "petal_width": 1.4,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 3,
      "petal_length": 5,
      "petal_width": 1.7,
      "species": "versicolor"
    },
    {
      "sepal_length": 6,
      "sepal_width": 2.9,
      "petal_length": 4.5,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.7,
      "sepal_width": 2.6,
      "petal_length": 3.5,
      "petal_width": 1,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.5,
      "sepal_width": 2.4,
      "petal_length": 3.8,
      "petal_width": 1.1,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.5,
      "sepal_width": 2.4,
      "petal_length": 3.7,
      "petal_width": 1,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.8,
      "sepal_width": 2.7,
      "petal_length": 3.9,
      "petal_width": 1.2,
      "species": "versicolor"
    },
    {
      "sepal_length": 6,
      "sepal_width": 2.7,
      "petal_length": 5.1,
      "petal_width": 1.6,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.4,
      "sepal_width": 3,
      "petal_length": 4.5,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 6,
      "sepal_width": 3.4,
      "petal_length": 4.5,
      "petal_width": 1.6,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 3.1,
      "petal_length": 4.7,
      "petal_width": 1.5,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 2.3,
      "petal_length": 4.4,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.6,
      "sepal_width": 3,
      "petal_length": 4.1,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.5,
      "sepal_width": 2.5,
      "petal_length": 4,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.5,
      "sepal_width": 2.6,
      "petal_length": 4.4,
      "petal_width": 1.2,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.1,
      "sepal_width": 3,
      "petal_length": 4.6,
      "petal_width": 1.4,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.8,
      "sepal_width": 2.6,
      "petal_length": 4,
      "petal_width": 1.2,
      "species": "versicolor"
    },
    {
      "sepal_length": 5,
      "sepal_width": 2.3,
      "petal_length": 3.3,
      "petal_width": 1,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.6,
      "sepal_width": 2.7,
      "petal_length": 4.2,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.7,
      "sepal_width": 3,
      "petal_length": 4.2,
      "petal_width": 1.2,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.2,
      "sepal_width": 2.9,
      "petal_length": 4.3,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.1,
      "sepal_width": 2.5,
      "petal_length": 3,
      "petal_width": 1.1,
      "species": "versicolor"
    },
    {
      "sepal_length": 5.7,
      "sepal_width": 2.8,
      "petal_length": 4.1,
      "petal_width": 1.3,
      "species": "versicolor"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 3.3,
      "petal_length": 6,
      "petal_width": 2.5,
      "species": "virginica"
    },
    {
      "sepal_length": 5.8,
      "sepal_width": 2.7,
      "petal_length": 5.1,
      "petal_width": 1.9,
      "species": "virginica"
    },
    {
      "sepal_length": 7.1,
      "sepal_width": 3,
      "petal_length": 5.9,
      "petal_width": 2.1,
      "species": "virginica"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 2.9,
      "petal_length": 5.6,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6.5,
      "sepal_width": 3,
      "petal_length": 5.8,
      "petal_width": 2.2,
      "species": "virginica"
    },
    {
      "sepal_length": 7.6,
      "sepal_width": 3,
      "petal_length": 6.6,
      "petal_width": 2.1,
      "species": "virginica"
    },
    {
      "sepal_length": 4.9,
      "sepal_width": 2.5,
      "petal_length": 4.5,
      "petal_width": 1.7,
      "species": "virginica"
    },
    {
      "sepal_length": 7.3,
      "sepal_width": 2.9,
      "petal_length": 6.3,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 2.5,
      "petal_length": 5.8,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 7.2,
      "sepal_width": 3.6,
      "petal_length": 6.1,
      "petal_width": 2.5,
      "species": "virginica"
    },
    {
      "sepal_length": 6.5,
      "sepal_width": 3.2,
      "petal_length": 5.1,
      "petal_width": 2,
      "species": "virginica"
    },
    {
      "sepal_length": 6.4,
      "sepal_width": 2.7,
      "petal_length": 5.3,
      "petal_width": 1.9,
      "species": "virginica"
    },
    {
      "sepal_length": 6.8,
      "sepal_width": 3,
      "petal_length": 5.5,
      "petal_width": 2.1,
      "species": "virginica"
    },
    {
      "sepal_length": 5.7,
      "sepal_width": 2.5,
      "petal_length": 5,
      "petal_width": 2,
      "species": "virginica"
    },
    {
      "sepal_length": 5.8,
      "sepal_width": 2.8,
      "petal_length": 5.1,
      "petal_width": 2.4,
      "species": "virginica"
    },
    {
      "sepal_length": 6.4,
      "sepal_width": 3.2,
      "petal_length": 5.3,
      "petal_width": 2.3,
      "species": "virginica"
    },
    {
      "sepal_length": 6.5,
      "sepal_width": 3,
      "petal_length": 5.5,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 7.7,
      "sepal_width": 3.8,
      "petal_length": 6.7,
      "petal_width": 2.2,
      "species": "virginica"
    },
    {
      "sepal_length": 7.7,
      "sepal_width": 2.6,
      "petal_length": 6.9,
      "petal_width": 2.3,
      "species": "virginica"
    },
    {
      "sepal_length": 6,
      "sepal_width": 2.2,
      "petal_length": 5,
      "petal_width": 1.5,
      "species": "virginica"
    },
    {
      "sepal_length": 6.9,
      "sepal_width": 3.2,
      "petal_length": 5.7,
      "petal_width": 2.3,
      "species": "virginica"
    },
    {
      "sepal_length": 5.6,
      "sepal_width": 2.8,
      "petal_length": 4.9,
      "petal_width": 2,
      "species": "virginica"
    },
    {
      "sepal_length": 7.7,
      "sepal_width": 2.8,
      "petal_length": 6.7,
      "petal_width": 2,
      "species": "virginica"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 2.7,
      "petal_length": 4.9,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 3.3,
      "petal_length": 5.7,
      "petal_width": 2.1,
      "species": "virginica"
    },
    {
      "sepal_length": 7.2,
      "sepal_width": 3.2,
      "petal_length": 6,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6.2,
      "sepal_width": 2.8,
      "petal_length": 4.8,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6.1,
      "sepal_width": 3,
      "petal_length": 4.9,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6.4,
      "sepal_width": 2.8,
      "petal_length": 5.6,
      "petal_width": 2.1,
      "species": "virginica"
    },
    {
      "sepal_length": 7.2,
      "sepal_width": 3,
      "petal_length": 5.8,
      "petal_width": 1.6,
      "species": "virginica"
    },
    {
      "sepal_length": 7.4,
      "sepal_width": 2.8,
      "petal_length": 6.1,
      "petal_width": 1.9,
      "species": "virginica"
    },
    {
      "sepal_length": 7.9,
      "sepal_width": 3.8,
      "petal_length": 6.4,
      "petal_width": 2,
      "species": "virginica"
    },
    {
      "sepal_length": 6.4,
      "sepal_width": 2.8,
      "petal_length": 5.6,
      "petal_width": 2.2,
      "species": "virginica"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 2.8,
      "petal_length": 5.1,
      "petal_width": 1.5,
      "species": "virginica"
    },
    {
      "sepal_length": 6.1,
      "sepal_width": 2.6,
      "petal_length": 5.6,
      "petal_width": 1.4,
      "species": "virginica"
    },
    {
      "sepal_length": 7.7,
      "sepal_width": 3,
      "petal_length": 6.1,
      "petal_width": 2.3,
      "species": "virginica"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 3.4,
      "petal_length": 5.6,
      "petal_width": 2.4,
      "species": "virginica"
    },
    {
      "sepal_length": 6.4,
      "sepal_width": 3.1,
      "petal_length": 5.5,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6,
      "sepal_width": 3,
      "petal_length": 4.8,
      "petal_width": 1.8,
      "species": "virginica"
    },
    {
      "sepal_length": 6.9,
      "sepal_width": 3.1,
      "petal_length": 5.4,
      "petal_width": 2.1,
      "species": "virginica"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 3.1,
      "petal_length": 5.6,
      "petal_width": 2.4,
      "species": "virginica"
    },
    {
      "sepal_length": 6.9,
      "sepal_width": 3.1,
      "petal_length": 5.1,
      "petal_width": 2.3,
      "species": "virginica"
    },
    {
      "sepal_length": 5.8,
      "sepal_width": 2.7,
      "petal_length": 5.1,
      "petal_width": 1.9,
      "species": "virginica"
    },
    {
      "sepal_length": 6.8,
      "sepal_width": 3.2,
      "petal_length": 5.9,
      "petal_width": 2.3,
      "species": "virginica"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 3.3,
      "petal_length": 5.7,
      "petal_width": 2.5,
      "species": "virginica"
    },
    {
      "sepal_length": 6.7,
      "sepal_width": 3,
      "petal_length": 5.2,
      "petal_width": 2.3,
      "species": "virginica"
    },
    {
      "sepal_length": 6.3,
      "sepal_width": 2.5,
      "petal_length": 5,
      "petal_width": 1.9,
      "species": "virginica"
    },
    {
      "sepal_length": 6.5,
      "sepal_width": 3,
      "petal_length": 5.2,
      "petal_width": 2,
      "species": "virginica"
    },
    {
      "sepal_length": 6.2,
      "sepal_width": 3.4,
      "petal_length": 5.4,
      "petal_width": 2.3,
      "species": "virginica"
    }
  ];
  

   model = tf.sequential();
  
  const trainingData = tf.tensor2d(iris.map(item => [
      item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
  ]))

  //On définie les sorties possibles
  const outputData = tf.tensor2d(iris.map(item => [
      item.species === "setosa" ? 1 : 0,
      item.species === "virginica" ? 1 : 0,
      item.species === "versicolor" ? 1 : 0,
  ]))


  const testingData = tf.tensor2d(irisTesting.map(item => [
      item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
  ]))


// Les entrées
  model.add(tf.layers.dense({
      inputShape: [4],
      activation: "sigmoid",
      units: 4,
  }))

  // Première couche cachée
  model.add(tf.layers.dense({
      inputShape: [5],
      activation: "sigmoid",
      units: 3,
  }))

  // Couche de sortie
  model.add(tf.layers.dense({
      activation: "sigmoid",
      units: 3,
  }))

  // Fonction d'erreur
  model.compile({
      loss: "meanSquaredError",
      optimizer: tf.train.adam(.06),
  })
  // Entrainement du réseau
  const startTime = Date.now()
  model.fit(trainingData, outputData, {
          epochs: 100
      })
      .then((history) => {
          
        // Prédiction des données de test
          model.predict(testingData).print();
          const values = model.predict(testingData);

      

          values.slice([0, 0], 1).as1D().print();
          console.log(Array.prototype.slice.call(values.slice([0, 0], 1).as1D().dataSync()));

          var array = Array.prototype.slice.call(values.slice([0, 0], 1).as1D().dataSync());

          console.log("setosa: " + array[0]);
        
          console.log("veronica: " + array[1]);

          console.log("versicolor: " + array[2]);

          
        })
        
}







$('#testbtn').click(
  function() { 
  run();
});
