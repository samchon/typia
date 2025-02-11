import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_DynamicComposite = _test_assertEquals(CustomGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)((input) => typia.assertEquals<DynamicComposite>(input, (p) => new CustomGuardError(p)));
