import typia from "typia";
import { MapSimple } from "../../structures/MapSimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_MapSimple = _test_reflect_metadata(
  "MapSimple",
)(typia.reflect.metadata<[MapSimple]>());
