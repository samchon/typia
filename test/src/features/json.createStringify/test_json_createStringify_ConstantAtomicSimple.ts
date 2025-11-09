import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_createStringify_ConstantAtomicSimple = (): void =>
  _test_json_stringify("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )(typia.json.createStringify<ConstantAtomicSimple>());
