import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_isStringify_ObjectRequired = _test_json_isStringify(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.json.isStringify<ObjectRequired>(input),
);
