import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectUnionImplicit = _test_assertParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.assertParse<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
