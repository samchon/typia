import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ConstantEnumeration = _test_validate(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createValidate<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);