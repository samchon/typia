import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicNever = _test_equals(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.equals(input),
);