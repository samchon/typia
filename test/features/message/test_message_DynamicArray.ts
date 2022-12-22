import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicArray = _test_message(
    "DynamicArray",
    typia.message<DynamicArray>(),
);