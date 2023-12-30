import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createIs_UltimateUnion = _test_is(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input: any): input is UltimateUnion => {
  const $io0 = (input: any): boolean =>
    Array.isArray(input.schemas) &&
    input.schemas.every(
      (elem: any) =>
        "object" === typeof elem &&
        null !== elem &&
        false === Array.isArray(elem) &&
        $iu0(elem),
    ) &&
    "object" === typeof input.components &&
    null !== input.components &&
    false === Array.isArray(input.components) &&
    $io19(input.components) &&
    ("swagger" === input.purpose || "ajv" === input.purpose);
  const $io1 = (input: any): boolean =>
    Array.isArray(input["enum"]) &&
    input["enum"].every((elem: any) => "boolean" === typeof elem) &&
    "boolean" === input.type &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input["default"] || "boolean" === typeof input["default"]) &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io2 = (input: any): boolean =>
    "string" === typeof input.name &&
    (undefined === input.text ||
      (Array.isArray(input.text) &&
        input.text.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io3(elem),
        )));
  const $io3 = (input: any): boolean =>
    "string" === typeof input.text && "string" === typeof input.kind;
  const $io4 = (input: any): boolean =>
    Array.isArray(input["enum"]) &&
    input["enum"].every(
      (elem: any) => "number" === typeof elem && Number.isFinite(elem),
    ) &&
    "number" === input.type &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input["default"] ||
      ("number" === typeof input["default"] &&
        Number.isFinite(input["default"]))) &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io5 = (input: any): boolean =>
    Array.isArray(input["enum"]) &&
    input["enum"].every((elem: any) => "string" === typeof elem) &&
    "string" === input.type &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input["default"] || "string" === typeof input["default"]) &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io6 = (input: any): boolean =>
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] || "boolean" === typeof input["default"]) &&
    "boolean" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io7 = (input: any): boolean =>
    ("string" === input.target ||
      "number" === input.target ||
      "bigint" === input.target ||
      "boolean" === input.target ||
      "array" === input.target) &&
    "string" === typeof input.name &&
    "string" === typeof input.kind &&
    null !== input.exclusive &&
    undefined !== input.exclusive &&
    ("boolean" === typeof input.exclusive ||
      (Array.isArray(input.exclusive) &&
        input.exclusive.every((elem: any) => "string" === typeof elem))) &&
    true &&
    (undefined === input.validate || "string" === typeof input.validate);
  const $io8 = (input: any): boolean =>
    (undefined === input.minimum ||
      ("number" === typeof input.minimum &&
        Math.floor(input.minimum) === input.minimum &&
        -2147483648 <= input.minimum &&
        input.minimum <= 2147483647)) &&
    (undefined === input.maximum ||
      ("number" === typeof input.maximum &&
        Math.floor(input.maximum) === input.maximum &&
        -2147483648 <= input.maximum &&
        input.maximum <= 2147483647)) &&
    (undefined === input.exclusiveMinimum ||
      "boolean" === typeof input.exclusiveMinimum) &&
    (undefined === input.exclusiveMaximum ||
      "boolean" === typeof input.exclusiveMaximum) &&
    (undefined === input.multipleOf ||
      ("number" === typeof input.multipleOf &&
        Math.floor(input.multipleOf) === input.multipleOf &&
        -2147483648 <= input.multipleOf &&
        input.multipleOf <= 2147483647)) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] ||
      ("number" === typeof input["default"] &&
        Number.isFinite(input["default"]))) &&
    "integer" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io9 = (input: any): boolean =>
    (undefined === input.minimum ||
      ("number" === typeof input.minimum && Number.isFinite(input.minimum))) &&
    (undefined === input.maximum ||
      ("number" === typeof input.maximum && Number.isFinite(input.maximum))) &&
    (undefined === input.exclusiveMinimum ||
      "boolean" === typeof input.exclusiveMinimum) &&
    (undefined === input.exclusiveMaximum ||
      "boolean" === typeof input.exclusiveMaximum) &&
    (undefined === input.multipleOf ||
      ("number" === typeof input.multipleOf &&
        Number.isFinite(input.multipleOf))) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] ||
      ("number" === typeof input["default"] &&
        Number.isFinite(input["default"]))) &&
    "number" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io10 = (input: any): boolean =>
    (undefined === input.minLength ||
      ("number" === typeof input.minLength &&
        Math.floor(input.minLength) === input.minLength &&
        0 <= input.minLength &&
        input.minLength <= 4294967295)) &&
    (undefined === input.maxLength ||
      ("number" === typeof input.maxLength &&
        Math.floor(input.maxLength) === input.maxLength &&
        0 <= input.maxLength &&
        input.maxLength <= 4294967295)) &&
    (undefined === input.pattern || "string" === typeof input.pattern) &&
    (undefined === input.format || "string" === typeof input.format) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] || "string" === typeof input["default"]) &&
    "string" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io11 = (input: any): boolean =>
    "object" === typeof input.items &&
    null !== input.items &&
    false === Array.isArray(input.items) &&
    $iu0(input.items) &&
    (undefined === input.minItems ||
      ("number" === typeof input.minItems &&
        Math.floor(input.minItems) === input.minItems &&
        0 <= input.minItems &&
        input.minItems <= 4294967295)) &&
    (undefined === input.maxItems ||
      ("number" === typeof input.maxItems &&
        Math.floor(input.maxItems) === input.maxItems &&
        0 <= input.maxItems &&
        input.maxItems <= 4294967295)) &&
    (undefined === input["x-typia-tuple"] ||
      ("object" === typeof input["x-typia-tuple"] &&
        null !== input["x-typia-tuple"] &&
        $io12(input["x-typia-tuple"]))) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    "array" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io12 = (input: any): boolean =>
    Array.isArray(input.items) &&
    input.items.every(
      (elem: any) =>
        "object" === typeof elem &&
        null !== elem &&
        false === Array.isArray(elem) &&
        $iu0(elem),
    ) &&
    "number" === typeof input.minItems &&
    Math.floor(input.minItems) === input.minItems &&
    0 <= input.minItems &&
    input.minItems <= 4294967295 &&
    (undefined === input.maxItems ||
      ("number" === typeof input.maxItems &&
        Math.floor(input.maxItems) === input.maxItems &&
        0 <= input.maxItems &&
        input.maxItems <= 4294967295)) &&
    "array" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io13 = (input: any): boolean =>
    "object" === typeof input.properties &&
    null !== input.properties &&
    false === Array.isArray(input.properties) &&
    $io14(input.properties) &&
    (undefined === input.required ||
      (Array.isArray(input.required) &&
        input.required.every((elem: any) => "string" === typeof elem))) &&
    (undefined === input.patternProperties ||
      ("object" === typeof input.patternProperties &&
        null !== input.patternProperties &&
        false === Array.isArray(input.patternProperties) &&
        $io14(input.patternProperties))) &&
    (undefined === input.additionalProperties ||
      ("object" === typeof input.additionalProperties &&
        null !== input.additionalProperties &&
        false === Array.isArray(input.additionalProperties) &&
        $iu0(input.additionalProperties))) &&
    (undefined === input["x-typia-patternProperties"] ||
      ("object" === typeof input["x-typia-patternProperties"] &&
        null !== input["x-typia-patternProperties"] &&
        false === Array.isArray(input["x-typia-patternProperties"]) &&
        $io14(input["x-typia-patternProperties"]))) &&
    (undefined === input["x-typia-additionalProperties"] ||
      ("object" === typeof input["x-typia-additionalProperties"] &&
        null !== input["x-typia-additionalProperties"] &&
        false === Array.isArray(input["x-typia-additionalProperties"]) &&
        $iu0(input["x-typia-additionalProperties"]))) &&
    "object" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io14 = (input: any): boolean =>
    Object.keys(input).every((key: any) => {
      const value = input[key];
      if (undefined === value) return true;
      if (true)
        return (
          "object" === typeof value &&
          null !== value &&
          false === Array.isArray(value) &&
          $iu0(value)
        );
      return true;
    });
  const $io15 = (input: any): boolean =>
    "string" === typeof input.$ref &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io16 = (input: any): boolean =>
    "null" === input.type &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io17 = (input: any): boolean =>
    Array.isArray(input.oneOf) &&
    input.oneOf.every(
      (elem: any) =>
        "object" === typeof elem &&
        null !== elem &&
        false === Array.isArray(elem) &&
        $iu0(elem),
    ) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io18 = (input: any): boolean =>
    null !== input.type &&
    undefined === input.type &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]);
  const $io19 = (input: any): boolean =>
    undefined === input.schemas ||
    ("object" === typeof input.schemas &&
      null !== input.schemas &&
      false === Array.isArray(input.schemas) &&
      $io20(input.schemas));
  const $io20 = (input: any): boolean =>
    Object.keys(input).every((key: any) => {
      const value = input[key];
      if (undefined === value) return true;
      if (true)
        return (
          "object" === typeof value &&
          null !== value &&
          false === Array.isArray(value) &&
          $iu1(value)
        );
      return true;
    });
  const $io21 = (input: any): boolean =>
    Array.isArray(input["enum"]) &&
    input["enum"].every((elem: any) => "boolean" === typeof elem) &&
    "boolean" === input.type &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input["default"] || "boolean" === typeof input["default"]) &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io22 = (input: any): boolean =>
    Array.isArray(input["enum"]) &&
    input["enum"].every(
      (elem: any) => "number" === typeof elem && Number.isFinite(elem),
    ) &&
    "number" === input.type &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input["default"] ||
      ("number" === typeof input["default"] &&
        Number.isFinite(input["default"]))) &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io23 = (input: any): boolean =>
    Array.isArray(input["enum"]) &&
    input["enum"].every((elem: any) => "string" === typeof elem) &&
    "string" === input.type &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input["default"] || "string" === typeof input["default"]) &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io24 = (input: any): boolean =>
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] || "boolean" === typeof input["default"]) &&
    "boolean" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io25 = (input: any): boolean =>
    (undefined === input.minimum ||
      ("number" === typeof input.minimum &&
        Math.floor(input.minimum) === input.minimum &&
        -2147483648 <= input.minimum &&
        input.minimum <= 2147483647)) &&
    (undefined === input.maximum ||
      ("number" === typeof input.maximum &&
        Math.floor(input.maximum) === input.maximum &&
        -2147483648 <= input.maximum &&
        input.maximum <= 2147483647)) &&
    (undefined === input.exclusiveMinimum ||
      "boolean" === typeof input.exclusiveMinimum) &&
    (undefined === input.exclusiveMaximum ||
      "boolean" === typeof input.exclusiveMaximum) &&
    (undefined === input.multipleOf ||
      ("number" === typeof input.multipleOf &&
        Math.floor(input.multipleOf) === input.multipleOf &&
        -2147483648 <= input.multipleOf &&
        input.multipleOf <= 2147483647)) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] ||
      ("number" === typeof input["default"] &&
        Number.isFinite(input["default"]))) &&
    "integer" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io26 = (input: any): boolean =>
    (undefined === input.minimum ||
      ("number" === typeof input.minimum && Number.isFinite(input.minimum))) &&
    (undefined === input.maximum ||
      ("number" === typeof input.maximum && Number.isFinite(input.maximum))) &&
    (undefined === input.exclusiveMinimum ||
      "boolean" === typeof input.exclusiveMinimum) &&
    (undefined === input.exclusiveMaximum ||
      "boolean" === typeof input.exclusiveMaximum) &&
    (undefined === input.multipleOf ||
      ("number" === typeof input.multipleOf &&
        Number.isFinite(input.multipleOf))) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] ||
      ("number" === typeof input["default"] &&
        Number.isFinite(input["default"]))) &&
    "number" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io27 = (input: any): boolean =>
    (undefined === input.minLength ||
      ("number" === typeof input.minLength &&
        Math.floor(input.minLength) === input.minLength &&
        0 <= input.minLength &&
        input.minLength <= 4294967295)) &&
    (undefined === input.maxLength ||
      ("number" === typeof input.maxLength &&
        Math.floor(input.maxLength) === input.maxLength &&
        0 <= input.maxLength &&
        input.maxLength <= 4294967295)) &&
    (undefined === input.pattern || "string" === typeof input.pattern) &&
    (undefined === input.format || "string" === typeof input.format) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    (undefined === input["default"] || "string" === typeof input["default"]) &&
    "string" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io28 = (input: any): boolean =>
    "object" === typeof input.items &&
    null !== input.items &&
    false === Array.isArray(input.items) &&
    $iu0(input.items) &&
    (undefined === input.minItems ||
      ("number" === typeof input.minItems &&
        Math.floor(input.minItems) === input.minItems &&
        0 <= input.minItems &&
        input.minItems <= 4294967295)) &&
    (undefined === input.maxItems ||
      ("number" === typeof input.maxItems &&
        Math.floor(input.maxItems) === input.maxItems &&
        0 <= input.maxItems &&
        input.maxItems <= 4294967295)) &&
    (undefined === input["x-typia-tuple"] ||
      ("object" === typeof input["x-typia-tuple"] &&
        null !== input["x-typia-tuple"] &&
        $io12(input["x-typia-tuple"]))) &&
    (undefined === input["x-typia-typeTags"] ||
      (Array.isArray(input["x-typia-typeTags"]) &&
        input["x-typia-typeTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ))) &&
    "array" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io29 = (input: any): boolean =>
    Array.isArray(input.items) &&
    input.items.every(
      (elem: any) =>
        "object" === typeof elem &&
        null !== elem &&
        false === Array.isArray(elem) &&
        $iu0(elem),
    ) &&
    "number" === typeof input.minItems &&
    Math.floor(input.minItems) === input.minItems &&
    0 <= input.minItems &&
    input.minItems <= 4294967295 &&
    (undefined === input.maxItems ||
      ("number" === typeof input.maxItems &&
        Math.floor(input.maxItems) === input.maxItems &&
        0 <= input.maxItems &&
        input.maxItems <= 4294967295)) &&
    "array" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io30 = (input: any): boolean =>
    "object" === typeof input.properties &&
    null !== input.properties &&
    false === Array.isArray(input.properties) &&
    $io14(input.properties) &&
    (undefined === input.required ||
      (Array.isArray(input.required) &&
        input.required.every((elem: any) => "string" === typeof elem))) &&
    (undefined === input.patternProperties ||
      ("object" === typeof input.patternProperties &&
        null !== input.patternProperties &&
        false === Array.isArray(input.patternProperties) &&
        $io14(input.patternProperties))) &&
    (undefined === input.additionalProperties ||
      ("object" === typeof input.additionalProperties &&
        null !== input.additionalProperties &&
        false === Array.isArray(input.additionalProperties) &&
        $iu0(input.additionalProperties))) &&
    (undefined === input["x-typia-patternProperties"] ||
      ("object" === typeof input["x-typia-patternProperties"] &&
        null !== input["x-typia-patternProperties"] &&
        false === Array.isArray(input["x-typia-patternProperties"]) &&
        $io14(input["x-typia-patternProperties"]))) &&
    (undefined === input["x-typia-additionalProperties"] ||
      ("object" === typeof input["x-typia-additionalProperties"] &&
        null !== input["x-typia-additionalProperties"] &&
        false === Array.isArray(input["x-typia-additionalProperties"]) &&
        $iu0(input["x-typia-additionalProperties"]))) &&
    "object" === input.type &&
    (undefined === input.nullable || "boolean" === typeof input.nullable) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io31 = (input: any): boolean =>
    "string" === typeof input.$ref &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io32 = (input: any): boolean =>
    "null" === input.type &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io33 = (input: any): boolean =>
    Array.isArray(input.oneOf) &&
    input.oneOf.every(
      (elem: any) =>
        "object" === typeof elem &&
        null !== elem &&
        false === Array.isArray(elem) &&
        $iu0(elem),
    ) &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $io34 = (input: any): boolean =>
    null !== input.type &&
    undefined === input.type &&
    (undefined === input.deprecated || "boolean" === typeof input.deprecated) &&
    (undefined === input.title || "string" === typeof input.title) &&
    (undefined === input.description ||
      "string" === typeof input.description) &&
    (undefined === input["x-typia-jsDocTags"] ||
      (Array.isArray(input["x-typia-jsDocTags"]) &&
        input["x-typia-jsDocTags"].every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ))) &&
    (undefined === input["x-typia-required"] ||
      "boolean" === typeof input["x-typia-required"]) &&
    (undefined === input["x-typia-optional"] ||
      "boolean" === typeof input["x-typia-optional"]) &&
    (undefined === input["x-typia-rest"] ||
      "boolean" === typeof input["x-typia-rest"]) &&
    (undefined === input.$id || "string" === typeof input.$id) &&
    (undefined === input.$recursiveAnchor ||
      "boolean" === typeof input.$recursiveAnchor);
  const $iu0 = (input: any): any =>
    (() => {
      if ("integer" === input.type) return $io8(input);
      else if (
        "object" === typeof input.items &&
        null !== input.items &&
        false === Array.isArray(input.items) &&
        $iu0(input.items)
      )
        return $io11(input);
      else if (
        Array.isArray(input.items) &&
        input.items.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu0(elem),
        )
      )
        return $io12(input);
      else if ("object" === input.type) return $io13(input);
      else if (undefined !== input.$ref) return $io15(input);
      else if ("null" === input.type) return $io16(input);
      else if (undefined !== input.oneOf) return $io17(input);
      else
        return (() => {
          if ($io5(input)) return $io5(input);
          else if ($io4(input)) return $io4(input);
          else if ($io1(input)) return $io1(input);
          else if ($io6(input)) return $io6(input);
          else if ($io9(input)) return $io9(input);
          else if ($io10(input)) return $io10(input);
          else if ($io18(input)) return $io18(input);
          else return false;
        })();
    })();
  const $iu1 = (input: any): any =>
    (() => {
      if ("integer" === input.type) return $io25(input);
      else if (
        "object" === typeof input.items &&
        null !== input.items &&
        false === Array.isArray(input.items) &&
        $iu0(input.items)
      )
        return $io28(input);
      else if (
        Array.isArray(input.items) &&
        input.items.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu0(elem),
        )
      )
        return $io29(input);
      else if ("object" === input.type) return $io30(input);
      else if (undefined !== input.$ref) return $io31(input);
      else if ("null" === input.type) return $io32(input);
      else if (undefined !== input.oneOf) return $io33(input);
      else
        return (() => {
          if ($io23(input)) return $io23(input);
          else if ($io22(input)) return $io22(input);
          else if ($io21(input)) return $io21(input);
          else if ($io24(input)) return $io24(input);
          else if ($io26(input)) return $io26(input);
          else if ($io27(input)) return $io27(input);
          else if ($io34(input)) return $io34(input);
          else return false;
        })();
    })();
  return (
    Array.isArray(input) &&
    input.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    )
  );
});
