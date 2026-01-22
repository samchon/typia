import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_createValidateStringify_ToJsonAtomicSimple = (): void =>
  _test_json_validateStringify("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
    ToJsonAtomicSimple,
  )(typia.json.createValidateStringify<ToJsonAtomicSimple>());
