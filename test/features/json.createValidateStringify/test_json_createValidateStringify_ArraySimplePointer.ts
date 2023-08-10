import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_json_validateStringify_ArraySimplePointer =
    _test_json_validateStringify<ArraySimplePointer>(ArraySimplePointer)(
        typia.json.createValidateStringify<ArraySimplePointer>(),
    );
