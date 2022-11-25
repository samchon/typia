import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_dynamic_never = _test_equals(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.equals(input),
);
