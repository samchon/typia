import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertParameters_MapSimpleProtobufOptional =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "MapSimpleProtobufOptional",
    )(MapSimpleProtobufOptional)(
      (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
        typia.functional.assertParameters(p),
    );
