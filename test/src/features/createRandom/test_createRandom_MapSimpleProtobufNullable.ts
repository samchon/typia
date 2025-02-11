import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createRandom_MapSimpleProtobufNullable = _test_random("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)({
  random: typia.createRandom<MapSimpleProtobufNullable>((MapSimpleProtobufNullable as any).RANDOM),
  assert: typia.createAssert<MapSimpleProtobufNullable>(),
});
