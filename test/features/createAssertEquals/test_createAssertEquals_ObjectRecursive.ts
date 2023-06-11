import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectRecursive = _test_assertEquals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createAssertEquals<ObjectRecursive>(),
);
