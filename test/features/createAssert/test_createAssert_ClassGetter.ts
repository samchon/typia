import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ClassGetter = _test_assert(
    "ClassGetter",
    ClassGetter.generate,
    TSON.createAssert<ClassGetter>(),
    ClassGetter.SPOILERS,
);
