import TSON from "../../src";

interface Something {
    map: Map<string, number>;
    record: Record<number, string>;
    dynamic: Dynamic;
}
interface Dynamic {
    [key: string]: string;
}

console.log(TSON.message<Dynamic>());
