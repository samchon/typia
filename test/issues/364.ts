import typia from "../../src";

interface Something {
    [key: string]: number[];
}

console.log(
    typia.protobuf.message<Something>() +
        "\n---------------------------------------\n" +
        typia.protobuf.message<Map<string, number[]>>(),
);
