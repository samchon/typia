import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_createValidateStringify_ToJsonTuple = (): void =>
  _test_json_validateStringify("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
    typia.json.createValidateStringify<ToJsonTuple>(),
  );
