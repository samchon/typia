import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { MapAlias } from "../../structures/MapAlias";

export const test_random_MapAlias = _test_random("MapAlias")<MapAlias>(
    MapAlias,
)({
    random: typia.createRandom<MapAlias>(),
    assert: typia.createAssert<MapAlias>(),
});
