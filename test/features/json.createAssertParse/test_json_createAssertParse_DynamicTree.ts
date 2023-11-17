import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_createAssertParse_DynamicTree = _test_json_assertParse(
  "DynamicTree",
)<DynamicTree>(DynamicTree)(typia.json.createAssertParse<DynamicTree>());
