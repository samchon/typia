import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_assertPrune_TypeTagPattern = _test_misc_assertPrune(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(
    typia.misc.createAssertPrune<TypeTagPattern>(),
);
