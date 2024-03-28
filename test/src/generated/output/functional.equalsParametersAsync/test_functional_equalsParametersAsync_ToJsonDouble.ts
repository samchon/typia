import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_functional_equalsParametersAsync_ToJsonDouble =
  _test_functional_equalsParametersAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      async (input: ToJsonDouble): Promise<ToJsonDouble | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ToJsonDouble.Parent => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
          })(input)
        )
          return null;
        return p(input);
      },
  );
