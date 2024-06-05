import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1067_cjs_esm = (): void => {
  const values: number[] = ArrayUtil.repeat(10, () => 0);
  TestValidator.equals("internal")(values)(new Array(10).fill(0));
};
