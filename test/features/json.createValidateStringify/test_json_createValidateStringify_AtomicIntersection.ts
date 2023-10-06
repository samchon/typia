import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createValidateStringify_AtomicIntersection = _test_json_validateStringify(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.json.createValidateStringify<AtomicIntersection>());
