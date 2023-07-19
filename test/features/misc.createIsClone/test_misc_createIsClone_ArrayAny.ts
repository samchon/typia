import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_isClone_ArrayAny = _test_misc_isClone<ArrayAny>(
    ArrayAny,
)(typia.misc.createIsClone<ArrayAny>());
