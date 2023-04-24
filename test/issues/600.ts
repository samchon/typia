import typia from "typia";

console.log(
    typia.random<[1, 2, 3, 4, 5, 6]>(),
    typia.createRandom<[1, 2, 3, 4, 5, 6]>(),
);
