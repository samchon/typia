import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_validateEquals_AtomicIntersection = _test_validateEquals(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.validateEquals<AtomicIntersection>(input));
