import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_assertPrune_TypeTagFormat = _test_misc_assertPrune(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.misc.createAssertPrune<TypeTagFormat>());
