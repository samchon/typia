import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createValidate_FunctionalArrayUnion = _test_validate(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)(typia.createValidate<FunctionalArrayUnion>());
