import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectTuple = _test_random(
    "ObjectTuple",
    typia.createRandom<ObjectTuple>(),
    typia.createAssert<ObjectTuple>(),
);
