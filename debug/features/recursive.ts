import typia, { tags } from "typia";

interface Tree {
  children?: Tree[] & tags.MinItems<1>;
}
console.log(typia.createIs<Tree>().toString());
