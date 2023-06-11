import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_AtomicAlias = _test_validateClone(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createValidateClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
