import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_validateStringify_ObjectPrimitive = (): void =>
  _test_json_validateStringify("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) => typia.json.validateStringify<ObjectPrimitive>(input));
