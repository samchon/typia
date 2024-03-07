import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { TupleRestArray } from "../../../structures/TupleRestArray";
export const test_functional_isParametersAsync_TupleRestArray =
  _test_functional_isParametersAsync("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      async (input: TupleRestArray): Promise<TupleRestArray | null> => {
        if (
          false ===
          ((input: any): input is TupleRestArray => {
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.every((elem: any) => "string" === typeof elem),
                )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
