-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: arviointi
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `arviointi`
--

DROP TABLE IF EXISTS `arviointi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arviointi` (
  `idArviointi` int NOT NULL AUTO_INCREMENT,
  `Paivamaara` date DEFAULT NULL,
  `Arvosana` tinyint DEFAULT NULL,
  `idOpiskelija` int DEFAULT NULL,
  `idOpintojakso` int DEFAULT NULL,
  PRIMARY KEY (`idArviointi`),
  KEY `fk_idOpiskelija` (`idOpiskelija`),
  KEY `fk_idOpintojakso` (`idOpintojakso`),
  CONSTRAINT `fk_idOpintojakso` FOREIGN KEY (`idOpintojakso`) REFERENCES `opintojakso` (`idOpintojakso`) ON DELETE CASCADE,
  CONSTRAINT `fk_idOpiskelija` FOREIGN KEY (`idOpiskelija`) REFERENCES `opiskelija` (`idOpiskelija`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arviointi`
--

LOCK TABLES `arviointi` WRITE;
/*!40000 ALTER TABLE `arviointi` DISABLE KEYS */;
INSERT INTO `arviointi` VALUES (1,'2014-09-05',1,1,1),(2,'2014-09-05',1,1,3),(3,'2014-09-05',0,1,7),(4,'2014-09-05',4,2,1),(5,'2014-09-05',2,2,3),(6,'2014-09-05',4,3,1),(7,'2014-09-05',3,3,3),(8,'2014-09-05',5,4,5),(9,'2014-09-05',4,4,3),(10,'2014-09-05',5,5,3),(11,'2014-09-05',1,5,1);
/*!40000 ALTER TABLE `arviointi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-14 13:44:24
