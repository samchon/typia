import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertParse_ArrayRecursiveUnionExplicit =
    _test_assertParse(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        typia.createAssertParse<ArrayRecursiveUnionExplicit>(),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
