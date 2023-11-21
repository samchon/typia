import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createValidate_ObjectSimpleProtobuf = _test_validate(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)(
  typia.createValidate<ObjectSimpleProtobuf>(),
);
