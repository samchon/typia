import typia from "../../../src";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ArrayRecursiveUnionImplicit = _test_validate(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.validate(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
