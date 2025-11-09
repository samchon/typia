import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ConstantAtomicSimple = (): void => _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)((input) => typia.json.assertParse<ConstantAtomicSimple>(input, (p) => new CustomGuardError(p)));
