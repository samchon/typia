import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertStringify_DynamicUnion = _test_assertStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createAssertStringify<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
