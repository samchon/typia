import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_standardSchema_createValidate_ToJsonTuple = (): void => _test_standardSchema_validate(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)(typia.createValidate<ToJsonTuple>());
