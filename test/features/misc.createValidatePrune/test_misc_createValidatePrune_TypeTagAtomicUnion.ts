import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_createValidatePrune_TypeTagAtomicUnion =
    _test_misc_validatePrune("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )(typia.misc.createValidatePrune<TypeTagAtomicUnion>());
