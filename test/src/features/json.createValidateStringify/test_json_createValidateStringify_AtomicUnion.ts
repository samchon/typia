import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_createValidateStringify_AtomicUnion = (): void => _test_json_validateStringify(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)(typia.json.createValidateStringify<AtomicUnion>());
