import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { MapSimpleProtobufOptional } from "../../../structures/MapSimpleProtobufOptional";

export const test_is_MapSimpleProtobufOptional = _test_is(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)((input) =>
  ((input: any): input is MapSimpleProtobufOptional => {
    const $io0 = (input: any): boolean =>
      (undefined === input.boolean ||
        (input.boolean instanceof Map &&
          (() =>
            [...input.boolean].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "boolean" === typeof elem[1],
            ))())) &&
      (undefined === input.int32 ||
        (input.int32 instanceof Map &&
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
            ))())) &&
      (undefined === input.bigint ||
        (input.bigint instanceof Map &&
          (() =>
            [...input.bigint].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "bigint" === typeof elem[1],
            ))())) &&
      (undefined === input.double ||
        (input.double instanceof Map &&
          (() =>
            [...input.double].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "number" === typeof elem[1] &&
                Number.isFinite(elem[1]),
            ))())) &&
      (undefined === input.string ||
        (input.string instanceof Map &&
          (() =>
            [...input.string].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "string" === typeof elem[1] &&
                1 <= elem[1].length,
            ))())) &&
      (undefined === input.bytes ||
        (input.bytes instanceof Map &&
          (() =>
            [...input.bytes].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                elem[1] instanceof Uint8Array,
            ))())) &&
      (undefined === input.objects ||
        (input.objects instanceof Map &&
          (() =>
            [...input.objects].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "object" === typeof elem[1] &&
                null !== elem[1] &&
                false === Array.isArray(elem[1]) &&
                $io0(elem[1]),
            ))()));
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input)
    );
  })(input),
);
