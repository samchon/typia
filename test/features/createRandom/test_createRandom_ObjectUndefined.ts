import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createRandom_ObjectUndefined = _test_random(
    "ObjectUndefined",
    typia.createRandom<ObjectUndefined>(),
    typia.createAssert<typia.Primitive<ObjectUndefined>>(),
);
