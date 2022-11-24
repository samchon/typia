import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_dynamic_constant =
    _test_validate_equals(
        "dynamic constant",
        DynamicConstant.generate,
        TSON.createValidateEquals<DynamicConstant>(),
    );
