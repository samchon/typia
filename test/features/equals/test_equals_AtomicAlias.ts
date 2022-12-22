import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_AtomicAlias = _test_equals(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.equals(input),
);
