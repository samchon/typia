import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_assertClone_ClassGetter = _test_assertClone(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.assertClone<ClassGetter>(input),
    ClassGetter.SPOILERS,
);
