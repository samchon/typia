import typia from "typia";

interface Something {
    a: string;
    b: number;
    c?: boolean;
}

console.log(typia.createEquals<Something>().toString());
