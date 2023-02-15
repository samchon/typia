import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectSimple = _test_assertEquals(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createAssertEquals<ObjectSimple>(),
);
