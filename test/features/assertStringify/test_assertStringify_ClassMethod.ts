import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assertStringify_ClassMethod = _test_assertStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.assertStringify(input),
    ClassMethod.SPOILERS,
);
