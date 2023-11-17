import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_isStringify_ObjectOptional = _test_json_isStringify(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  typia.json.isStringify<ObjectOptional>(input),
);
