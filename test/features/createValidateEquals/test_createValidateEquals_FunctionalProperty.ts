import typia from "typia";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalProperty = _test_validateEquals(
    "FunctionalProperty",
    FunctionalProperty.generate,
    typia.createValidateEquals<FunctionalProperty>(),
);
