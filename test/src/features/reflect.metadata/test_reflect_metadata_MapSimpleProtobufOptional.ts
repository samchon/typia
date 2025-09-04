import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_reflect_metadata_MapSimpleProtobufOptional = (): void =>
  _test_reflect_metadata("MapSimpleProtobufOptional")(
    typia.reflect.metadata<[MapSimpleProtobufOptional]>(),
  );
