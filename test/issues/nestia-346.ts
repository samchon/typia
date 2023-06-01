import typia from "typia";

type Repeated =
    | undefined
    | null
    | boolean
    | number
    | string
    | {
          [key: string]: Repeated;
      }
    | Repeated[]
    | [Repeated, Repeated];

const random = typia.createRandom<Repeated>();
console.log(random.toString());
console.log(new Array(10).fill("").map(random));

// console.log(typia.createIs<DefinitionArrayRecursiveOptional>().toString());
