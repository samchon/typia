import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createIs_FunctionalArrayUnion = _test_is(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)(typia.createIs<FunctionalArrayUnion>());
