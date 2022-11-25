import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_constant_enumeration = _test_validate(
    "constant const enumeration",
    ConstantConstEnumeration.generate,
    (input) => TSON.validate(input),
    ConstantConstEnumeration.SPOILERS,
);
