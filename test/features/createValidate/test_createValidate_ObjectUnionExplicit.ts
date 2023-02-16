import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectUnionExplicit = _test_validate(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidate<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
