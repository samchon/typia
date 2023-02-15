import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectUnionImplicit = _test_is(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.is(input),
    ObjectUnionImplicit.SPOILERS,
);
