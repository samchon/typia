import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_json_isParse_ArraySimplePointer =
    _test_json_isParse<ArraySimplePointer>(ArraySimplePointer)(
        typia.json.createIsParse<ArraySimplePointer>(),
    );
