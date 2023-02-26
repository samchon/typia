import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createAssert_ClassNonPublic = _test_assert(
    "ClassNonPublic",
    ClassNonPublic.generate,
    typia.createAssert<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
