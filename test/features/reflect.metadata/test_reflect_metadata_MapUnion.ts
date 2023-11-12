import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { MapUnion } from "../../structures/MapUnion";

export const test_reflect_metadata_MapUnion = _test_reflect_metadata(
    "MapUnion",
)(typia.reflect.metadata<[MapUnion]>());
