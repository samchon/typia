import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_ArrayUnion = _test_random(
    "ArrayUnion",
    () => typia.random<ArrayUnion>(),
    typia.createAssert<ArrayUnion>(),
);
