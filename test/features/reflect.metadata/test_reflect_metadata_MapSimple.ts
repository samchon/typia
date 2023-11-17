import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { MapSimple } from "../../structures/MapSimple";

export const test_reflect_metadata_MapSimple = _test_reflect_metadata(
  "MapSimple",
)(typia.reflect.metadata<[MapSimple]>());
