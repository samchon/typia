import typia from "../../src";

interface Something {
    a: string;
    b: number;
    c?: boolean;
}

console.log(typia.createEquals<Something>().toString());
