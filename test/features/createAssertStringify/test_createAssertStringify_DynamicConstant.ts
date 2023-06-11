import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertStringify_DynamicConstant = _test_assertStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createAssertStringify<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
