import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createIs_DynamicArray = _test_is(
  "DynamicArray",
)<DynamicArray>(DynamicArray)(typia.createIs<DynamicArray>());
