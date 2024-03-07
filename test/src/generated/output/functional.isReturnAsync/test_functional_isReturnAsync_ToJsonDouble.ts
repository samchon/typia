import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
export const test_functional_isReturnAsync_ToJsonDouble =
  _test_functional_isReturnAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      async (input: ToJsonDouble): Promise<ToJsonDouble | null> => {
        const result = await p(input);
        return ((input: any): input is ToJsonDouble.Parent => {
          return "object" === typeof input && null !== input && true;
        })(result)
          ? result
          : null;
      },
  );
