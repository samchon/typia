import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createValidateStringify_DynamicNever =
  _test_json_validateStringify("DynamicNever")<DynamicNever>(DynamicNever)(
    typia.json.createValidateStringify<DynamicNever>(),
  );
