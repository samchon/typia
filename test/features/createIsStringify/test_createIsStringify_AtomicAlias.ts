import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_AtomicAlias = _test_isStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createIsStringify<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
