import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_validate_AtomicIntersection = (): void => _test_validate(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.validate<AtomicIntersection>(input));
