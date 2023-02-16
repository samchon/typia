import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectUnionImplicit = _test_validateStringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.validateStringify(input),
    ObjectUnionImplicit.SPOILERS,
);
