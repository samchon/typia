import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertStringify_ConstantEnumeration =
    _test_assertStringify(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.createAssertStringify<ConstantEnumeration>(),
        ConstantEnumeration.SPOILERS,
    );
