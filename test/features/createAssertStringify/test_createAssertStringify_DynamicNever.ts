import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicNever = _test_assertStringify(
    "DynamicNever",
    DynamicNever.generate,
    TSON.createAssertStringify<DynamicNever>(),
    DynamicNever.SPOILERS,
);
