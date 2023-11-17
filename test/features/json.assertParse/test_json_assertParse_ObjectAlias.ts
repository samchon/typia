import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_assertParse_ObjectAlias = _test_json_assertParse(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) =>
  typia.json.assertParse<ObjectAlias>(input),
);
