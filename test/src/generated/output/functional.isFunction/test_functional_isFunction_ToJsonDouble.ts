import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
export const test_functional_isFunction_ToJsonDouble =
  _test_functional_isFunction("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      (input: ToJsonDouble): ToJsonDouble | null => {
        if (
          false ===
          ((input: any): input is ToJsonDouble.Parent => {
            return "object" === typeof input && null !== input && true;
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ToJsonDouble.Parent => {
          return "object" === typeof input && null !== input && true;
        })(result)
          ? result
          : null;
      },
  );
