import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalObjectUnion = _test_stringify(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    typia.createStringify<FunctionalObjectUnion>(),
);
