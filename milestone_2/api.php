<?php

  include "./database.php";


    header('Content-Type: application/json');

    $myData = [];
    $valoreData = [];
    $valoreKey = [];


    foreach ($graphs["fatturato_by_agent"]["data"] as $key => $value) {

      $valoreData[] = $value;

      $valoreKey[] = $key;

    }


    $myData["fatturato"] = [

    "tipo" =>  $graphs["fatturato"]["type"],
    "data" =>  $graphs["fatturato"]["data"]


    ];

    $myData["fatturatoAgenti"] = [

      "tipo" => $graphs["fatturato_by_agent"]["type"],
      "data" => $valoreData,
      "nomi" => $valoreKey

    ];



    echo json_encode($myData);
?>
