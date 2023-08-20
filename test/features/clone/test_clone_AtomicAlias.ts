import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_clone_AtomicAlias = _test_clone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.clone<AtomicAlias>(input),
);
