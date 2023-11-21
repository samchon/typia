import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_assertStringify_DynamicSimple =
  _test_json_assertStringify("DynamicSimple")<DynamicSimple>(DynamicSimple)(
    (input) => typia.json.assertStringify<DynamicSimple>(input),
  );
