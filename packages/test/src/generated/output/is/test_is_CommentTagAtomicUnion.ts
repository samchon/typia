import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_is_CommentTagAtomicUnion = _test_is(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
  ((input: any): input is CommentTagAtomicUnion => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
      );
    const $io1 = (input: any): boolean =>
      ("string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7) ||
      ("number" === typeof input.value &&
        Number.isFinite(input.value) &&
        3 <= input.value);
    return "object" === typeof input && null !== input && $io0(input);
  })(input),
);
