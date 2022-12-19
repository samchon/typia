import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalValueUnion = _test_stringify(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    typia.createStringify<FunctionalValueUnion>(),
);