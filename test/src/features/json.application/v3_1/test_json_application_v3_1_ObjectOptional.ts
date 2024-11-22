import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_application_v3_1_ObjectOptional = _test_json_application(
  {
    version: "3.1",
    name: "ObjectOptional",
  },
)(typia.json.application<ObjectOptionalApplication, "3.1">());

interface ObjectOptionalApplication {
  insert(first: ObjectOptional): Promise<void>;
  reduce(
    first: ObjectOptional,
    second: ObjectOptional | null,
  ): Promise<ObjectOptional>;
  coalesce(
    first: ObjectOptional | null,
    second: ObjectOptional | null,
    third?: ObjectOptional | null,
  ): Promise<ObjectOptional | null>;
}
