import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_functional_equalsReturn_ToJsonAtomicSimple =
  _test_functional_equalsReturn("ToJsonAtomicSimple")(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
      (input: ToJsonAtomicSimple): ToJsonAtomicSimple | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ToJsonAtomicSimple => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0], true) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1], true) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io2(input[2], true)
          );
        })(result)
          ? result
          : null;
      },
  );
