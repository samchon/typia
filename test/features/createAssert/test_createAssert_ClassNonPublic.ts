import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_assert_ClassNonPublic = _test_assert(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)(typia.createAssert<ClassNonPublic>());
