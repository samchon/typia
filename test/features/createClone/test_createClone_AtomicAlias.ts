import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createClone_AtomicAlias = _test_clone(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createClone<AtomicAlias>(),
);
