import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_validateEquals_ToJsonNull = _test_validateEquals(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)(typia.createValidateEquals<ToJsonNull>());
