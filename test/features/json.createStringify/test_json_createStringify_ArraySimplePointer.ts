import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_json_stringify_ArraySimplePointer =
    _test_json_stringify<ArraySimplePointer>(ArraySimplePointer)(
        typia.json.createStringify<ArraySimplePointer>(),
    );
