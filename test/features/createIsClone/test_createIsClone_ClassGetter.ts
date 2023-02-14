import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ClassGetter = _test_isClone(
    "ClassGetter",
    ClassGetter.generate,
    typia.createIsClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);