import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { MapUnion } from "../../structures/MapUnion";

export const test_random_MapUnion = _test_random("MapUnion")<MapUnion>(
  MapUnion,
)({
  random: () => typia.random<MapUnion>((MapUnion as any).RANDOM),
  assert: typia.createAssert<MapUnion>(),
});
