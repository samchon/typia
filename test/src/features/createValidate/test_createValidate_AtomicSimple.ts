import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createValidate_AtomicSimple = _test_validate(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.createValidate<AtomicSimple>());
