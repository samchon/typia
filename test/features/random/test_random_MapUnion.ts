import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { MapUnion } from "../../structures/MapUnion";

export const test_random_MapUnion = _test_random("MapUnion")<MapUnion>(
    MapUnion,
)({
    random: () => typia.random<MapUnion>(),
    assert: typia.createAssert<MapUnion>(),
});
