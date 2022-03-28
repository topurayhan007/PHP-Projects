-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2022 at 09:38 PM
-- Server version: 8.0.27
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my-contact-form`
--

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `firstName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(320) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phoneNo` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subject` varchar(500) NOT NULL,
  `message` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`firstName`, `lastName`, `email`, `phoneNo`, `subject`, `message`) VALUES
('Topu', 'Rayhan', 'topurayhan007@gmail.com', '01558004412', 'First Trial', 'Here is my first message'),
('MD. Khalid', 'Hossen', 'khalidhossen123@gmail.com', '012345678', '2ND trail', 'Hello there'),
('Sanzar', 'Alam', 'sanzar-alam@gmail.com', '0122221221', '3rd trial', 'Hello there. hope doing well');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
