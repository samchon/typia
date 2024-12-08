import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_applicationOfValidate_3_0_ArrayRecursiveUnionExplicit =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ArrayRecursiveUnionExplicit",
    factory: ArrayRecursiveUnionExplicit,
  })(
    typia.llm.applicationOfValidate<
      ArrayRecursiveUnionExplicitApplication,
      "3.0"
    >(),
  );

interface ArrayRecursiveUnionExplicitApplication {
  insert(p: { first: ArrayRecursiveUnionExplicit }): Promise<void>;
  reduce(p: {
    first: ArrayRecursiveUnionExplicit;
    second: ArrayRecursiveUnionExplicit | null;
  }): Promise<ArrayRecursiveUnionExplicit>;
  coalesce(p: {
    first: ArrayRecursiveUnionExplicit | null;
    second: ArrayRecursiveUnionExplicit | null;
    third?: ArrayRecursiveUnionExplicit | null;
  }): Promise<ArrayRecursiveUnionExplicit | null>;
}
