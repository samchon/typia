import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_validateStringify_ArrayRecursiveUnionExplicitPointer =
    _test_json_validateStringify<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )(typia.json.createValidateStringify<ArrayRecursiveUnionExplicitPointer>());
