import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_json_isStringify_ArraySimplePointer =
    _test_json_isStringify<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.json.isStringify(input),
    );
