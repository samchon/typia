import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_validatePrune_AtomicUnion =
    _test_misc_validatePrune<AtomicUnion>(AtomicUnion)(
        typia.misc.createValidatePrune<AtomicUnion>(),
    );
