import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createIsClone_ObjectRecursive = _test_misc_isClone(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.misc.createIsClone<ObjectRecursive>());
