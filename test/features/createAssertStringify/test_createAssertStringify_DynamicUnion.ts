import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicUnion = _test_assertStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createAssertStringify<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
