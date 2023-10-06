import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_createIsClone_ClassGetter = _test_misc_isClone(
    "ClassGetter",
)<ClassGetter>(ClassGetter)(typia.misc.createIsClone<ClassGetter>());
