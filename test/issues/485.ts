import typia from "typia";

interface IMember {
    id: string;
    name: number;
    children: Array<IMember>;
}
console.log(typia.createPrune<[number, ...IMember[]]>().toString());
