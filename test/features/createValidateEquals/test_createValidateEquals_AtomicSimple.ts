import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_AtomicSimple = _test_validateEquals(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidateEquals<AtomicSimple>(),
);
