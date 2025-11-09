import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_validateStringify_ObjectGenericUnion = (): void =>
  _test_json_validateStringify("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )((input) => typia.json.validateStringify<ObjectGenericUnion>(input));
