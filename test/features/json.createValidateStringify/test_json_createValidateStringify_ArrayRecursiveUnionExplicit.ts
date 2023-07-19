import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_validateStringify_ArrayRecursiveUnionExplicit =
    _test_json_validateStringify<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit,
    )(typia.json.createValidateStringify<ArrayRecursiveUnionExplicit>());
