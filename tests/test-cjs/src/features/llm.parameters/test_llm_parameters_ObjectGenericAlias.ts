import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_llm_parameters_ObjectGenericAlias = (): void =>
  _test_llm_parameters("ObjectGenericAlias")(
    typia.llm.parameters<ObjectGenericAliasParameters>(),
  );

interface ObjectGenericAliasParameters {
  regular: ObjectGenericAlias;
  nullable: ObjectGenericAlias | null;
  optional: ObjectGenericAlias | undefined;
  faint: ObjectGenericAlias | null | undefined;
  array: Array<ObjectGenericAlias>;
}
