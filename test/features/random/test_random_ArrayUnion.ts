import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_random_ArrayUnion = _test_random(
    "ArrayUnion",
    () => typia.random<ArrayUnion>(),
    typia.createAssert<ArrayUnion>(),
);
