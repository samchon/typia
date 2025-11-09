import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createEquals_ConstantIntersection = (): void => _test_equals(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createEquals<ConstantIntersection>());
