import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_functional_isParameters_TupleRestObject =
  _test_functional_isParameters("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      (input: TupleRestObject): TupleRestObject | null => {
        if (
          false ===
          ((input: any): input is TupleRestObject => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.value;
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
                    "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
