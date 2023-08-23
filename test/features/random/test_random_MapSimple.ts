import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { MapSimple } from "../../structures/MapSimple";

export const test_random_MapSimple = _test_random("MapSimple")<MapSimple>(
    MapSimple,
)({
    random: () => typia.random<MapSimple>(),
    assert: typia.createAssert<MapSimple>(),
});
