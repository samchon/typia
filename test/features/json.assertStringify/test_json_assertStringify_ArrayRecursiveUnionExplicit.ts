import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_assertStringify_ArrayRecursiveUnionExplicit =
    _test_json_assertStringify(
        "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
        typia.json.assertStringify<ArrayRecursiveUnionExplicit>(input),
    );
