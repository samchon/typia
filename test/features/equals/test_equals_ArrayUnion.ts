import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_equals_ArrayUnion = _test_equals(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.equals<ArrayUnion>(input),
);
