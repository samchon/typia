import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_standardSchema_createValidate_ObjectSequenceProtobuf =
  _test_standardSchema_validate(
    "ObjectSequenceProtobuf",
  )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)(
    typia.createValidate<ObjectSequenceProtobuf>(),
  );
