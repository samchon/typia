import typia from "typia";

type Art = `${string}art${string}`;
type Bar = `${string}bar${string}`;

typia.createIs<Art & Bar>();
