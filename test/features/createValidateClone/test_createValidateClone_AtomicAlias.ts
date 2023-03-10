import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createValidateClone_AtomicAlias = _test_validateClone(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createValidateClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
