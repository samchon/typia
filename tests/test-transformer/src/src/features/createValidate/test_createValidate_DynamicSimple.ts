import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createValidate_DynamicSimple = (): void => _test_validate(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.createValidate<DynamicSimple>());
