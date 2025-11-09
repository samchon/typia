import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_isStringify_AtomicIntersection = (): void => _test_json_isStringify(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.json.isStringify<AtomicIntersection>(input));
