import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_createPrune_TypeTagInfinite = _test_misc_prune(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(typia.misc.createPrune<TypeTagInfinite>());
