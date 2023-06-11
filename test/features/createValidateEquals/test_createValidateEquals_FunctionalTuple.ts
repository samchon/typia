import typia from "../../../src";

import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalTuple = _test_validateEquals(
    "FunctionalTuple",
    FunctionalTuple.generate,
    typia.createValidateEquals<FunctionalTuple>(),
);
