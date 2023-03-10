import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_message_DynamicArray = _test_message(
    "DynamicArray",
    typia.message<DynamicArray>(),
);
