import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_createRandom_MapSimpleProtobufOptional = (): void =>
  _test_random("MapSimpleProtobufOptional")<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional,
  )({
    random: typia.createRandom<MapSimpleProtobufOptional>(
      (MapSimpleProtobufOptional as any).RANDOM,
    ),
    assert: typia.createAssert<MapSimpleProtobufOptional>(),
  });
