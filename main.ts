import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke entry for make.fun's "Make the AI Judge Laugh:
// the Office Joke Open" bounty. Deterministic: the same line is written
// on every run, with no network access and no reads outside this repo.
//
// The joke: reply-all irony — the narrator tries to escape the thread by
// doing the very thing they're complaining about, and twelve people follow
// suit "to agree". The payoff lands in the last few words.
const JOKE =
  "I replied-all to say 'please remove me from this thread,' and twelve people replied-all to agree.";

// Guard: the bounty requires exactly one line of 1-200 characters.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
