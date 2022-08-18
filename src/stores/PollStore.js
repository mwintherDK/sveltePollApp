import { writable } from "svelte/store";

const PollStore = writable([
  {
    question: "Whats blue and smells like red paint?",
    answer1: "Dunno mate...",
    answer2: "Blue paint!",
    answer1Votes: 3,
    answer2Votes: 5,
    id: 1,
  },
]);

export default PollStore;
