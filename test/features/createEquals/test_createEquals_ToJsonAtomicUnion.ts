import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createEquals_ToJsonAtomicUnion = _test_equals(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)(typia.createEquals<ToJsonAtomicUnion>());
