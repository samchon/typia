import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ClassGetter = _test_assertClone(
    "ClassGetter",
    ClassGetter.generate,
    typia.createAssertClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
