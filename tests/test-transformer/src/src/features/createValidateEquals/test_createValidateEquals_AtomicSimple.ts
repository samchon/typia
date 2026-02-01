import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createValidateEquals_AtomicSimple = (): void => _test_validateEquals(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.createValidateEquals<AtomicSimple>());
