import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_assertGuard_ObjectSimpleProtobufNullable = _test_assertGuard(
  "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)((input) =>
  typia.assertGuard<ObjectSimpleProtobufNullable>(input),
);
