import typia from "../../src";

interface Something {
    map: Map<string, number>;
    record: Record<number, string>;
    dynamic: Dynamic;
}
interface Dynamic {
    [key: string]: string;
}

console.log(typia.message<Dynamic>());
