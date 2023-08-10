import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_json_assertStringify_ArraySimplePointer =
    _test_json_assertStringify<ArraySimplePointer>(ArraySimplePointer)(
        (input) => typia.json.assertStringify<ArraySimplePointer>(input),
    );
