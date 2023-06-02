import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ConstantConstEnumeration = _test_validateClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createValidateClone<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
