import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_assertParse_ObjectUndefined =
    _test_json_assertParse<ObjectUndefined>(ObjectUndefined)((input) =>
        typia.json.assertParse<ObjectUndefined>(input),
    );
