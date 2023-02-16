import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_AtomicAlias = _test_stringify(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createStringify<AtomicAlias>(),
);
