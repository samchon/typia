import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_clone_ObjectSimple = (): void => _test_misc_clone(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.misc.clone<ObjectSimple>(input));
