import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_assertStringify_ArrayRecursiveUnionExplicit =
    _test_assertStringify(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => typia.assertStringify(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
