import typia from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ToJsonUndefined = _test_validateEquals(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    typia.createValidateEquals<ToJsonUndefined>(),
);
