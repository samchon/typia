import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ClassGetter = _test_assertStringify(
    "ClassGetter",
    ClassGetter.generate,
    typia.createAssertStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
