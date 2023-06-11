-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2023 a las 20:57:06
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laboratoriophp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(30) DEFAULT NULL,
  `P_APELLIDO` varchar(30) DEFAULT NULL,
  `S_APELLIDO` varchar(30) DEFAULT NULL,
  `EMAIL` varchar(30) DEFAULT NULL,
  `LOGIN` varchar(30) DEFAULT NULL,
  `PASSWORD` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `NOMBRE`, `P_APELLIDO`, `S_APELLIDO`, `EMAIL`, `LOGIN`, `PASSWORD`) VALUES
(1, 'Cristina', 'Roig', 'Roig', 'c@gmail.com', 'prueba', 'prueba'),
(2, 'Cristina', 'Roig', 'Roig', 'cr@gmail.com', 'prueba', 'prueba'),
(3, 'David', 'prueba', 'hola', 'd@p.com', 'asss', '123456'),
(4, 'Lola', 'pruba', 'perez', 'd@gmail.com', 'asa', 'ssssss'),
(5, 'Lola', 'pruba', 'perez', 'da@gmail.com', 'asa', 'ssssss'),
(6, 'Lola', 'pruba', 'perez', 'ded@gmail.com', 'asa', 'ssssss'),
(7, 'prueba', 'crear', 'crear', 'aaaa@gm.com', 'sdfd', 'sfsdf'),
(8, 'prrsdfs', 'sfsdf', 'fsf', 'w@g.com', 'sdf', 'sfdsf'),
(9, 'prrsdfs', 'sfsdf', 'fsf', 'we@g.com', 'sdf', 'sfdsf'),
(10, 'hola', 'hola', 'ssss', 'wty@g.com', 'aad', 'adad'),
(11, 'hola', 'hola', 'ssss', 'wop@g.com', 'aad', 'adad'),
(12, 'voz', 'asa', 'asdf', 'fyy@f.com', 'dada', '4466'),
(13, 'voz', 'asa', 'asdf', 'fee@f.com', 'dada', '4466'),
(14, 'afdkj', 'sdfjlsdfj', 'fjklsdfjk', 'ptr@k.com', 'fdsf', 'dfsd'),
(15, 'afdkj', 'sdfjlsdfj', 'fjklsdfjk', 'pgg@k.com', 'fdsf', 'dfsd'),
(16, 'afdkj', 'sdfjlsdfj', 'fjklsdfjk', 'pjj@k.com', 'fdsf', 'dfsd'),
(17, 'dd', 'cc', 'ccdd', 'hkhhk@gmail.com', 'asdasd', '1244');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
