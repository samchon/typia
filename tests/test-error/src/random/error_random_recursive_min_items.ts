import typia, { tags } from "typia";

interface INode {
  value: string;
  children: INode[] & tags.MinItems<1>;
}

typia.random<INode>();
typia.createRandom<INode>();
