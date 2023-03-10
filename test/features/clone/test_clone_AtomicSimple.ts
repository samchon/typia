import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_clone_AtomicSimple = _test_clone(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.clone(input),
);
