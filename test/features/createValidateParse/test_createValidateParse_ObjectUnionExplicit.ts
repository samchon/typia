import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectUnionExplicit = _test_validateParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidateParse<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
