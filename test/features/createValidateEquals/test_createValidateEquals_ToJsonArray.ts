import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createValidateEquals_ToJsonArray = _test_validateEquals(
    "ToJsonArray",
)<ToJsonArray>(ToJsonArray)(typia.createValidateEquals<ToJsonArray>());
