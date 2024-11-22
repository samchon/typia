import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_application_v3_1_TypeTagMatrix = _test_json_application({
  version: "3.1",
  name: "TypeTagMatrix",
})(typia.json.application<TypeTagMatrixApplication, "3.1">());

interface TypeTagMatrixApplication {
  insert(first: TypeTagMatrix): Promise<void>;
  reduce(
    first: TypeTagMatrix,
    second: TypeTagMatrix | null,
  ): Promise<TypeTagMatrix>;
  coalesce(
    first: TypeTagMatrix | null,
    second: TypeTagMatrix | null,
    third?: TypeTagMatrix | null,
  ): Promise<TypeTagMatrix | null>;
}
