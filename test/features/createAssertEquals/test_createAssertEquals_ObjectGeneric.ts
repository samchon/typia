import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectGeneric = _test_assertEquals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createAssertEquals<ObjectGeneric>(),
);
