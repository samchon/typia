import typia from "typia";

type Art = `${string}art${string}`;
type Bar = `${string}bar${string}`;

console.log(typia.createIs<Art & Bar>().toString());
