import typia from "typia";

type JsonValue = string | number | JsonValue[] | boolean[] | IMember | IPoint3D;
interface IMember {
    id: string;
    name: string | null;
}
interface IPoint3D {
    x: number;
    y: number;
    z: number;
}

console.log(typia.createIs<JsonValue>().toString());
console.log(typia.createStringify<JsonValue>().toString());
