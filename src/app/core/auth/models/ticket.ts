export interface ticket{
  plate:string,
  typeOfVehicle:string
}
export interface TicketResponse {
  plate:         string;
  typeOfVehicle: string;
  arrivalTime:   Date;
  departureTime: Date;
  fee:           number;
  uid:           string;
}
