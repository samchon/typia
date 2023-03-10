import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertParse_ConstantConstEnumeration =
    _test_assertParse(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createAssertParse<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
