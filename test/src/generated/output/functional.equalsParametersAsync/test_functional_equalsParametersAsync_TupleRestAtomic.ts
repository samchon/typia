import typia from "typia";
import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
export const test_functional_equalsParametersAsync_TupleRestAtomic =
  _test_functional_equalsParametersAsync("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      async (input: TupleRestAtomic): Promise<TupleRestAtomic | null> => {
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
