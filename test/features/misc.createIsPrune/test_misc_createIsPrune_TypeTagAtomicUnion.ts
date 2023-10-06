import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_createIsPrune_TypeTagAtomicUnion = _test_misc_isPrune(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.misc.createIsPrune<TypeTagAtomicUnion>(),
);
