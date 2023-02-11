import typia from "../../src";

interface IMember {
    id: string;
    name: number;
    children: Array<IMember>;
}
console.log(typia.createPrune<[number, ...IMember[]]>().toString());
