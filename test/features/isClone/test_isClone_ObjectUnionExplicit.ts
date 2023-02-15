import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectUnionExplicit = _test_isClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.isClone(input),
    ObjectUnionExplicit.SPOILERS,
);
