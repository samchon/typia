import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_reflect_metadata_MapSimpleProtobufNullable = (): void =>
  _test_reflect_metadata("MapSimpleProtobufNullable")(
    typia.reflect.metadata<[MapSimpleProtobufNullable]>(),
  );
