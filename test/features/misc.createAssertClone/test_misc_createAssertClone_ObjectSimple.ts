import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_createAssertClone_ObjectSimple = _test_misc_assertClone(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.misc.createAssertClone<ObjectSimple>());
