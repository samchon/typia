import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_createValidateClone_ArrayAny = _test_misc_validateClone(
    "ArrayAny",
)<ArrayAny>(ArrayAny)(typia.misc.createValidateClone<ArrayAny>());
