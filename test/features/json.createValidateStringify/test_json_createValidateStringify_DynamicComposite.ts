import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createValidateStringify_DynamicComposite =
  _test_json_validateStringify("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.json.createValidateStringify<DynamicComposite>());
