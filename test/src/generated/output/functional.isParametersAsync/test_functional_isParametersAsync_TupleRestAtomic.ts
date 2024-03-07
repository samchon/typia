import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
export const test_functional_isParametersAsync_TupleRestAtomic =
  _test_functional_isParametersAsync("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      async (input: TupleRestAtomic): Promise<TupleRestAtomic | null> => {
        if (
          false ===
          ((input: any): input is TupleRestAtomic => {
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input.slice(2).every((elem: any) => "string" === typeof elem)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
