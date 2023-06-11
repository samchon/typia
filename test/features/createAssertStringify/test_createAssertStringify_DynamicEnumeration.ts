import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertStringify_DynamicEnumeration =
    _test_assertStringify(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        typia.createAssertStringify<DynamicEnumeration>(),
        DynamicEnumeration.SPOILERS,
    );
