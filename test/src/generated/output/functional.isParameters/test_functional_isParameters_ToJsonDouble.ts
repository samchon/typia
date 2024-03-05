import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_functional_isParameters_ToJsonDouble =
  _test_functional_isParameters("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      (input: ToJsonDouble): ToJsonDouble | null => {
        if (
          false ===
          ((input: any): input is ToJsonDouble.Parent => {
            return "object" === typeof input && null !== input && true;
          })(input)
        )
          return null;
        return p(input);
      },
  );
