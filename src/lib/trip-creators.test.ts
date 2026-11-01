import { describe, expect, it } from "vitest";
import { canCreateTrips } from "./trip-creators";

describe("canCreateTrips", () => {
  it("allows everyone when the list is unset or blank", () => {
    expect(canCreateTrips("a@example.com", undefined)).toBe(true);
    expect(canCreateTrips("a@example.com", " , ")).toBe(true);
  });
  it("allows listed emails regardless of case and spacing", () => {
    expect(canCreateTrips("A@Example.com", "b@example.com, a@example.com ")).toBe(true);
  });
  it("rejects unlisted, missing and partial matches", () => {
    expect(canCreateTrips("c@example.com", "a@example.com")).toBe(false);
    expect(canCreateTrips(null, "a@example.com")).toBe(false);
    expect(canCreateTrips("xa@example.com", "a@example.com")).toBe(false);
  });
});
