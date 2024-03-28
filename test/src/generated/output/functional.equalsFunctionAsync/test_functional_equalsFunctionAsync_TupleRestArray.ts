import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_functional_equalsFunctionAsync_TupleRestArray =
  _test_functional_equalsFunctionAsync("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      async (input: TupleRestArray): Promise<TupleRestArray | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleRestArray => {
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any, _index1: number) =>
                    Array.isArray(elem) &&
                    elem.every(
                      (elem: any, _index2: number) => "string" === typeof elem,
                    ),
                )
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is TupleRestArray => {
          return (
            Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            Array.isArray(input.slice(2)) &&
            input
              .slice(2)
              .every(
                (elem: any, _index1: number) =>
                  Array.isArray(elem) &&
                  elem.every(
                    (elem: any, _index2: number) => "string" === typeof elem,
                  ),
              )
          );
        })(result)
          ? result
          : null;
      },
  );
