import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createValidateParse_ConstantConstEnumeration =
    _test_validateParse(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createValidateParse<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
