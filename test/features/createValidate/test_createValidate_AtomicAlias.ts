import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_AtomicAlias = _test_validate(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createValidate<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
