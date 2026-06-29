import typia, { tags } from "typia";

interface INode {
  value: string;
  nested: [INode[] & tags.MinItems<1>] | null;
}

typia.random<INode>();
typia.createRandom<INode>();
