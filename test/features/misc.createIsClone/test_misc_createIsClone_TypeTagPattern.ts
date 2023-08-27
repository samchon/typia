import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_isClone_TypeTagPattern = _test_misc_isClone(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(typia.misc.createIsClone<TypeTagPattern>());
