import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_validateParse_ConstantConstEnumeration = _test_validateParse(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.validateParse<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);
