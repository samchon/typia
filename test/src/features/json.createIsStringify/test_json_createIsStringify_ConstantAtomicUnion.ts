import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createIsStringify_ConstantAtomicUnion = (): void =>
  _test_json_isStringify("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.json.createIsStringify<ConstantAtomicUnion>());
