import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_createValidateStringify_ObjectGenericUnion =
  _test_json_validateStringify("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.json.createValidateStringify<ObjectGenericUnion>());
