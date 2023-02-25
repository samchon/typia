import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectUnionExplicit = _test_isParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createIsParse<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
