import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_createStringify_ObjectGenericAlias =
  _test_json_stringify("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input: ObjectGenericAlias): string => {
    const $string = (typia.json.createStringify as any).string;
    return `{"value":${$string((input as any).value)}}`;
  });
