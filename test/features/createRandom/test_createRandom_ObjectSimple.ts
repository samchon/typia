import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectSimple = _test_random(
    "ObjectSimple",
    typia.createRandom<ObjectSimple>(),
    typia.createAssert<ObjectSimple>(),
);
