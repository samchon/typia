import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createAssertStringify_DynamicComposite = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)(
    typia.json.createAssertStringify<DynamicComposite>(),
  );
