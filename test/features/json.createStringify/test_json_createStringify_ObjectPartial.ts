import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createStringify_ObjectPartial = _test_json_stringify(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.json.createStringify<ObjectPartial>());
