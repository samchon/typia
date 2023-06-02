import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createStringify_AtomicSimple = _test_stringify(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createStringify<AtomicSimple>(),
);
