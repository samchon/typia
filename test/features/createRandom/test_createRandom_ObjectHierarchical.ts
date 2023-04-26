import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createRandom_ObjectHierarchical = _test_random(
    "ObjectHierarchical",
    typia.createRandom<ObjectHierarchical>(),
    typia.createAssert<typia.Primitive<ObjectHierarchical>>(),
);
