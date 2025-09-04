import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { MapUnion } from "../../structures/MapUnion";

export const test_reflect_metadata_MapUnion = (): void =>
  _test_reflect_metadata("MapUnion")(typia.reflect.metadata<[MapUnion]>());
