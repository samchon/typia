import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_dynamic_simple = _test_validate_equals(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.validateEquals(input),
    false,
);
