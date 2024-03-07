import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagType } from "../../../structures/CommentTagType";
export const test_misc_createClone_CommentTagType = _test_misc_clone(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(
  (input: CommentTagType): import("typia").Resolved<CommentTagType> => {
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
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co1(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      value: Array.isArray(input.value)
        ? $cp0(input.value)
        : (input.value as any),
    });
    const $co1 = (input: any): any => ({
      int: input.int as any,
      uint: input.uint as any,
      int32: input.int32 as any,
      uint32: input.uint32 as any,
      int64: input.int64 as any,
      uint64: input.uint64 as any,
      float: input.float as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
