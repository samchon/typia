import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectUnionImplicit = _test_validateClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.validateClone(input),
    ObjectUnionImplicit.SPOILERS,
);
