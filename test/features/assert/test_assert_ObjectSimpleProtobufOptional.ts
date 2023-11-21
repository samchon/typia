import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_assert_ObjectSimpleProtobufOptional = _test_assert(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)((input) =>
  typia.assert<ObjectSimpleProtobufOptional>(input),
);
