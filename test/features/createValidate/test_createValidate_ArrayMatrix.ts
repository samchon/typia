import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_validate_ArrayMatrix = _test_validate(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.createValidate<ArrayMatrix>());
