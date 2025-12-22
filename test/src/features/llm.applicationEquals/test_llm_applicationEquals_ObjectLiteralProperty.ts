import typia from "typia";

import { _test_llm_applicationEquals } from "../../internal/_test_llm_applicationEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_llm_applicationEquals_ObjectLiteralProperty = (): void =>
  _test_llm_applicationEquals({
    name: "ObjectLiteralProperty",
    factory: ObjectLiteralProperty,
  })(
    typia.llm.application<ObjectLiteralPropertyApplication, { equals: true }>(),
  );

interface ObjectLiteralPropertyApplication {
  insert(p: { first: ObjectLiteralProperty }): Promise<void>;
  reduce(p: {
    first: ObjectLiteralProperty;
    second: ObjectLiteralProperty | null;
  }): Promise<ObjectLiteralProperty>;
  coalesce(p: {
    first: ObjectLiteralProperty | null;
    second: ObjectLiteralProperty | null;
    third?: ObjectLiteralProperty | null;
  }): Promise<ObjectLiteralProperty | null>;
}
