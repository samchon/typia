import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { MapSimpleProtobuf } from "../../../structures/MapSimpleProtobuf";
export const test_functional_isParameters_MapSimpleProtobuf =
  _test_functional_isParameters("MapSimpleProtobuf")(MapSimpleProtobuf)(
    (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
      (input: MapSimpleProtobuf): MapSimpleProtobuf | null => {
        if (
          false ===
          ((input: any): input is MapSimpleProtobuf => {
            const $io0 = (input: any): boolean =>
              input.boolean instanceof Map &&
              (() =>
                [...input.boolean].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "boolean" === typeof elem[1],
                ))() &&
              input.int32 instanceof Map &&
              (() =>
                [...input.int32].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "number" === typeof elem[1] &&
                    Math.floor(elem[1]) === elem[1] &&
                    -2147483648 <= elem[1] &&
                    elem[1] <= 2147483647,
                ))() &&
              input.bigint instanceof Map &&
              (() =>
                [...input.bigint].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "bigint" === typeof elem[1],
                ))() &&
              input.double instanceof Map &&
              (() =>
                [...input.double].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "number" === typeof elem[1] &&
                    Number.isFinite(elem[1]),
                ))() &&
              input.string instanceof Map &&
              (() =>
                [...input.string].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "string" === typeof elem[1] &&
                    1 <= elem[1].length,
                ))() &&
              input.bytes instanceof Map &&
              (() =>
                [...input.bytes].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    elem[1] instanceof Uint8Array,
                ))() &&
              input.objects instanceof Map &&
              (() =>
                [...input.objects].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "object" === typeof elem[1] &&
                    null !== elem[1] &&
                    $io0(elem[1]),
                ))();
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
