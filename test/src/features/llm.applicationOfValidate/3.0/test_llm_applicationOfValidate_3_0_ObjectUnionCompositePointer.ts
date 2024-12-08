import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_applicationOfValidate_3_0_ObjectUnionCompositePointer =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ObjectUnionCompositePointer",
    factory: ObjectUnionCompositePointer,
  })(
    typia.llm.applicationOfValidate<
      ObjectUnionCompositePointerApplication,
      "3.0"
    >(),
  );

interface ObjectUnionCompositePointerApplication {
  insert(p: { first: ObjectUnionCompositePointer }): Promise<void>;
  reduce(p: {
    first: ObjectUnionCompositePointer;
    second: ObjectUnionCompositePointer | null;
  }): Promise<ObjectUnionCompositePointer>;
  coalesce(p: {
    first: ObjectUnionCompositePointer | null;
    second: ObjectUnionCompositePointer | null;
    third?: ObjectUnionCompositePointer | null;
  }): Promise<ObjectUnionCompositePointer | null>;
}
