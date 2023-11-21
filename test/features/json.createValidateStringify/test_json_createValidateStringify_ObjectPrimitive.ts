import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createValidateStringify_ObjectPrimitive =
  _test_json_validateStringify("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(typia.json.createValidateStringify<ObjectPrimitive>());
