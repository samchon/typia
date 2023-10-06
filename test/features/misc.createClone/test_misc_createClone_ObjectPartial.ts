import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_createClone_ObjectPartial = _test_misc_clone(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.misc.createClone<ObjectPartial>());
