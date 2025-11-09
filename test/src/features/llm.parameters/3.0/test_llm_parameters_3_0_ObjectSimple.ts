import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_parameters_3_0_ObjectSimple = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectSimple",
  })(typia.llm.parameters<ObjectSimpleParameters, "3.0">());

interface ObjectSimpleParameters {
  regular: ObjectSimple;
  nullable: ObjectSimple | null;
  optional: ObjectSimple | undefined;
  faint: ObjectSimple | null | undefined;
  array: Array<ObjectSimple>;
}
