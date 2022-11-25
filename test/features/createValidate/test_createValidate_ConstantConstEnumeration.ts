import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ConstantConstEnumeration = _test_validate(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    TSON.createValidate<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);