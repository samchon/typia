import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createStringify_ArrayMatrix = _test_stringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createStringify<ArrayMatrix>(),
);
