import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createIsStringify_DynamicNever = (): void =>
  _test_json_isStringify("DynamicNever")<DynamicNever>(DynamicNever)(
    typia.json.createIsStringify<DynamicNever>(),
  );
