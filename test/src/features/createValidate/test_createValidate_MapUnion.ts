import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapUnion } from "../../structures/MapUnion";

export const test_createValidate_MapUnion = _test_validate(
  "MapUnion",
)<MapUnion>(MapUnion)(typia.createValidate<MapUnion>());
