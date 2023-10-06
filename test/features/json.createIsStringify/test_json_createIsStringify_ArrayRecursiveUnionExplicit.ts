import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createIsStringify_ArrayRecursiveUnionExplicit =
    _test_json_isStringify(
        "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        typia.json.createIsStringify<ArrayRecursiveUnionExplicit>(),
    );
