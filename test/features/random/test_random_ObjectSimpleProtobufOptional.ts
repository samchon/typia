import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_random_ObjectSimpleProtobufOptional = _test_random(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  random: () =>
    typia.random<ObjectSimpleProtobufOptional>(
      (ObjectSimpleProtobufOptional as any).RANDOM,
    ),
  assert: typia.createAssert<ObjectSimpleProtobufOptional>(),
});
