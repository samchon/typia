import typia from "typia";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ConstantConstEnumeration =
    _test_assertStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createAssertStringify<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
