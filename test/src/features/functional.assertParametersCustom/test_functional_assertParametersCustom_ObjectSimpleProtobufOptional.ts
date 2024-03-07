import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectSimpleProtobufOptional =
  _test_functional_assertParameters(CustomGuardError)(
    "ObjectSimpleProtobufOptional",
  )(ObjectSimpleProtobufOptional)(
    (
      p: (input: ObjectSimpleProtobufOptional) => ObjectSimpleProtobufOptional,
    ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
