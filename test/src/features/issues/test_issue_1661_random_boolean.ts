import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1661_random_boolean = (): void => {
  const fn: string = typia.createRandom<boolean>().toString();
  TestValidator.predicate("no argument")(() =>
    fn.includes("_randomBoolean)()"),
  );
};
