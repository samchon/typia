import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagType } from "../../../structures/CommentTagType";
export const test_misc_createPrune_CommentTagType = _test_misc_prune(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input: CommentTagType): void => {
  const $io1 = (input: any): boolean =>
    "number" === typeof input.int &&
    Math.floor(input.int) === input.int &&
    -2147483648 <= input.int &&
    input.int <= 2147483647 &&
    "number" === typeof input.uint &&
    Math.floor(input.uint) === input.uint &&
    0 <= input.uint &&
    input.uint <= 4294967295 &&
    "number" === typeof input.int32 &&
    Math.floor(input.int32) === input.int32 &&
    -2147483648 <= input.int32 &&
    input.int32 <= 2147483647 &&
    "number" === typeof input.uint32 &&
    Math.floor(input.uint32) === input.uint32 &&
    0 <= input.uint32 &&
    input.uint32 <= 4294967295 &&
    "number" === typeof input.int64 &&
    Math.floor(input.int64) === input.int64 &&
    -9223372036854776000 <= input.int64 &&
    input.int64 <= 9223372036854776000 &&
    "number" === typeof input.uint64 &&
    Math.floor(input.uint64) === input.uint64 &&
    0 <= input.uint64 &&
    input.uint64 <= 18446744073709552000 &&
    "number" === typeof input.float &&
    -1.175494351e38 <= input.float &&
    input.float <= 3.4028235e38;
  const $pp0 = (input: any) =>
    input.forEach((elem: any) => {
      if ("object" === typeof elem && null !== elem) $po1(elem);
    });
  const $po0 = (input: any): any => {
    if (Array.isArray(input.value)) $pp0(input.value);
    for (const key of Object.keys(input)) {
      if ("value" === key) continue;
      delete input[key];
    }
  };
  const $po1 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if (
        "int" === key ||
        "uint" === key ||
        "int32" === key ||
        "uint32" === key ||
        "int64" === key ||
        "uint64" === key ||
        "float" === key
      )
        continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
