import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_isStringify_AtomicAlias = (): void => _test_json_isStringify(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.json.isStringify<AtomicAlias>(input));
