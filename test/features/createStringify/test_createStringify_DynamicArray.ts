import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_DynamicArray = _test_stringify(
    "DynamicArray",
    DynamicArray.generate,
    typia.createStringify<DynamicArray>(),
);
