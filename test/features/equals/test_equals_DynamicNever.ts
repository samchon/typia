import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicNever = _test_equals(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.equals(input),
);
