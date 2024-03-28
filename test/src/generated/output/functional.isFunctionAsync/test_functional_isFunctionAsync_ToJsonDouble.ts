import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_functional_isFunctionAsync_ToJsonDouble =
  _test_functional_isFunctionAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      async (input: ToJsonDouble): Promise<ToJsonDouble | null> => {
        if (
          false ===
          ((input: any): input is ToJsonDouble.Parent => {
            return "object" === typeof input && null !== input && true;
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ToJsonDouble.Parent => {
          return "object" === typeof input && null !== input && true;
        })(result)
          ? result
          : null;
      },
  );
