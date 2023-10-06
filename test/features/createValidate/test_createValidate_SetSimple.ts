import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { SetSimple } from "../../structures/SetSimple";

export const test_createValidate_SetSimple = _test_validate(
    "SetSimple",
)<SetSimple>(SetSimple)(typia.createValidate<SetSimple>());
