import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_createIsStringify_ObjectUndefined =
    _test_json_isStringify("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
        typia.json.createIsStringify<ObjectUndefined>(),
    );
