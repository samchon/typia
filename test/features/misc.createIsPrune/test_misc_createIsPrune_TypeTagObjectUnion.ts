import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createIsPrune_TypeTagObjectUnion = _test_misc_isPrune(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.misc.createIsPrune<TypeTagObjectUnion>(),
);
