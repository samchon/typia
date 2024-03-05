import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_functional_isReturn_TupleRestAtomic =
  _test_functional_isReturn("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      (input: TupleRestAtomic): TupleRestAtomic | null => {
        const result = p(input);
        return ((input: any): input is TupleRestAtomic => {
          return (
            Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            Array.isArray(input.slice(2)) &&
            input.slice(2).every((elem: any) => "string" === typeof elem)
          );
        })(result)
          ? result
          : null;
      },
  );
