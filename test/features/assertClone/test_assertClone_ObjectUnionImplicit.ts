import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectUnionImplicit = _test_assertClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.assertClone(input),
    ObjectUnionImplicit.SPOILERS,
);
