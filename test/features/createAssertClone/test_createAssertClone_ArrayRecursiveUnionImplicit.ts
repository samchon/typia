import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArrayRecursiveUnionImplicit =
    _test_assertClone(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        typia.createAssertClone<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
