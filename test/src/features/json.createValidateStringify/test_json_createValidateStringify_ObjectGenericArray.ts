import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createValidateStringify_ObjectGenericArray = (): void =>
  _test_json_validateStringify("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.json.createValidateStringify<ObjectGenericArray>());
