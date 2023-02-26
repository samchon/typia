import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertClone_ArrayRecursiveUnionImplicit =
    _test_assertClone(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        typia.createAssertClone<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
