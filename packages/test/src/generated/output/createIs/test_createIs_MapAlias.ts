import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { MapAlias } from "../../../structures/MapAlias";

export const test_createIs_MapAlias = _test_is("MapAlias")<MapAlias>(MapAlias)(
  (input: any): input is MapAlias => {
    const $io0 = (input: any): boolean =>
      input.boolean instanceof Map &&
      (() =>
        [...input.boolean].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "boolean" === typeof elem[0] &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.number instanceof Map &&
      (() =>
        [...input.number].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "number" === typeof elem[0] &&
            Number.isFinite(elem[0]) &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.strings instanceof Map &&
      (() =>
        [...input.strings].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "string" === typeof elem[0] &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.arrays instanceof Map &&
      (() =>
        [...input.arrays].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            Array.isArray(elem[0]) &&
            elem[0].every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.objects instanceof Map &&
      (() =>
        [...input.objects].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "object" === typeof elem[0] &&
            null !== elem[0] &&
            $io1(elem[0]) &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))();
    const $io1 = (input: any): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      "number" === typeof input.age &&
      Number.isFinite(input.age);
    return "object" === typeof input && null !== input && $io0(input);
  },
);
