import typia from "typia";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ConstantConstEnumeration =
    _test_validateStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createValidateStringify<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
