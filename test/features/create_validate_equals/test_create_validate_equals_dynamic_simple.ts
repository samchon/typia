import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_dynamic_simple = _test_validate_equals(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createValidateEquals<DynamicSimple>(),
    false,
);
