import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalArray = _test_stringify(
    "FunctionalArray",
    FunctionalArray.generate,
    typia.createStringify<FunctionalArray>(),
);
