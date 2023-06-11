import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_isStringify_ClassGetter = _test_isStringify(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.isStringify(input),
    ClassGetter.SPOILERS,
);
