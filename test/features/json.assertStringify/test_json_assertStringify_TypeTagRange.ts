import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_assertStringify_TypeTagRange =
  _test_json_assertStringify("TypeTagRange")<TypeTagRange>(TypeTagRange)(
    (input) => typia.json.assertStringify<TypeTagRange>(input),
  );
