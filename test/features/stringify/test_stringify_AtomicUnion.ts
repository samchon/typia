import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_stringify_AtomicUnion = _test_stringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.stringify(input),
);
