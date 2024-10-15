export interface ListActiveTicketsResponse {
  total: number;
  tickets: Ticket[];
}

export interface Ticket {
  plate: string;
  typeOfVehicle: string;
  arrivalTime: Date;
  departureTime: Date;
  fee: number;
  uid: string;
}
