import typia from "typia";
import { MapUnion } from "../../structures/MapUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_MapUnion = 
  _test_reflect_metadata("MapUnion")(
    typia.reflect.metadata<[MapUnion]>()
  );