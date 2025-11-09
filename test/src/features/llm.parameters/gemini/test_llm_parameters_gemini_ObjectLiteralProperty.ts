import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectLiteralProperty = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectLiteralProperty",
  })(
    typia.llm.parameters<ObjectLiteralPropertyParameters, "gemini">(),
  );

interface ObjectLiteralPropertyParameters {
  regular: ObjectLiteralProperty;
  nullable: ObjectLiteralProperty | null;
  optional: ObjectLiteralProperty | undefined;
  faint: ObjectLiteralProperty | null | undefined;
  array: Array<ObjectLiteralProperty>;
}