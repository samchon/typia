import typia from "typia";

import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_functional_equalsParameters_TupleRestAtomic =
  _test_functional_equalsParameters("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      (input: TupleRestAtomic): TupleRestAtomic | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleRestAtomic => {
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every((elem: any, _index1: number) => "string" === typeof elem)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
