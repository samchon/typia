import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createValidateEquals_ArrayMatrix = _test_validateEquals(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.createValidateEquals<ArrayMatrix>());
