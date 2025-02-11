import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createEquals_AtomicAlias = _test_equals(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.createEquals<AtomicAlias>());
