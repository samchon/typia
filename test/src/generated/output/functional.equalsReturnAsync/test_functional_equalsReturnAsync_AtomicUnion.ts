import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_functional_equalsReturnAsync_AtomicUnion =
  _test_functional_equalsReturnAsync("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      async (input: AtomicUnion): Promise<AtomicUnion | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is AtomicUnion => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
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
