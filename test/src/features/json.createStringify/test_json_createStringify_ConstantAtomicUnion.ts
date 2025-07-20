import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createStringify_ConstantAtomicUnion = (): void =>
  _test_json_stringify("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.json.createStringify<ConstantAtomicUnion>());
