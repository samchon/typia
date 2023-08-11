import typia from "typia";

interface Dynamic {
    something: Record<string, number>;
}

const message: string = typia.protobuf.message<Dynamic>();
console.log(message);
