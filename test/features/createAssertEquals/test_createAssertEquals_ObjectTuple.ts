import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectTuple = _test_assertEquals(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createAssertEquals<ObjectTuple>(),
);
