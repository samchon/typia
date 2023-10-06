import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssert_ObjectRecursive = _test_assert(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.createAssert<ObjectRecursive>());
