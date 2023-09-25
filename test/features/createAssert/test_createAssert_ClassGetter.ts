import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssert_ClassGetter = _test_assert(
    "ClassGetter",
)<ClassGetter>(ClassGetter)(typia.createAssert<ClassGetter>());
