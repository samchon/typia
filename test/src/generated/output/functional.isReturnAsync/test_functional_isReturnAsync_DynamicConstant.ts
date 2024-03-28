import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_functional_isReturnAsync_DynamicConstant =
  _test_functional_isReturnAsync("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      async (input: DynamicConstant): Promise<DynamicConstant | null> => {
        const result = await p(input);
        return ((input: any): input is DynamicConstant => {
          return (
            "object" === typeof input &&
            null !== input &&
            "object" === typeof (input as any).value &&
            null !== (input as any).value &&
            "number" === typeof ((input as any).value as any).a &&
            Number.isFinite(((input as any).value as any).a) &&
            "number" === typeof ((input as any).value as any).b &&
            Number.isFinite(((input as any).value as any).b) &&
            "number" === typeof ((input as any).value as any).c &&
            Number.isFinite(((input as any).value as any).c) &&
            "number" === typeof ((input as any).value as any).d &&
            Number.isFinite(((input as any).value as any).d)
          );
        })(result)
          ? result
          : null;
      },
  );
