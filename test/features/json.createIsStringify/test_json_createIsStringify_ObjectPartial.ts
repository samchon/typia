import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createIsStringify_ObjectPartial = _test_json_isStringify(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.json.createIsStringify<ObjectPartial>());
