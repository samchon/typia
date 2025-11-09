import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_isStringify_DynamicTree = (): void =>
  _test_json_isStringify("DynamicTree")<DynamicTree>(DynamicTree)((input) =>
    typia.json.isStringify<DynamicTree>(input),
  );
