import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_assertStringify_ArrayRecursiveUnionImplicit =
    _test_json_assertStringify<ArrayRecursiveUnionImplicit>(
        ArrayRecursiveUnionImplicit,
    )(typia.json.createAssertStringify<ArrayRecursiveUnionImplicit>());
