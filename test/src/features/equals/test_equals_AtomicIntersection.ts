import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_equals_AtomicIntersection = (): void => _test_equals(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.equals<AtomicIntersection>(input));
