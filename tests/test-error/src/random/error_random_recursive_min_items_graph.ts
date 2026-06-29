import typia, { tags } from "typia";

interface IParent {
  name: string;
  children: IChild[] & tags.MinItems<1>;
}

interface IChild {
  name: string;
  parent: IParent;
}

typia.random<IParent>();
typia.createRandom<IParent>();
