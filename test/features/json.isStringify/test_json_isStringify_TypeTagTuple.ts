import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_isStringify_TypeTagTuple = _test_json_isStringify(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.json.isStringify<TypeTagTuple>(input),
);
