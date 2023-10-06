import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { SetUnion } from "../../structures/SetUnion";

export const test_createValidate_SetUnion = _test_validate(
    "SetUnion",
)<SetUnion>(SetUnion)(typia.createValidate<SetUnion>());
