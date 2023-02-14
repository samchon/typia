import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectGeneric = _test_random(
    "ObjectGeneric",
    typia.createRandom<ObjectGeneric>(),
    typia.createAssert<typia.Primitive<ObjectGeneric>>(),
);