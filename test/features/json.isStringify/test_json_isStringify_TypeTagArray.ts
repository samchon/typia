import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_isStringify_TypeTagArray = _test_json_isStringify(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
  typia.json.isStringify<TypeTagArray>(input),
);
