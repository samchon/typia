import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createValidate_ConstantIntersection = _test_validate(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createValidate<ConstantIntersection>());
