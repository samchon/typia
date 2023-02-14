import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectGenericArray = _test_random(
    "ObjectGenericArray",
    typia.createRandom<ObjectGenericArray>(),
    typia.createAssert<typia.Primitive<ObjectGenericArray>>(),
);