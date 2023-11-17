import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_assertParse_TypeTagPattern = _test_json_assertParse(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.json.assertParse<TypeTagPattern>(input),
);
