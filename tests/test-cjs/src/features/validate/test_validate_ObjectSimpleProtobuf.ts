import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_validate_ObjectSimpleProtobuf = (): void =>
  _test_validate("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )((input) => typia.validate<ObjectSimpleProtobuf>(input));
