import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";

export const test_validateEquals_ToJsonUndefined = _test_validateEquals(
    "ToJsonUndefined",
)<ToJsonUndefined>(ToJsonUndefined)(
    typia.createValidateEquals<ToJsonUndefined>(),
);
