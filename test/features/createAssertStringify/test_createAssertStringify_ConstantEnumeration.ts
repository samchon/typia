import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ConstantEnumeration = _test_assertStringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createAssertStringify<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);