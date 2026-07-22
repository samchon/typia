import typia, { tags } from "typia";

type BoolUnique = Array<boolean> & tags.UniqueItems;
type LiteralUnique = Array<"a" | "b"> & tags.UniqueItems & tags.MinItems<2>;
type SmallIntUnique = Array<number & tags.Type<"uint32"> & tags.Maximum<3>> &
  tags.UniqueItems &
  tags.MinItems<2>;
type EnumUnique = Array<1 | 2 | 3> & tags.UniqueItems;
type SetBool = Set<boolean>;
type BoundedUnique = Array<
  number & tags.Type<"uint32"> & tags.Minimum<0> & tags.Maximum<1>
> &
  tags.UniqueItems;

const sweep = <T>(
  name: string,
  random: () => T,
  is: (input: unknown) => boolean,
  draws: number = 200,
): void => {
  let thrown = 0;
  let invalid = 0;
  let ok = 0;
  let message = "";
  for (let i = 0; i < draws; ++i) {
    try {
      const value: T = random();
      if (is(value)) ++ok;
      else ++invalid;
    } catch (error) {
      ++thrown;
      message = error instanceof Error ? error.message : String(error);
    }
  }
  console.log(
    `${name.padEnd(34)} ok=${String(ok).padStart(3)} threw=${String(thrown).padStart(3)} invalid=${invalid}${thrown ? ` :: ${message}` : ""}`,
  );
};

sweep<BoolUnique>("boolean[] & UniqueItems", typia.createRandom<BoolUnique>(), typia.createIs<BoolUnique>());
sweep<LiteralUnique>('("a"|"b")[] & Unique & Min<2>', typia.createRandom<LiteralUnique>(), typia.createIs<LiteralUnique>());
sweep<SmallIntUnique>("uint32<=3 [] & Unique & Min<2>", typia.createRandom<SmallIntUnique>(), typia.createIs<SmallIntUnique>());
sweep<EnumUnique>("(1|2|3)[] & UniqueItems", typia.createRandom<EnumUnique>(), typia.createIs<EnumUnique>());
sweep<SetBool>("Set<boolean>", typia.createRandom<SetBool>(), typia.createIs<SetBool>());
sweep<BoundedUnique>("uint32 0..1 [] & UniqueItems", typia.createRandom<BoundedUnique>(), typia.createIs<BoundedUnique>());

// Control: a wide element domain must never throw.
type WideUnique = Array<number & tags.Type<"uint32">> & tags.UniqueItems;
sweep<WideUnique>("uint32[] & UniqueItems (control)", typia.createRandom<WideUnique>(), typia.createIs<WideUnique>());
