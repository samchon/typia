import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_validateClone_ConstantConstEnumeration = _test_validateClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.validateClone<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);
