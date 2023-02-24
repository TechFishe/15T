import { writable } from "svelte/store";

export const showAlert = writable(false);
export const songTitle = writable("No title :(")
export const msg = writable("playing")
export const customAlert = writable(false);