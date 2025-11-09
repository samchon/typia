import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_createValidateStringify_ToJsonAtomicUnion = (): void =>
  _test_json_validateStringify("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )(typia.json.createValidateStringify<ToJsonAtomicUnion>());
