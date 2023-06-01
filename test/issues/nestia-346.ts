import typia from "typia";

type Repeated = string | boolean[] | Repeated[];

const factory = typia.createIs<Repeated>();
console.log(factory.toString());

// console.log(typia.createIs<DefinitionArrayRecursiveOptional>().toString());
