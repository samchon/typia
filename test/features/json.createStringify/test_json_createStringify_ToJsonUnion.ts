import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_createStringify_ToJsonUnion = _test_json_stringify(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.json.createStringify<ToJsonUnion>());
