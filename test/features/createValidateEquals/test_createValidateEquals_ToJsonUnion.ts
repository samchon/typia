import typia from "../../../src";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ToJsonUnion = _test_validateEquals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createValidateEquals<ToJsonUnion>(),
);
