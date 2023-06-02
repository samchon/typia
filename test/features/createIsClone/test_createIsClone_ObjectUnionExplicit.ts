import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_ObjectUnionExplicit = _test_isClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createIsClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
