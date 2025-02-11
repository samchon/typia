import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createRandom_MapSimpleProtobuf = _test_random("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf
)({
  random: typia.createRandom<MapSimpleProtobuf>((MapSimpleProtobuf as any).RANDOM),
  assert: typia.createAssert<MapSimpleProtobuf>(),
});
