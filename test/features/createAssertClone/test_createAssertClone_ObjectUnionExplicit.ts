import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectUnionExplicit = _test_assertClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
