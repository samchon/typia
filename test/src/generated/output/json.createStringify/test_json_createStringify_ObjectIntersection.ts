import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_createStringify_ObjectIntersection =
  _test_json_stringify("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input: ObjectIntersection): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
    return `{"email":${$string((input as any).email)},"name":${$string(
      (input as any).name,
    )},"vulnerable":${(input as any).vulnerable}}`;
  });
