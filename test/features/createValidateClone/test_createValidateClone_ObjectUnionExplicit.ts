import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectUnionExplicit = _test_validateClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidateClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
