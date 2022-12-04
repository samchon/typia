import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantEnumeration = _test_validateParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createValidateParse<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
