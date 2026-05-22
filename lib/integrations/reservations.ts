export type ReservationIntent = {
  vehicleId: string;
  pickupDate?: string;
  returnDate?: string;
  customerName?: string;
};

export interface ReservationProvider {
  createIntent(input: ReservationIntent): Promise<{ id: string; status: "draft" | "confirmed" }>;
}
