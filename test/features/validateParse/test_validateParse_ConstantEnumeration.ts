import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_validateParse_ConstantEnumeration = _test_validateParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.validateParse<ConstantEnumeration>(input),
    ConstantEnumeration.SPOILERS,
);
