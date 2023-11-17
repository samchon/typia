import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_misc_createPrune_CommentTagAtomicUnion = _test_misc_prune(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  (input: CommentTagAtomicUnion): void => {
    const $io1 = (input: any): boolean =>
      ("string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7) ||
      ("number" === typeof input.value && 3 <= input.value);
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
        if ("value" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  },
);
