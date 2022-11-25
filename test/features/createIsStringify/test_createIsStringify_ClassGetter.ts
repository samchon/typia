import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ClassGetter = _test_isStringify(
    "ClassGetter",
    ClassGetter.generate,
    TSON.createIsStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
