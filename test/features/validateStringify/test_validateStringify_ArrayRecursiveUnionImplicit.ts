import typia from "../../../src";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_ArrayRecursiveUnionImplicit = _test_validateStringify(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.validateStringify(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
