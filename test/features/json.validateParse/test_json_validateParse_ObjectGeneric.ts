import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_validateParse_ObjectGeneric = _test_json_validateParse(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.json.validateParse<ObjectGeneric>(input),
);
