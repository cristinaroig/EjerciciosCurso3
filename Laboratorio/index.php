<!DOCTYPE html>
<html>

<head>
 <title>Actividad Api</title>  
 
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 <link rel="stylesheet" href="style.css" type="text/css"/>
 <script src="index.js"></script>
</head>

<body>
   <div id="division">
   <form method= "POST" action="">
    <h2>Formulario del Ejercicio PHP</h2>
    <div class="form-group row">
    <label for="nombre" class="col-sm-2 col-form-label titulo ">Nombre</label>
    <div class="caja">
    <input type="text" class="form-control" name="nombre" id="nombre" required/></br>
    </div>
    </div>
    <div class="form-group row">
    <label for="pApellido" class="col-sm-2 col-form-label titulo">Primer Apellido</label>
    <div class="caja">
    <input type="text" class="form-control" name="pApellido" id="pApellido" required/></br>
</div>
</div>
<div class="form-group row">
    <label for="sApellido" class="col-sm-2 col-form-label titulo">Segundo Apellido</label>
    <div class="caja">
    <input type="text" class="form-control" name="sApellido" id="sApellido" required/></br>
</div>
</div>
<div class="form-group row">
    <label for="email"class="col-sm-2 col-form-label titulo">Email</label>
    <div class="caja">
    <input type="email" class="form-control"name="email" id="email" required/></br>
    </div>
</div>
<div class="form-group row">
    <label for="login"class="col-sm-2 col-form-label titulo">Login</label>
    <div class="caja">
    <input type="text" class="form-control"name="login" id="login" required/></br>
    </div>
</div>
<div class="form-group row">
    <label for="password"class="col-sm-2 col-form-label titulo" >Password</label>
    <div class="caja">
    <input type="password" class="form-control"name="password" id="password" maxlength="8" minlength="4" required /></br>
    </div>
</div>
    <div class= "botones">
    <input type="reset" name="limpiar" class = "btn btn-primary" value="Limpiar"/>
    <input type = "submit" name="suscribirse" class = "btn btn-primary" value ="Crear"/>
    <input type="submit" name="consulta" id="consulta" class = "btn btn-primary" value = "Consulta Usuario" disabled/> 
