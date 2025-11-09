import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_MapSimpleProtobuf = (): void => _test_functional_assertParameters(CustomGuardError)(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)