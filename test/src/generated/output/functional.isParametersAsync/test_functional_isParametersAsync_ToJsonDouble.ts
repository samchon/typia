import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
export const test_functional_isParametersAsync_ToJsonDouble =
  _test_functional_isParametersAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      async (input: ToJsonDouble): Promise<ToJsonDouble | null> => {
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
