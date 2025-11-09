import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_stringify_ConstantAtomicUnion = (): void => _test_json_stringify(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)((input) => typia.json.stringify<ConstantAtomicUnion>(input));
