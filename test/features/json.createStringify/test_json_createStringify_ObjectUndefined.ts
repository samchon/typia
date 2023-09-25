import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_createStringify_ObjectUndefined = _test_json_stringify(
    "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
    typia.json.createStringify<ObjectUndefined>(),
);
