import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_createIsParse_ObjectUndefined = _test_json_isParse(
    "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
    typia.json.createIsParse<ObjectUndefined>(),
);
