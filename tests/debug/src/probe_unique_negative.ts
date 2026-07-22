import typia, { tags } from "typia";

// Negative twin: a genuinely unsatisfiable request must still fail.
type Impossible = Array<boolean> & tags.UniqueItems & tags.MinItems<3>;
// Boundary: the domain exactly covers the floor.
type Exact = Array<boolean> & tags.UniqueItems & tags.MinItems<2> & tags.MaxItems<2>;
// Boundary: window entirely inside the domain.
type Inside = Array<boolean> & tags.UniqueItems & tags.MaxItems<2>;

const sweep = <T>(
  name: string,
  random: () => T,
  is: (input: unknown) => boolean,
  draws: number = 100,
): void => {
  let thrown = 0;
  let invalid = 0;
  let ok = 0;
  for (let i = 0; i < draws; ++i) {
    try {
      const value: T = random();
      if (is(value)) ++ok;
      else ++invalid;
    } catch {
      ++thrown;
    }
  }
  console.log(`${name.padEnd(40)} ok=${ok} threw=${thrown} invalid=${invalid}`);
};

sweep<Impossible>("boolean[] & Unique & MinItems<3> (must throw)", typia.createRandom<Impossible>(), typia.createIs<Impossible>());
sweep<Exact>("boolean[] & Unique & Items 2..2", typia.createRandom<Exact>(), typia.createIs<Exact>());
sweep<Inside>("boolean[] & Unique & MaxItems<2>", typia.createRandom<Inside>(), typia.createIs<Inside>());
