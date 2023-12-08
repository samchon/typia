import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createIs_ArraySimpleProtobufOptional = _test_is(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)(
  typia.createIs<ArraySimpleProtobufOptional>(),
);
