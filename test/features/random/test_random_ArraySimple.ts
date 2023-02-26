import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_random } from "../internal/_test_random";

export const test_random_ArraySimple = _test_random(
    "ArraySimple",
    () => typia.random<ArraySimple>(),
    typia.createAssert<ArraySimple>(),
);
