import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_validateClone_ConstantEnumeration = _test_validateClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.validateClone(input),
    ConstantEnumeration.SPOILERS,
);