</div>

    <?php
    function existeEmail($email){
        $conexion = new mysqli("localhost", "root", "","laboratoriophp");
        if (!$conexion){
            die("Conexion fallida: ". mysqli_connect_error());
           }
    
          $consulta = "SELECT count(email) E FROM usuario where email =\"".$email."\"; ";
          $datos = $conexion -> query($consulta);
          $fila = $datos -> fetch_assoc();
          $datos -> free_result();
          mysqli_close($conexion);
          return $fila ["E"];
    }
   function consulta() {
    $conexion = new mysqli("localhost", "root", "","laboratoriophp");
    
    if (!$conexion){
        die("Conexion fallida: ". mysqli_connect_error());
       }

      $consulta = "SELECT NOMBRE, P_APELLIDO, S_APELLIDO, EMAIL , concat(substring(login,1,2),'*****') L, '*****' P FROM usuario; ";
      $datos = $conexion -> query($consulta);
      
  
   echo "<table class= \"table datos\" id=\"user\">";
   echo "<tr>";
   echo "<td>NOMBRE</td>";
   echo "<td>PRIMER APELLIDO</td>";
   echo "<td>SEGUNDO APELLIDO</td>";
   echo "<td>EMAIL</td>";
   echo "<td>LOGIN</td>";
   echo "<td>PASSWORD</td>";
   echo"</tr>";
    while($fila = $datos -> fetch_assoc()){
        echo "<tr>";
        echo "<td> ". $fila["NOMBRE"]. " </td>";
        echo "<td> ". $fila["P_APELLIDO"]. "</td>";
        echo "<td> ". $fila["S_APELLIDO"]. "</td>";
        echo "<td> ". $fila["EMAIL"]. "</td>";
        echo "<td> ". $fila["L"]. "</td>";
        echo "<td> ". $fila["P"]. "</td>";
        echo"</tr>";
    }
    echo "</table>";
    echo "<button onclick= limpiarTabla() class= \"btn btn-primary btn-lg\">Atras</button>";
    $datos -> free_result();
    mysqli_close($conexion);
}
   if($_POST && isset($_POST['suscribirse'])){
        
        $nombre = $_POST['nombre'];
        $pApellido = $_POST['pApellido'];
        $sApellido = $_POST['sApellido'];
        if (preg_match("/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/", $_POST['email']) == 1){
        $email = $_POST['email'];
        }
        else $email = "";
        $login = $_POST['login'];
        if ( strlen($_POST['password']) <= 8  || strlen($_POST['password']) >= 4){
        $password = $_POST['password'];
        }
        else $password = "";
        $servidor = "localhost";
        $usuario = "root";
        $contrasenya = "";
        $bd = "laboratoriophp";
    if($email != "" && $password != "" && existeEmail($email)== 0){
       $conexion = mysqli_connect($servidor, $usuario, $contrasenya,$bd);
       if (!$conexion){
        die("Conexion fallida: ". mysqli_connect_error());
       }
       $sql = "INSERT INTO USUARIO (nombre, p_apellido,s_apellido, email,login,password) VALUES ('$nombre','$pApellido','$sApellido','$email','$login','$password')";
       if(mysqli_query($conexion,$sql)){
        echo'';
        echo'<script>alert("Se ha Registrado correctamente")</script>';
        echo '<script> document.getElementById("consulta").disabled = false; </script>';
        echo "<script> document.getElementById(\"nombre\").value = \"". $nombre ."\";</script>";
        echo "<script> document.getElementById(\"pApellido\").value = \"". $pApellido ."\";</script>";
        echo "<script> document.getElementById(\"sApellido\").value = \"". $sApellido ."\";</script>";
        echo "<script> document.getElementById(\"email\").value = \"". $email ."\";</script>";
        echo "<script> document.getElementById(\"login\").value = \"". $login ."\";</script>";
        echo "<script> document.getElementById(\"password\").value = \"". $password ."\";</script>";
       }

       else{
        echo"<script>alert(\"ha habido un error en el registro " . $conexion->error . "\"
         )</script>";
       }
       mysqli_close($conexion);
    }
    elseif ($email == "") {
        echo"<script>alert(\"Email no correcto\")</script>";        
        echo "<script> document.getElementById(\"nombre\").value = \"". $nombre ."\";</script>";
        echo "<script> document.getElementById(\"pApellido\").value = \"". $pApellido ."\";</script>";
        echo "<script> document.getElementById(\"sApellido\").value = \"". $sApellido ."\";</script>";
        echo "<script> document.getElementById(\"email\").value = \"". $email ."\";</script>";
        echo "<script> document.getElementById(\"login\").value = \"". $login ."\";</script>";
        echo "<script> document.getElementById(\"password\").value = \"". $password ."\";</script>";
    }
    elseif ($password ==""){
        echo"<script>alert(\"Longitud de la Contraseña no correcta\")</script>";        
        echo "<script> document.getElementById(\"nombre\").value = \"". $nombre ."\";</script>";
        echo "<script> document.getElementById(\"pApellido\").value = \"". $pApellido ."\";</script>";
        echo "<script> document.getElementById(\"sApellido\").value = \"". $sApellido ."\";</script>";
        echo "<script> document.getElementById(\"email\").value = \"". $email ."\";</script>";
        echo "<script> document.getElementById(\"login\").value = \"". $login ."\";</script>";
        echo "<script> document.getElementById(\"password\").value = \"". $password ."\";</script>";
    }
    else{
        echo"<script>alert(\"Ya existe usuario con el email ". $email ." debes cambiarlo para poder crear el usuario\")</script>";        
        echo "<script> document.getElementById(\"nombre\").value = \"". $nombre ."\";</script>";
        echo "<script> document.getElementById(\"pApellido\").value = \"". $pApellido ."\";</script>";
        echo "<script> document.getElementById(\"sApellido\").value = \"". $sApellido ."\";</script>";
        echo "<script> document.getElementById(\"email\").value = \"". $email ."\";</script>";
        echo "<script> document.getElementById(\"login\").value = \"". $login ."\";</script>";
        echo "<script> document.getElementById(\"password\").value = \"". $password ."\";</script>";
        }
}
    elseif (isset($_POST['consulta'])){
        consulta();
    }
   


    ?>
</form>
    </div>
    <div id= "usuario">
</div>
</body>

</html>