<?php
    // collect value of input field

    $keys = [
        "name",
        "phone",
        "email",
    ];

    $values = [count($keys)];

    for ($i = 0; $i < count($keys); $i++) {
        //verify field--
        $key = $keys[$i];
        $value = $_POST[$key];
        if (empty($value)) {
            echo "O campo {$key} não foi inserido<br/>";
            break;
        }
        //--

        //save the values
        $values[$i] = $value;
        //echo $values[$i];
    }

    //send the emails 
    sendEmail($values);


    function sendEmail($fieldValues){
        $to = "contatonatanielsoares@gmail.com";
        $subject = "Contato - NSR Informática";
        $body = "";
        $header = "From: contato@nsrinformatica.com";

        for ($i = 0; $i < count($fieldValues); $i++) {
            $body = $body." ".$fieldValues[$i].",";
        }

        if(mail($to, $subject, $body, $header))
            echo("Email enviado com sucesso!");
        else
            echo("O Email não pode ser enviado");

    }

?>