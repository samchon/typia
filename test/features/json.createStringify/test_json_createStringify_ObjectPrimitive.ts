import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createStringify_ObjectPrimitive = _test_json_stringify(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(
  typia.json.createStringify<ObjectPrimitive>(),
);
