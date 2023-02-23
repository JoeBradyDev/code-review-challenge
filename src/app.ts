import { getCharacter } from "./swService";

/**
 * Console.logs are not an ideal part of a production application
 * but are considered OK for the context of facilitating conversation
 * for this exercise.
 */

console.log("Alpha");

getCharacter((data) => {
  console.log("Bravo ==>", data);
});

console.log("Charlie");
