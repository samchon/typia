import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { MapUnion } from "../../structures/MapUnion";

export const test_misc_clone_MapUnion = _test_misc_clone("MapUnion")<MapUnion>(
    MapUnion,
)((input) => typia.misc.clone<MapUnion>(input));
