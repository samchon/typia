import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ClassGetter = _test_isClone(
    "ClassGetter",
    ClassGetter.generate,
    TSON.createIsClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
