import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";

export const test_createValidateEquals_ToJsonUndefined = _test_validateEquals(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    typia.createValidateEquals<ToJsonUndefined>(),
);
