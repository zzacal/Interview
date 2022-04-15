import { Airplane, AirplaneService } from "./airplane-service";

const planes = new AirplaneService();

var airplane1: Airplane = {};

planes.save(airplane1);
