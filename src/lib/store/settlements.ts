import { writable } from "svelte/store";
import type { Settlement } from "../api/settlements";

export const settlements = writable<Settlement[]>([]);
