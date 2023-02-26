import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createStringify_AtomicAlias = _test_stringify(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createStringify<AtomicAlias>(),
);
