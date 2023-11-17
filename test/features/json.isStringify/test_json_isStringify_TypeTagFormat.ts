import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_isStringify_TypeTagFormat = _test_json_isStringify(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.json.isStringify<TypeTagFormat>(input),
);
