import typia from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalPropertyUnion = _test_stringify(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    typia.createStringify<FunctionalPropertyUnion>(),
);