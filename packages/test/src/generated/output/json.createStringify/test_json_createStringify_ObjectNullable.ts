import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_createStringify_ObjectNullable = _test_json_stringify(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input: ObjectNullable): string => {
  const $io1 = (input: any): boolean =>
    "string" === typeof input.name &&
    "object" === typeof input.manufacturer &&
    null !== input.manufacturer &&
    $io2(input.manufacturer) &&
    (null === input.brand ||
      ("object" === typeof input.brand &&
        null !== input.brand &&
        $io3(input.brand))) &&
    (null === input.similar ||
      ("object" === typeof input.similar &&
        null !== input.similar &&
        $iu0(input.similar)));
  const $io2 = (input: any): boolean =>
    "manufacturer" === input.type && "string" === typeof input.name;
  const $io3 = (input: any): boolean =>
    "brand" === input.type && "string" === typeof input.name;
  const $iu0 = (input: any): any =>
    (() => {
      if ("brand" === input.type) return $io3(input);
      else if ("manufacturer" === input.type) return $io2(input);
      else return false;
    })();
  const $string = (typia.json.createStringify as any).string;
  const $throws = (typia.json.createStringify as any).throws;
  const $so0 = (input: any): any =>
    `{"value":${`[${input.value.map((elem: any) => $so1(elem)).join(",")}]`}}`;
  const $so1 = (input: any): any =>
    `{"name":${$string(input.name)},"manufacturer":${$so2(
      input.manufacturer,
    )},"brand":${null !== input.brand ? $so3(input.brand) : "null"},"similar":${
      null !== input.similar ? $su0(input.similar) : "null"
    }}`;
  const $so2 = (input: any): any =>
    `{"type":${(() => {
      if ("string" === typeof input.type) return $string(input.type);
      if ("string" === typeof input.type) return '"' + input.type + '"';
      $throws({
        expected: '"manufacturer"',
        value: input.type,
      });
    })()},"name":${$string(input.name)}}`;
  const $so3 = (input: any): any =>
    `{"type":${(() => {
      if ("string" === typeof input.type) return $string(input.type);
      if ("string" === typeof input.type) return '"' + input.type + '"';
      $throws({
        expected: '"brand"',
        value: input.type,
      });
    })()},"name":${$string(input.name)}}`;
  const $su0 = (input: any): any =>
    (() => {
      if ("brand" === input.type) return $so3(input);
      else if ("manufacturer" === input.type) return $so2(input);
      else
        $throws({
          expected: "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
          value: input,
        });
    })();
  return $so0(input);
});
