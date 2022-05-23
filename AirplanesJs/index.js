import { AirplaneService } from "./airplane-service.js";

const planes = new AirplaneService();

const airplane1 = {
  id: 0,
  name: "Major Lift",
  seats: 200,
};

planes.save(airplane1);
const result = planes.get(airplane1.id);

console.log(result.id);
