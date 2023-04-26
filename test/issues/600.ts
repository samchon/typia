import typia from "typia";

console.log(
    typia.random<readonly [1, 2, 3, 4, 5, 6]>(),
    typia.random<[1, 2, 3, 4, 5, 6]>(),
    typia.random<number[]>(),
    typia.random<number[][]>(),
    typia.random<boolean[][]>(),
    typia.random<[number, boolean]>(),
    typia.random<{ name: string }[]>(),
    typia.random<[false, true, true, 2, 3, 4, "five", "six", "seven"]>(),
    typia.random<[Boolean]>(),
    typia.random<[Boolean[]]>(),

    typia.createRandom<readonly [1, 2, 3, 4, 5, 6]>(),
    typia.createRandom<[1, 2, 3, 4, 5, 6]>(),
    typia.createRandom<number[]>(),
    typia.createRandom<number[][]>(),
    typia.createRandom<boolean[][]>(),
    typia.createRandom<[number, boolean]>(),
    typia.createRandom<{ name: string }[]>(),
);
