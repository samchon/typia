import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertClone_ClassGetter = _test_assertClone(
    "ClassGetter",
    ClassGetter.generate,
    typia.createAssertClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
