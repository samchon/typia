import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_assertStringify_ToJsonAtomicSimple = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ToJsonAtomicSimple",
  )<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
    typia.json.assertStringify<ToJsonAtomicSimple>(input),
  );
