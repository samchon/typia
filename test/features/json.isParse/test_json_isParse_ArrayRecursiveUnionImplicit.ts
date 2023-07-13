import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_isParse_ArrayRecursiveUnionImplicit = _test_json_isParse(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.json.isParse<ArrayRecursiveUnionImplicit>(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
