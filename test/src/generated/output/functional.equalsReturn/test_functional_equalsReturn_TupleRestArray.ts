import typia from "typia";
import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { TupleRestArray } from "../../../structures/TupleRestArray";
export const test_functional_equalsReturn_TupleRestArray =
  _test_functional_equalsReturn("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      (input: TupleRestArray): TupleRestArray | null => {
        const result = p(input);
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
