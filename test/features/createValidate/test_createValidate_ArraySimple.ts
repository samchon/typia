import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createValidate_ArraySimple = _test_validate(
    "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.createValidate<ArraySimple>());
