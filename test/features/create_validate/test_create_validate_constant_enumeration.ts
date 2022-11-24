import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_constant_enumeration = _test_validate(
    "constant enumeration",
    ConstantEnumeration.generate,
    TSON.createValidate<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
