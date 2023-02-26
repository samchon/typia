import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createIsStringify_AtomicAlias = _test_isStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createIsStringify<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
