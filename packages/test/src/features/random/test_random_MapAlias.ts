import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { MapAlias } from "../../structures/MapAlias";

export const test_random_MapAlias = _test_random("MapAlias")<MapAlias>(
  MapAlias,
)({
  random: () => typia.random<MapAlias>((MapAlias as any).RANDOM),
  assert: typia.createAssert<MapAlias>(),
});
