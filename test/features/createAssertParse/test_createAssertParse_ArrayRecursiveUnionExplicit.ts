import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayRecursiveUnionExplicit =
    _test_assertParse(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        typia.createAssertParse<ArrayRecursiveUnionExplicit>(),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
