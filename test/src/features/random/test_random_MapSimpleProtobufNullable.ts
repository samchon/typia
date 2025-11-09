import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_random_MapSimpleProtobufNullable = (): void =>
  _test_random("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable,
  )({
    random: () =>
      typia.random<MapSimpleProtobufNullable>(
        (MapSimpleProtobufNullable as any).RANDOM,
      ),
    assert: typia.createAssert<MapSimpleProtobufNullable>(),
  });
