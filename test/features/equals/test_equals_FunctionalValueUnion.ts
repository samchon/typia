import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_equals_FunctionalValueUnion = _test_equals(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)((input) => typia.equals<FunctionalValueUnion>(input));
