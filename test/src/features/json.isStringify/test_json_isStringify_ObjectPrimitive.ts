import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_isStringify_ObjectPrimitive = (): void =>
  _test_json_isStringify("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    (input) => typia.json.isStringify<ObjectPrimitive>(input),
  );
