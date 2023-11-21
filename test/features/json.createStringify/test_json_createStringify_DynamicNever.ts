import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createStringify_DynamicNever = _test_json_stringify(
  "DynamicNever",
)<DynamicNever>(DynamicNever)(typia.json.createStringify<DynamicNever>());
