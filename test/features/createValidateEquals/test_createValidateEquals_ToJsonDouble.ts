import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createValidateEquals_ToJsonDouble = _test_validateEquals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createValidateEquals<ToJsonDouble>(),
);
