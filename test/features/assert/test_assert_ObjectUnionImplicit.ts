import typia from "../../../src";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ObjectUnionImplicit = _test_assert(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.assert(input),
    ObjectUnionImplicit.SPOILERS,
);
