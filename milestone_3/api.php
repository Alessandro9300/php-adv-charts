<?php

  include "./database.php";

    header('Content-Type: application/json');

    $myData = [];
    $valoreData = [];
    $valoreKey = [];

    $access = $_GET["user"];

    foreach ($graphs["fatturato_by_agent"]["data"] as $key => $value) {
      $valoreData[] = $value;
      $valoreKey[] = $key;
    }

    $myData["fatturato"] = [
      "tipo" =>  $graphs["fatturato"]["type"],
      "data" =>  $graphs["fatturato"]["data"],
      "accesso" => $graphs["fatturato"]["access"]
    ];

    if ($access == $graphs["fatturato_by_agent"]["access"] || $access == $graphs["team_efficiency"]["access"]){

      $myData["fatturatoAgenti"] = [
        "tipo" => $graphs["fatturato_by_agent"]["type"],
        "data" => $valoreData,
        "nomi" => $valoreKey,
        "accesso" => $graphs["fatturato_by_agent"]["access"]
      ];
    }

    if ($access == $graphs["team_efficiency"]["access"]){
      $myData["teamEfficiency"] = [
        "tipo" => $graphs["team_efficiency"]["type"],
        "data" => $graphs["team_efficiency"]["data"],
        "accesso" => $graphs["team_efficiency"]["access"]
      ];

    }

    echo json_encode($myData);
?>
