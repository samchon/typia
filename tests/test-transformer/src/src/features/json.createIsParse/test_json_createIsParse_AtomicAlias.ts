import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createIsParse_AtomicAlias = (): void => _test_json_isParse(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.json.createIsParse<AtomicAlias>());
