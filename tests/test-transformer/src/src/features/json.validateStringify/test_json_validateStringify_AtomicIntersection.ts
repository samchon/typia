import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_validateStringify_AtomicIntersection = (): void => _test_json_validateStringify(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.json.validateStringify<AtomicIntersection>(input));
