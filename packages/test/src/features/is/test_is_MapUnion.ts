import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { MapUnion } from "../../structures/MapUnion";

export const test_is_MapUnion = _test_is("MapUnion")<MapUnion>(MapUnion)(
  (input) => typia.is<MapUnion>(input),
);
