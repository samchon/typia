import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_createAssertPrune_ClassGetter = _test_misc_assertPrune(
    "ClassGetter",
)<ClassGetter>(ClassGetter)(typia.misc.createAssertPrune<ClassGetter>());
