import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createIsParse_DynamicNever = _test_json_isParse(
  "DynamicNever",
)<DynamicNever>(DynamicNever)(typia.json.createIsParse<DynamicNever>());
