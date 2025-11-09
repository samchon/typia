import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_json_assertParse_AtomicIntersection = (): void => _test_json_assertParse(TypeGuardError)(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.json.assertParse<AtomicIntersection>(input));
