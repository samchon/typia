import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_functional_isReturnAsync_TupleRestArray =
  _test_functional_isReturnAsync("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      async (input: TupleRestArray): Promise<TupleRestArray | null> => {
        const result = await p(input);
        return ((input: any): input is TupleRestArray => {
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
        })(result)
          ? result
          : null;
      },
  );
