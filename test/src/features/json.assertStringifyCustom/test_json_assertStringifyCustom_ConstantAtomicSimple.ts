import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ConstantAtomicSimple =
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.json.assertStringify<ConstantAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
