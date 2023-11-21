import typia from "typia";

interface IMember {
  id: string;
  name: number;
  children: Array<IMember>;
}
console.log(typia.misc.createPrune<[number, ...IMember[]]>().toString());
