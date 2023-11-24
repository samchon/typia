import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_assertGuard_MapSimpleProtobuf = _test_assertGuard(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)((input) =>
  typia.assertGuard<MapSimpleProtobuf>(input),
);
