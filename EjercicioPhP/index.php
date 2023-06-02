<!DOCTYPE html>
<html>

<head>
 <title>Actividad Api</title>  
 
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 <link rel="stylesheet" href="style.css" type="text/css"/>
</head>

<body>
   <div id="division">
   <form method= "POST" action="">
    <h2>Formulario del Ejercicio PHP</h2>
    <div class="form-group row">
    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" name="nombre" id="nombre" required/></br>
    </div>
    </div>
    <div class="form-group row">
    <label for="apellido" class="col-sm-2 col-form-label">Apellidos</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" name="apellido" required/></br>
</div>
</div>
<div class="form-group row">
    <label for="email"class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
    <input type="email" class="form-control"name="email" required/></br>
    </div>
</div>
    <button type = "submit" class = "form-btn btn-primary btn-lg">Suscribirse</button>
    <?php
    if($_POST){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $email = $_POST['email'];
       // echo($nombre . $apellido . $email);
        $servidor = "localhost";
        $usuario = "root";
        $contrasenya = "";
        $bd = "cursosql";

       $conexion = mysqli_connect($servidor, $usuario, $contrasenya,$bd);
       if (!$conexion){
        die("Conexion fallida: ". mysqli_connect_error());
       }
       $sql = "INSERT INTO USUARIO (nombre, apellido, email) VALUES ('$nombre','$apellido','$email')";
       if(mysqli_query($conexion,$sql)){
        echo'<script>alert("Se ha Registrado correctamente")</script>';
       }
       else{
        echo"<script>alert(\"ha habido un error en el registro " . $conexion->error . "\"
         )</script>";
       }
       mysqli_close($conexion);
    }
    ?>
</form>
    </div>
</body>

</html>