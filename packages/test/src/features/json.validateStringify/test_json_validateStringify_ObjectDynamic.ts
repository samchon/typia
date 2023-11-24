import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_validateStringify_ObjectDynamic =
  _test_json_validateStringify("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
    (input) => typia.json.validateStringify<ObjectDynamic>(input),
  );
