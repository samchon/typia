import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { MapAlias } from "../../structures/MapAlias";

export const test_reflect_metadata_MapAlias = _test_reflect_metadata(
    "MapAlias",
)(typia.reflect.metadata<[MapAlias]>());
