import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_validatePrune_AtomicIntersection =
    _test_misc_validatePrune("AtomicIntersection")<AtomicIntersection>(
        AtomicIntersection,
    )((input) => typia.misc.validatePrune<AtomicIntersection>(input));
