import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_applicationOfValidate_llama_ArrayRecursiveUnionImplicit =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ArrayRecursiveUnionImplicit",
    factory: ArrayRecursiveUnionImplicit,
  })(
    typia.llm.applicationOfValidate<
      ArrayRecursiveUnionImplicitApplication,
      "llama"
    >(),
  );

interface ArrayRecursiveUnionImplicitApplication {
  insert(p: { first: ArrayRecursiveUnionImplicit }): Promise<void>;
  reduce(p: {
    first: ArrayRecursiveUnionImplicit;
    second: ArrayRecursiveUnionImplicit | null;
  }): Promise<ArrayRecursiveUnionImplicit>;
  coalesce(p: {
    first: ArrayRecursiveUnionImplicit | null;
    second: ArrayRecursiveUnionImplicit | null;
    third?: ArrayRecursiveUnionImplicit | null;
  }): Promise<ArrayRecursiveUnionImplicit | null>;
}
