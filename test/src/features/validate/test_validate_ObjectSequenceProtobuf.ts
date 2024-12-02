import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_validate_ObjectSequenceProtobuf = _test_validate(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)((input) =>
  typia.validate<ObjectSequenceProtobuf>(input),
);
