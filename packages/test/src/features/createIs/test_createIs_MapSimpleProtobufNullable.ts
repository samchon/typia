import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createIs_MapSimpleProtobufNullable = _test_is(
  "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)(
  typia.createIs<MapSimpleProtobufNullable>(),
);
