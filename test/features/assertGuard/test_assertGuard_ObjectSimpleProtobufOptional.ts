import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_assertGuard_ObjectSimpleProtobufOptional = _test_assertGuard(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)((input) =>
  typia.assertGuard<ObjectSimpleProtobufOptional>(input),
);
