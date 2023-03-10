import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertStringify_ConstantConstEnumeration =
    _test_assertStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createAssertStringify<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
