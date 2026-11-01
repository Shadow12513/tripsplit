/**
 * Whether this email may start new trips. TRIP_CREATOR_EMAILS is a
 * comma-separated list; leave it unset to let anyone who signs in create trips.
 * Joining an existing trip by invite is never restricted.
 */
export function canCreateTrips(
  email: string | null | undefined,
  list: string | undefined = process.env.TRIP_CREATOR_EMAILS,
): boolean {
  const allowed = (list ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  if (allowed.length === 0) return true;
  return !!email && allowed.includes(email.trim().toLowerCase());
}
