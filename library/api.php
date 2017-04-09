<?php
    $result = array(
        "error" => true,
        "message" => "Error interno del servidor"
    );

    function request($val){
        if(isset($_REQUEST[$val])){
            return $_REQUEST[$val];
        }else{
            sendError("Parametros insuficientes: no se encuentra el parametro " . $val);
        }
    };

    function getConnection(){
        $mysqli = new mysqli("localhost", "c0270025_jordi", "biko89laTA", "c0270025_jordi");

        if ($mysqli->connect_errno) {
            sendError("Error al intentar establecer la coneccion a la base");
        }else{
            return $mysqli;
        }
    }

    function createUser(){
        $c = getConnection();
        $titulo = $c->real_escape_string(request('titulo'));
        $seccion = $c->real_escape_string(request('seccion'));
        $subseccion = $c->real_escape_string(request('subseccion'));
        $proveedor = $c->real_escape_string(request('proveedor'));
        $cliente = $c->real_escape_string(request('cliente'));
        $fecha = $c->real_escape_string(request('fecha'));
        $url = $c->real_escape_string(request('url'));
        $skills = $c->real_escape_string(request('skills'));
        $detalle = $c->real_escape_string(request('detalle'));
        $miniatura = $c->real_escape_string(request('miniatura'));
        $imagenes = $c->real_escape_string(request('imagenes'));
        $query = "INSERT INTO works VALUES (
                    DEFAULT,
                    '$titulo',
                    '$seccion',
                    '$subseccion',
                    '$proveedor',
                    '$cliente',
                    '$fecha',
                    '$url',
                    '$skills',
                    '$detalle',
                    '$miniatura',
                    '$imagenes')";
        if($c->query($query)){
            sendResult(array("id_works" => $c->insert_id), "Proyecto creado");
        }else{
            sendError("Ocurrio un error al intentar crear el proyecto: " . $c->error);
        }
    }

    function updateUser(){
        $c = getConnection();
        $id = $c->real_escape_string(request('id'));
        $titulo = $c->real_escape_string(request('titulo'));
        $seccion = $c->real_escape_string(request('seccion'));
        $subseccion = $c->real_escape_string(request('subseccion'));
        $proveedor = $c->real_escape_string(request('proveedor'));
        $cliente = $c->real_escape_string(request('cliente'));
        $fecha = $c->real_escape_string(request('fecha'));
        $url = $c->real_escape_string(request('url'));
        $skills = $c->real_escape_string(request('skills'));
        $detalle = $c->real_escape_string(request('detalle'));
        $miniatura = $c->real_escape_string(request('miniatura'));
        $imagenes = $c->real_escape_string(request('imagenes'));
        $query = "UPDATE works SET
                    titulo = '$titulo',
                    seccion = '$seccion',
                    subseccion = '$subseccion',
                    proveedor = '$proveedor',
                    cliente = '$cliente',
                    fecha = '$fecha',
                    url = '$url',
                    skills = '$skills',
                    detalle = '$detalle',
                    miniatura = '$miniatura',
                    imagenes = '$imagenes'
                  WHERE id = $id";
        if($c->query($query)){
            sendResult(array("id_works" => request('id')), "Proyecto actualizado");
        }else{
            sendError("Ocurrio un error al intentar altualizar el proyecto");
        }
    }

    function deleteUser(){
        $c = getConnection();
        $id = $c->real_escape_string(request('id'));
        $query = "DELETE FROM works
                  WHERE id = $id";
        if($c->query($query)){
            sendResult(array(), "Proyecto eliminado");
        }else{
            sendError("Ocurrio un error al intentar eliminar el usuario");
        }
    }

    function listUsers(){
        $c = getConnection();
        $query = "SELECT * FROM works";
        $works = array();
        if ($resultado = $c->query($query)) {
            while ($fila = $resultado->fetch_assoc()) {
                $works[] = $fila;
            }
            $resultado->free();
            sendResult(array("works" => $works), "Ok");
        }else{
            sendError("No se encontraron resultados");
        }
    }

    function sendResult($data, $msg){
        $result['error'] = false;
        $result['message'] = $msg;
        $result['data'] = $data;
        die(json_encode($result));
    }

    function sendError($error){
        $result["message"] = $error;
        die(json_encode($result));
    }

    if(isset($_GET["action"])){
        $action = $_GET["action"];
        switch ($action) {
            case "list":
                listUsers();
                break;
            case "create":
                createUser();
                break;
            case "update":
                updateUser();
                break;
            case "delete":
                deleteUser();
                break;            
            default:
                sendError("La accion especificada es invalida");
                break;            
        }
    }else{
        sendError("No se especifico ninguna acción");
    }
    
?>