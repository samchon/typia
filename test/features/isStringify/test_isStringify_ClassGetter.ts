import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ClassGetter = _test_isStringify(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.isStringify(input),
    ClassGetter.SPOILERS,
);
