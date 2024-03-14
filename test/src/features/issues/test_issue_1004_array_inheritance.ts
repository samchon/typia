import typia from "typia";
import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1004_array_inheritance = (): void => {
  typia.assert<ArrayBoolean>([true, false]);
  typia.assert<ArrayNumber>([1, 2, 3]);
  typia.assert<ArrayString>(["a", "b", "c"]);
  typia.assert<ArrayStringBase>(["a", "b", "c"]);

  TestValidator.error("not an object")(() =>
    typia.assert<ArrayString>({
      length: 3,
      0: "a",
      1: "b",
      2: "c",
    }),
  );
};

interface ArrayBoolean extends Array<boolean> {}
interface ArrayNumber extends Array<number> {}
interface ArrayString extends ArrayStringBase {}
interface ArrayStringBase extends Array<string> {}
