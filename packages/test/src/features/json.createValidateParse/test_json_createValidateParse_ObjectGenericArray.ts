import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createValidateParse_ObjectGenericArray =
  _test_json_validateParse("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.json.createValidateParse<ObjectGenericArray>());
