import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_assertParametersCustom_ObjectSimpleProtobufNullable =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ObjectSimpleProtobufNullable",
    )(ObjectSimpleProtobufNullable)(
      (
        p: (
          input: ObjectSimpleProtobufNullable,
        ) => ObjectSimpleProtobufNullable,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
