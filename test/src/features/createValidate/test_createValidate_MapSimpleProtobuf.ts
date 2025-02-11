import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createValidate_MapSimpleProtobuf = _test_validate(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)(
  typia.createValidate<MapSimpleProtobuf>(),
);
