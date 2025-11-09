import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_createIsStringify_ToJsonAtomicUnion = (): void =>
  _test_json_isStringify("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )(typia.json.createIsStringify<ToJsonAtomicUnion>());
