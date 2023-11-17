import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_assertStringify_ObjectAlias = _test_json_assertStringify(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) =>
  typia.json.assertStringify<ObjectAlias>(input),
);
