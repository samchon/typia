import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createAssertStringify_ObjectPrimitive =
  _test_json_assertStringify("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(typia.json.createAssertStringify<ObjectPrimitive>());
