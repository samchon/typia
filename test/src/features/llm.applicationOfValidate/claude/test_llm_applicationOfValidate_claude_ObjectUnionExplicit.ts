import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_applicationOfValidate_claude_ObjectUnionExplicit =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ObjectUnionExplicit",
    factory: ObjectUnionExplicit,
  })(
    typia.llm.applicationOfValidate<ObjectUnionExplicitApplication, "claude">(),
  );

interface ObjectUnionExplicitApplication {
  insert(p: { first: ObjectUnionExplicit }): Promise<void>;
  reduce(p: {
    first: ObjectUnionExplicit;
    second: ObjectUnionExplicit | null;
  }): Promise<ObjectUnionExplicit>;
  coalesce(p: {
    first: ObjectUnionExplicit | null;
    second: ObjectUnionExplicit | null;
    third?: ObjectUnionExplicit | null;
  }): Promise<ObjectUnionExplicit | null>;
}
