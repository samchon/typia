import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createIsStringify_ObjectPropertyNullable =
  _test_json_isStringify("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )(typia.json.createIsStringify<ObjectPropertyNullable>());
