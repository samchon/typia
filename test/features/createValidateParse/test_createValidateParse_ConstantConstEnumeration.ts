import typia from "typia";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantConstEnumeration =
    _test_validateParse(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createValidateParse<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
