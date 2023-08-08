import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_assertStringify_ClassMethod = _test_json_assertStringify(
    "ClassMethod",
    ClassMethod.generate,
    typia.json.createAssertStringify<ClassMethod>(),
    ClassMethod.SPOILERS,
);
