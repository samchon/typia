import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_validateEquals_ArrayRecursiveUnionExplicit = _test_validateEquals(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.validateEquals(input),
);
