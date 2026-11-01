import { requireUser } from "@/auth";
import { createTrip } from "@/app/actions/trips";
import { TripForm } from "@/components/TripForm";
import { BackToTrips } from "@/components/TripTabs";
import { canCreateTrips } from "@/lib/trip-creators";

export default async function NewTripPage() {
  const user = await requireUser("/trips/new");
  if (!canCreateTrips(user.email)) {
    return (
      <div className="space-y-3">
        <BackToTrips />
        <div className="card p-8 text-center">
          <p className="font-medium">New trips are limited on this site</p>
          <p className="muted mt-1 text-sm">Ask the organizer for their invite link to join a trip.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <BackToTrips />
      <div className="card p-6">
        <h1 className="mb-5 text-xl font-semibold">Start a trip</h1>
        <TripForm action={createTrip} submitLabel="Create trip" />
      </div>
    </div>
  );
}
