import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ArrayRecursiveUnionExplicit = _test_stringify(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createStringify<ArrayRecursiveUnionExplicit>(),
);
