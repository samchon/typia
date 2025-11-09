import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createIsStringify_ArrayRecursiveUnionExplicit = (): void => _test_json_isStringify(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)(typia.json.createIsStringify<ArrayRecursiveUnionExplicit>());
