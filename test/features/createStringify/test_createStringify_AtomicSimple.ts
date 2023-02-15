import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_AtomicSimple = _test_stringify(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createStringify<AtomicSimple>(),
);
