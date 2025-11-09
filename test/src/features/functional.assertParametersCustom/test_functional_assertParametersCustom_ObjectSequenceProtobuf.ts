import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectSequenceProtobuf = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ObjectSequenceProtobuf"
)(ObjectSequenceProtobuf)(
  (p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)