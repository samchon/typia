import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_assertStringify_ClassGetter = _test_assertStringify(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.assertStringify<ClassGetter>(input),
    ClassGetter.SPOILERS,
);
