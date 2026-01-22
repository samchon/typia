import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1054_check_constants_by_set = (): void => {
  for (const boolean of [false] as const)
    for (const bigint of [1n, 2n, 3n, 4n] as const)
      for (const number of [5, 6, 7] as const)
        for (const string of ["eight", "nine"] as const)
          for (const huge of [
            false,
            1n,
            2n,
            3n,
            4n,
            5,
            6,
            7,
            "eight",
            "nine",
            10,
            11,
            12n,
            "thirteen",
            "fourteen",
            15n,
          ] as const) {
            const obj: ConstantDictionary = {
              boolean,
              bigint,
              number,
              string,
              huge,
            };
            typia.assert(obj);
            typia.assertGuard(obj);
            TestValidator.equals("is")(true)(typia.is(obj));
            TestValidator.equals("validate")({
              success: true,
            })(typia.validate(obj));
          }

  const invalid: ConstantDictionary = {
    boolean: false,
    bigint: 2n,
    number: 7,
    string: "nine",
    huge: 13 as any,
  };
  TestValidator.equals("is-false")(false)(typia.is(invalid));
  TestValidator.error("assert-error")(() => typia.assert(invalid));
  TestValidator.error("assertGuard-error")(() => typia.assertGuard(invalid));
  TestValidator.equals("validate-false")({ success: false })(
    typia.validate(invalid),
  );
};
// console.log(typia.createIs<ConstantDictionary>().toString());
// test_issue_1054_check_constants_by_set();

interface ConstantDictionary {
  boolean: false;
  bigint: 1n | 2n | 3n | 4n;
  number: 5 | 6 | 7;
  string: "eight" | "nine";
  huge:
    | false
    | 1n
    | 2n
    | 3n
    | 4n
    | 5
    | 6
    | 7
    | "eight"
    | "nine"
    | 10
    | 11
    | 12n
    | "thirteen"
    | "fourteen"
    | 15n;
}
