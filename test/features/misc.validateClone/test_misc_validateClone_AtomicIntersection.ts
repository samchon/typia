import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_validateClone_AtomicIntersection =
    _test_misc_validateClone<AtomicIntersection>(AtomicIntersection)((input) =>
        typia.misc.validateClone<AtomicIntersection>(input),
    );
