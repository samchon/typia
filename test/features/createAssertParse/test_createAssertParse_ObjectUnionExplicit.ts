import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_ObjectUnionExplicit = _test_assertParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertParse<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
