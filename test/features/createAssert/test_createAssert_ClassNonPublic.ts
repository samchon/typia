import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ClassNonPublic = _test_assert(
    "ClassNonPublic",
    ClassNonPublic.generate,
    TSON.createAssert<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
