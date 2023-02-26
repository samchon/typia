import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createAssertStringify_DynamicSimple = _test_assertStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createAssertStringify<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
