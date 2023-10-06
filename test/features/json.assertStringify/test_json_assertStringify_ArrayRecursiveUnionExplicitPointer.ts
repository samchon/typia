import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_assertStringify_ArrayRecursiveUnionExplicitPointer =
    _test_json_assertStringify(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        (input) =>
            typia.json.assertStringify<ArrayRecursiveUnionExplicitPointer>(
                input,
            ),
    );
