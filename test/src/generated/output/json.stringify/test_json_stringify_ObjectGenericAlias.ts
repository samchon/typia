import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_stringify_ObjectGenericAlias = _test_json_stringify(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  ((input: ObjectGenericAlias): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
    return `{"value":${$string((input as any).value)}}`;
  })(input),
);
