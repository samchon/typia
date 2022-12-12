import typia from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalTuple = _test_stringify(
    "FunctionalTuple",
    FunctionalTuple.generate,
    typia.createStringify<FunctionalTuple>(),
);
