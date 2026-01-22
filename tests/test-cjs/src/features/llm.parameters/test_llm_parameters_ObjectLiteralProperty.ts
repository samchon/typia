import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_llm_parameters_ObjectLiteralProperty = (): void =>
  _test_llm_parameters("ObjectLiteralProperty")(
    typia.llm.parameters<ObjectLiteralPropertyParameters>(),
  );

interface ObjectLiteralPropertyParameters {
  regular: ObjectLiteralProperty;
  nullable: ObjectLiteralProperty | null;
  optional: ObjectLiteralProperty | undefined;
  faint: ObjectLiteralProperty | null | undefined;
  array: Array<ObjectLiteralProperty>;
}
