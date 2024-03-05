import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_functional_isReturn_ToJsonDouble = _test_functional_isReturn(
  "ToJsonDouble",
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => ToJsonDouble) =>
    (input: ToJsonDouble): ToJsonDouble | null => {
      const result = p(input);
      return ((input: any): input is ToJsonDouble.Parent => {
        return "object" === typeof input && null !== input && true;
      })(result)
        ? result
        : null;
    },
);
