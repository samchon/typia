import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_applicationOfValidate_3_0_ObjectUnionNonPredictable =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ObjectUnionNonPredictable",
    factory: ObjectUnionNonPredictable,
  })(
    typia.llm.applicationOfValidate<
      ObjectUnionNonPredictableApplication,
      "3.0"
    >(),
  );

interface ObjectUnionNonPredictableApplication {
  insert(p: { first: ObjectUnionNonPredictable }): Promise<void>;
  reduce(p: {
    first: ObjectUnionNonPredictable;
    second: ObjectUnionNonPredictable | null;
  }): Promise<ObjectUnionNonPredictable>;
  coalesce(p: {
    first: ObjectUnionNonPredictable | null;
    second: ObjectUnionNonPredictable | null;
    third?: ObjectUnionNonPredictable | null;
  }): Promise<ObjectUnionNonPredictable | null>;
}
