import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1062_uniqueItems = () => {
  TestValidator.equals("implicit")([true, true, true, false])([
    typia.is<string[] & tags.UniqueItems>([]),
    typia.is<string[] & tags.UniqueItems>(["one"]),
    typia.is<string[] & tags.UniqueItems>(["one", "two", "three"]),
    typia.is<string[] & tags.UniqueItems>(["one", "two", "one"]),
  ]);
  TestValidator.equals("explicit true")([true, true, true, false])([
    typia.is<string[] & tags.UniqueItems<true>>([]),
    typia.is<string[] & tags.UniqueItems<true>>(["one"]),
    typia.is<string[] & tags.UniqueItems<true>>(["one", "two", "three"]),
    typia.is<string[] & tags.UniqueItems<true>>(["one", "two", "one"]),
  ]);
  TestValidator.equals("explicit false")([true, true, true, true])([
    typia.is<string[] & tags.UniqueItems<false>>([]),
    typia.is<string[] & tags.UniqueItems<false>>(["one"]),
    typia.is<string[] & tags.UniqueItems<false>>(["one", "two", "three"]),
    typia.is<string[] & tags.UniqueItems<false>>(["one", "two", "one"]),
  ]);
};
