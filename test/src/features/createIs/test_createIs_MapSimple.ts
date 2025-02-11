import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { MapSimple } from "../../structures/MapSimple";

export const test_createIs_MapSimple = _test_is("MapSimple")<MapSimple>(
  MapSimple,
)(typia.createIs<MapSimple>());
