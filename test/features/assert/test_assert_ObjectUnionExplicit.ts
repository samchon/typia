import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ObjectUnionExplicit = _test_assert(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assert(input),
    ObjectUnionExplicit.SPOILERS,
);
