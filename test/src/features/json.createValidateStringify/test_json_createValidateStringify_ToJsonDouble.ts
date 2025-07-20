import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_createValidateStringify_ToJsonDouble = (): void =>
  _test_json_validateStringify("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
    typia.json.createValidateStringify<ToJsonDouble>(),
  );
