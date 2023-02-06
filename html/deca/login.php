<?php
    if (isset($_POST["heslo"])) {
        if ($_POST["heslo"] == "1189") include "deca.html";
        else include "error.html";
    } else http_redirect("dandadin.eu/deca");
