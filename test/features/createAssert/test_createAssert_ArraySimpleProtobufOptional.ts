import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createAssert_ArraySimpleProtobufOptional = _test_assert(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)(
  typia.createAssert<ArraySimpleProtobufOptional>(),
);
