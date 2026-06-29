import typia, { tags } from "typia";

type Children = INode[] & tags.MinItems<1>;

interface INode {
  value: string;
  children: Children;
}

typia.random<INode>();
typia.createRandom<INode>();
