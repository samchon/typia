import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalArrayUnion = _test_stringify(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    typia.createStringify<FunctionalArrayUnion>(),
);
