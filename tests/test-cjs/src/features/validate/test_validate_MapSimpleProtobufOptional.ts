import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_validate_MapSimpleProtobufOptional = (): void =>
  _test_validate("MapSimpleProtobufOptional")<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional,
  )((input) => typia.validate<MapSimpleProtobufOptional>(input));
