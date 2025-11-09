import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createIs_FunctionalTuple = (): void => _test_is(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)(typia.createIs<FunctionalTuple>());
