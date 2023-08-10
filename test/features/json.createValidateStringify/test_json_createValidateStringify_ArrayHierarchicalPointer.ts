import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_validateStringify_ArrayHierarchicalPointer =
    _test_json_validateStringify<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )(typia.json.createValidateStringify<ArrayHierarchicalPointer>());
