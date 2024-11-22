import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_application_v3_1_TypeTagArrayUnion =
  _test_json_application({
    version: "3.1",
    name: "TypeTagArrayUnion",
  })(typia.json.application<TypeTagArrayUnionApplication, "3.1">());

interface TypeTagArrayUnionApplication {
  insert(first: TypeTagArrayUnion): Promise<void>;
  reduce(
    first: TypeTagArrayUnion,
    second: TypeTagArrayUnion | null,
  ): Promise<TypeTagArrayUnion>;
  coalesce(
    first: TypeTagArrayUnion | null,
    second: TypeTagArrayUnion | null,
    third?: TypeTagArrayUnion | null,
  ): Promise<TypeTagArrayUnion | null>;
}
