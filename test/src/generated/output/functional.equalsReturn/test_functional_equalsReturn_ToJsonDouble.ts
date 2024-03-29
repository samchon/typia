import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_functional_equalsReturn_ToJsonDouble =
  _test_functional_equalsReturn("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      (input: ToJsonDouble): ToJsonDouble | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ToJsonDouble.Parent => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            0 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return false;
            });
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
