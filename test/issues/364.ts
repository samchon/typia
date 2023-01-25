import typia from "../../src";

interface Something {
    [key: string]: number[];
}

console.log(
    typia.message<Something>() +
        "\n---------------------------------------\n" +
        typia.message<Map<string, number[]>>(),
);
