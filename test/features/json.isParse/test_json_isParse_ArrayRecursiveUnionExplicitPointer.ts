import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_isParse_ArrayRecursiveUnionExplicitPointer =
    _test_json_isParse<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )((input) => typia.json.isParse<ArrayRecursiveUnionExplicitPointer>(input));
