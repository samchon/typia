import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_standardSchema_createValidate_ConstantIntersection = (): void => _test_standardSchema_validate(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.createValidate<ConstantIntersection>());
