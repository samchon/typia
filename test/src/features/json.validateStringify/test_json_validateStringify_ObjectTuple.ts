import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_validateStringify_ObjectTuple = (): void =>
  _test_json_validateStringify("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    (input) => typia.json.validateStringify<ObjectTuple>(input),
  );
