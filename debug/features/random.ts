import typia, { tags } from "typia";

interface IMember {
  unique: string[] & tags.UniqueItems;
  plain: number[];
}

console.log(typia.createRandom<IMember>().toString());
