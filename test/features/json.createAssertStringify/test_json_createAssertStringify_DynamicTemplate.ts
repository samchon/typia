import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createAssertStringify_DynamicTemplate =
  _test_json_assertStringify("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(typia.json.createAssertStringify<DynamicTemplate>());
