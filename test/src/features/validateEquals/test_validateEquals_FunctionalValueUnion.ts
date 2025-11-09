import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_validateEquals_FunctionalValueUnion = (): void => _test_validateEquals(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)((input) => typia.validateEquals<FunctionalValueUnion>(input));
