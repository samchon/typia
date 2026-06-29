import typia, { tags } from "typia";

type IRecursiveArray = IRecursiveArray[] & tags.MinItems<1>;

typia.random<IRecursiveArray>();
typia.createRandom<IRecursiveArray>();
