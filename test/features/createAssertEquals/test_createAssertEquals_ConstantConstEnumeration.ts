import typia from "typia";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ConstantConstEnumeration =
    _test_assertEquals(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createAssertEquals<ConstantConstEnumeration>(),
    );
