import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_AtomicUnion = _test_stringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.stringify(input),
);