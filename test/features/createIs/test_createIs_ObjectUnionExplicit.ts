import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUnionExplicit = _test_is(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createIs<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
