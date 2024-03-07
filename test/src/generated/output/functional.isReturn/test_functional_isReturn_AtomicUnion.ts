import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_functional_isReturn_AtomicUnion = _test_functional_isReturn(
  "AtomicUnion",
)(AtomicUnion)(
  (p: (input: AtomicUnion) => AtomicUnion) =>
    (input: AtomicUnion): AtomicUnion | null => {
      const result = p(input);
      return ((input: any): input is AtomicUnion => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              null === elem ||
              "string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              "boolean" === typeof elem,
          )
        );
      })(result)
        ? result
        : null;
    },
);
