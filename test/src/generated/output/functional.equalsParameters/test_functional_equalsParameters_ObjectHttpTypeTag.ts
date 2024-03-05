import typia from "typia";

import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_functional_equalsParameters_ObjectHttpTypeTag =
  _test_functional_equalsParameters("ObjectHttpTypeTag")(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
      (input: ObjectHttpTypeTag): ObjectHttpTypeTag | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectHttpTypeTag => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.int32 &&
              Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647 &&
              "bigint" === typeof input.uint64 &&
              BigInt(0) <= input.uint64 &&
              "string" === typeof input.uuid &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.uuid,
              ) &&
              Array.isArray(input.range) &&
              10 <= input.range.length &&
              input.range.length <= 100 &&
              input.range.every(
                (elem: any, _index1: number) =>
                  "number" === typeof elem && 3 <= elem && elem <= 7,
              ) &&
              Array.isArray(input.length) &&
              10 <= input.length.length &&
              input.length.length <= 100 &&
              input.length.every(
                (elem: any, _index2: number) =>
                  "string" === typeof elem &&
                  3 <= elem.length &&
                  elem.length <= 7,
              ) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["int32", "uint64", "uuid", "range", "length"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
