import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectUnionExplicit = _test_assertEquals(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertEquals<ObjectUnionExplicit>(),
);
