import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArrayRecursiveUnionExplicit =
    _test_validateParse(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => typia.validateParse<ArrayRecursiveUnionExplicit>(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
