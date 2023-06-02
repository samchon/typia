import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createIsClone_ClassGetter = _test_isClone(
    "ClassGetter",
    ClassGetter.generate,
    typia.createIsClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
