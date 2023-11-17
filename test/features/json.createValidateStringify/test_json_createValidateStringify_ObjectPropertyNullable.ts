import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createValidateStringify_ObjectPropertyNullable =
  _test_json_validateStringify(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.json.createValidateStringify<ObjectPropertyNullable>(),
  );
