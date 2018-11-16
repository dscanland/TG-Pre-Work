let availableAirplanes = [{
name: 'AeroJet',
fuelCapacity: 800,
availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300,
},

{
 name: 'SkyJet',
fuelCapacity: 500,
availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
 minSpeed: 200,
}];

let flightRequirements = {
 requiredStaff: 4,
 requiredSpeedRange: 700,
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
 const range = maxSpeed - minSpeed;
 if (range > requiredSpeedRange) {
   return true;
 } else {
   return false;
 }
 };


function meetsStaffRequirements(availableStaff, requiredStaff) {
 if (availableStaff.length >= requiredStaff) {
   return true;
 } else {
   return false;
 }
};
export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

// I learned that you can us the export as to export a variables with new aliases 
