import typia from "typia";

type MyArrayLike = ReadonlyArray<number>;
console.log(typia.createIs<MyArrayLike>().toString());
