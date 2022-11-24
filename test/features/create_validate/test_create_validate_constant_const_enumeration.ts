import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_constant_enumeration = _test_validate(
    "constant const enumeration",
    ConstantConstEnumeration.generate,
    TSON.createValidate<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
