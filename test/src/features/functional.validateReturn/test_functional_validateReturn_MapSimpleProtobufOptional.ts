import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_validateReturn_MapSimpleProtobufOptional =
  (): void =>
    _test_functional_validateReturn("MapSimpleProtobufOptional")(
      MapSimpleProtobufOptional,
    )((p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
      typia.functional.validateReturn(p),
    );
