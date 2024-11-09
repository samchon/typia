import typia from "typia";
import { MapAlias } from "../../structures/MapAlias";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_MapAlias = 
  _test_reflect_metadata("MapAlias")(
    typia.reflect.metadata<[MapAlias]>()
  );