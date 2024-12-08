import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_applicationOfValidate_chatgpt_ArrayRecursiveUnionExplicit =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ArrayRecursiveUnionExplicit",
    factory: ArrayRecursiveUnionExplicit,
  })(
    typia.llm.applicationOfValidate<
      ArrayRecursiveUnionExplicitApplication,
      "chatgpt"
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
