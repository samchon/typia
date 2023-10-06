import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createPrune_TypeTagFormat = _test_misc_prune(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.misc.createPrune<TypeTagFormat>());
