import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_validateStringify_DynamicTree = (): void =>
  _test_json_validateStringify("DynamicTree")<DynamicTree>(DynamicTree)(
    (input) => typia.json.validateStringify<DynamicTree>(input),
  );
