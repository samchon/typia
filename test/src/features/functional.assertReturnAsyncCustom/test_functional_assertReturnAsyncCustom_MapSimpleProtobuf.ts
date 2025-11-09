import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_MapSimpleProtobuf = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)