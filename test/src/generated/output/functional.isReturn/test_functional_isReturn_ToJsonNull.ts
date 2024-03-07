import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ToJsonNull } from "../../../structures/ToJsonNull";
export const test_functional_isReturn_ToJsonNull = _test_functional_isReturn(
  "ToJsonNull",
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) =>
    (input: ToJsonNull): ToJsonNull | null => {
      const result = p(input);
      return ((input: any): input is ToJsonNull => {
        const $io0 = (input: any): boolean =>
          "function" === typeof input.toJSON;
        return "object" === typeof input && null !== input && $io0(input);
      })(result)
        ? result
        : null;
    },
);
