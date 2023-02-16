import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectUnionExplicit = _test_assertEquals(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assertEquals(input),
);
