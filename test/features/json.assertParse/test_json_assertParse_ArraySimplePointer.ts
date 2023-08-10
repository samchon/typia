import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_json_assertParse_ArraySimplePointer =
    _test_json_assertParse<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.json.assertParse<ArraySimplePointer>(input),
    );
