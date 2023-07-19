import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_isStringify_ArrayRecursiveUnionExplicit =
    _test_json_isStringify<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit,
    )((input) => typia.json.isStringify(input));
