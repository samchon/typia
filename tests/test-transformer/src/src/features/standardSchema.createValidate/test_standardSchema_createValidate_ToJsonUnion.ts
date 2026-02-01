import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_standardSchema_createValidate_ToJsonUnion = (): void => _test_standardSchema_validate(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createValidate<ToJsonUnion>());
