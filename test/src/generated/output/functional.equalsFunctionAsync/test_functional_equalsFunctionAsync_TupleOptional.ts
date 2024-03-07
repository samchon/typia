import typia from "typia";
import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { TupleOptional } from "../../../structures/TupleOptional";
export const test_functional_equalsFunctionAsync_TupleOptional =
  _test_functional_equalsFunctionAsync("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => Promise<TupleOptional>) =>
      async (input: TupleOptional): Promise<TupleOptional | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleOptional => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  Array.isArray(elem) &&
                  3 <= elem.length &&
                  5 >= elem.length &&
                  "number" === typeof elem[0] &&
                  Number.isFinite(elem[0]) &&
                  "boolean" === typeof elem[1] &&
                  "string" === typeof elem[2] &&
                  (null === elem[3] ||
                    undefined === elem[3] ||
                    ("number" === typeof elem[3] &&
                      Number.isFinite(elem[3]))) &&
                  (null === elem[4] ||
                    undefined === elem[4] ||
                    "string" === typeof elem[4]),
              )
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is TupleOptional => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                Array.isArray(elem) &&
                3 <= elem.length &&
                5 >= elem.length &&
                "number" === typeof elem[0] &&
                Number.isFinite(elem[0]) &&
                "boolean" === typeof elem[1] &&
                "string" === typeof elem[2] &&
                (null === elem[3] ||
                  undefined === elem[3] ||
                  ("number" === typeof elem[3] && Number.isFinite(elem[3]))) &&
                (null === elem[4] ||
                  undefined === elem[4] ||
                  "string" === typeof elem[4]),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
