import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_functional_isParameters_AtomicUnion =
  _test_functional_isParameters("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      (input: AtomicUnion): AtomicUnion | null => {
        if (
          false ===
          ((input: any): input is AtomicUnion => {
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
          })(input)
        )
          return null;
        return p(input);
      },
  );
