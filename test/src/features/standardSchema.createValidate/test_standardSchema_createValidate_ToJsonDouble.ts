import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_standardSchema_createValidate_ToJsonDouble = _test_standardSchema_validate(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)(typia.createValidate<ToJsonDouble>());
