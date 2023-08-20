import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_validatePrune_ConstantConstEnumeration = _test_validatePrune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.validatePrune<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);
