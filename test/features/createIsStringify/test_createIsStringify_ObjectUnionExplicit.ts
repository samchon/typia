import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectUnionExplicit = _test_isStringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createIsStringify<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
