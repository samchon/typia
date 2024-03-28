import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_functional_equalsReturn_TypeTagMatrix =
  _test_functional_equalsReturn("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      (input: TypeTagMatrix): TypeTagMatrix | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is TypeTagMatrix => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.matrix) &&
            3 <= input.matrix.length &&
            input.matrix.length <= 3 &&
            input.matrix.every(
              (elem: any, _index1: number) =>
                Array.isArray(elem) &&
                4 <= elem.length &&
                elem.length <= 4 &&
                elem.every(
                  (elem: any, _index2: number) =>
                    "string" === typeof elem &&
                    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                      elem,
                    ),
                ),
            ) &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["matrix"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
