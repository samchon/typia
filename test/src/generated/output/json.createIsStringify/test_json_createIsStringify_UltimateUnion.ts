import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { UltimateUnion } from "../../../structures/UltimateUnion";
export const test_json_createIsStringify_UltimateUnion = _test_json_isStringify(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input: UltimateUnion): string | null => {
  const is = (input: any): input is UltimateUnion => {
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
      $io20(input.components) &&
      ("ajv" === input.purpose || "swagger" === input.purpose) &&
      "boolean" === typeof input.surplus;
    const $io1 = (input: any): boolean =>
      Array.isArray(input["enum"]) &&
      input["enum"].every((elem: any) => "boolean" === typeof elem) &&
      "boolean" === input.type &&
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        ("number" === typeof input["default"] &&
          Number.isFinite(input["default"]))) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      "boolean" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      ("array" === input.target ||
        "bigint" === input.target ||
        "boolean" === input.target ||
        "number" === input.target ||
        "string" === input.target) &&
      "string" === typeof input.name &&
      "string" === typeof input.kind &&
      null !== input.exclusive &&
      undefined !== input.exclusive &&
      ("boolean" === typeof input.exclusive ||
        (Array.isArray(input.exclusive) &&
          input.exclusive.every((elem: any) => "string" === typeof elem))) &&
      true &&
      (undefined === input.validate || "string" === typeof input.validate) &&
      (undefined === input.schema ||
        ("object" === typeof input.schema &&
          null !== input.schema &&
          false === Array.isArray(input.schema) &&
          $io8(input.schema)));
    const $io8 = (input: any): boolean => true;
    const $io9 = (input: any): boolean =>
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.minimum ||
        ("number" === typeof input.minimum &&
          Number.isFinite(input.minimum))) &&
      (undefined === input.maximum ||
        ("number" === typeof input.maximum &&
          Number.isFinite(input.maximum))) &&
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      "string" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
          $io13(input["x-typia-tuple"]))) &&
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      "array" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "object" === typeof input.properties &&
      null !== input.properties &&
      false === Array.isArray(input.properties) &&
      $io15(input.properties) &&
      (undefined === input.required ||
        (Array.isArray(input.required) &&
          input.required.every((elem: any) => "string" === typeof elem))) &&
      (undefined === input.patternProperties ||
        ("object" === typeof input.patternProperties &&
          null !== input.patternProperties &&
          false === Array.isArray(input.patternProperties) &&
          $io15(input.patternProperties))) &&
      (undefined === input.additionalProperties ||
        ("object" === typeof input.additionalProperties &&
          null !== input.additionalProperties &&
          false === Array.isArray(input.additionalProperties) &&
          $iu0(input.additionalProperties))) &&
      (undefined === input["x-typia-patternProperties"] ||
        ("object" === typeof input["x-typia-patternProperties"] &&
          null !== input["x-typia-patternProperties"] &&
          false === Array.isArray(input["x-typia-patternProperties"]) &&
          $io15(input["x-typia-patternProperties"]))) &&
      (undefined === input["x-typia-additionalProperties"] ||
        ("object" === typeof input["x-typia-additionalProperties"] &&
          null !== input["x-typia-additionalProperties"] &&
          false === Array.isArray(input["x-typia-additionalProperties"]) &&
          $iu0(input["x-typia-additionalProperties"]))) &&
      "object" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
    const $io15 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return (
          "object" === typeof value &&
          null !== value &&
          false === Array.isArray(value) &&
          $iu0(value)
        );
      });
    const $io16 = (input: any): boolean =>
      "string" === typeof input.$ref &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "null" === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      Array.isArray(input.oneOf) &&
      input.oneOf.every(
        (elem: any) =>
          "object" === typeof elem &&
          null !== elem &&
          false === Array.isArray(elem) &&
          $iu0(elem),
      ) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      null !== input.type &&
      undefined === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
    const $io20 = (input: any): boolean =>
      undefined === input.schemas ||
      ("object" === typeof input.schemas &&
        null !== input.schemas &&
        false === Array.isArray(input.schemas) &&
        $io21(input.schemas));
    const $io21 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return (
          "object" === typeof value &&
          null !== value &&
          false === Array.isArray(value) &&
          $iu1(value)
        );
      });
    const $io22 = (input: any): boolean =>
      Array.isArray(input["enum"]) &&
      input["enum"].every((elem: any) => "boolean" === typeof elem) &&
      "boolean" === input.type &&
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      input["enum"].every(
        (elem: any) => "number" === typeof elem && Number.isFinite(elem),
      ) &&
      "number" === input.type &&
      (undefined === input["default"] ||
        ("number" === typeof input["default"] &&
          Number.isFinite(input["default"]))) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      Array.isArray(input["enum"]) &&
      input["enum"].every((elem: any) => "string" === typeof elem) &&
      "string" === input.type &&
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      "boolean" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.minimum ||
        ("number" === typeof input.minimum &&
          Number.isFinite(input.minimum))) &&
      (undefined === input.maximum ||
        ("number" === typeof input.maximum &&
          Number.isFinite(input.maximum))) &&
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      "string" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
          $io13(input["x-typia-tuple"]))) &&
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      "array" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "object" === typeof input.properties &&
      null !== input.properties &&
      false === Array.isArray(input.properties) &&
      $io15(input.properties) &&
      (undefined === input.required ||
        (Array.isArray(input.required) &&
          input.required.every((elem: any) => "string" === typeof elem))) &&
      (undefined === input.patternProperties ||
        ("object" === typeof input.patternProperties &&
          null !== input.patternProperties &&
          false === Array.isArray(input.patternProperties) &&
          $io15(input.patternProperties))) &&
      (undefined === input.additionalProperties ||
        ("object" === typeof input.additionalProperties &&
          null !== input.additionalProperties &&
          false === Array.isArray(input.additionalProperties) &&
          $iu0(input.additionalProperties))) &&
      (undefined === input["x-typia-patternProperties"] ||
        ("object" === typeof input["x-typia-patternProperties"] &&
          null !== input["x-typia-patternProperties"] &&
          false === Array.isArray(input["x-typia-patternProperties"]) &&
          $io15(input["x-typia-patternProperties"]))) &&
      (undefined === input["x-typia-additionalProperties"] ||
        ("object" === typeof input["x-typia-additionalProperties"] &&
          null !== input["x-typia-additionalProperties"] &&
          false === Array.isArray(input["x-typia-additionalProperties"]) &&
          $iu0(input["x-typia-additionalProperties"]))) &&
      "object" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "string" === typeof input.$ref &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "null" === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      Array.isArray(input.oneOf) &&
      input.oneOf.every(
        (elem: any) =>
          "object" === typeof elem &&
          null !== elem &&
          false === Array.isArray(elem) &&
          $iu0(elem),
      ) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
    const $io35 = (input: any): boolean =>
      null !== input.type &&
      undefined === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
        if ("integer" === input.type) return $io9(input);
        else if (
          "object" === typeof input.items &&
          null !== input.items &&
          false === Array.isArray(input.items) &&
          $iu0(input.items)
        )
          return $io12(input);
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
          return $io13(input);
        else if ("object" === input.type) return $io14(input);
        else if (undefined !== input.$ref) return $io16(input);
        else if ("null" === input.type) return $io17(input);
        else if (undefined !== input.oneOf) return $io18(input);
        else
          return (() => {
            if ($io5(input)) return $io5(input);
            if ($io4(input)) return $io4(input);
            if ($io1(input)) return $io1(input);
            if ($io6(input)) return $io6(input);
            if ($io10(input)) return $io10(input);
            if ($io11(input)) return $io11(input);
            if ($io19(input)) return $io19(input);
            return false;
          })();
      })();
    const $iu1 = (input: any): any =>
      (() => {
        if ("integer" === input.type) return $io26(input);
        else if (
          "object" === typeof input.items &&
          null !== input.items &&
          false === Array.isArray(input.items) &&
          $iu0(input.items)
        )
          return $io29(input);
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
          return $io30(input);
        else if ("object" === input.type) return $io31(input);
        else if (undefined !== input.$ref) return $io32(input);
        else if ("null" === input.type) return $io33(input);
        else if (undefined !== input.oneOf) return $io34(input);
        else
          return (() => {
            if ($io24(input)) return $io24(input);
            if ($io23(input)) return $io23(input);
            if ($io22(input)) return $io22(input);
            if ($io25(input)) return $io25(input);
            if ($io27(input)) return $io27(input);
            if ($io28(input)) return $io28(input);
            if ($io35(input)) return $io35(input);
            return false;
          })();
      })();
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      )
    );
  };
  const stringify = (input: UltimateUnion): string => {
    const $io1 = (input: any): boolean =>
      Array.isArray(input["enum"]) &&
      input["enum"].every((elem: any) => "boolean" === typeof elem) &&
      "boolean" === input.type &&
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      input["enum"].every((elem: any) => "number" === typeof elem) &&
      "number" === input.type &&
      (undefined === input["default"] ||
        "number" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      "boolean" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      ("array" === input.target ||
        "bigint" === input.target ||
        "boolean" === input.target ||
        "number" === input.target ||
        "string" === input.target) &&
      "string" === typeof input.name &&
      "string" === typeof input.kind &&
      null !== input.exclusive &&
      undefined !== input.exclusive &&
      ("boolean" === typeof input.exclusive ||
        (Array.isArray(input.exclusive) &&
          input.exclusive.every((elem: any) => "string" === typeof elem))) &&
      true &&
      (undefined === input.validate || "string" === typeof input.validate) &&
      (undefined === input.schema ||
        ("object" === typeof input.schema &&
          null !== input.schema &&
          false === Array.isArray(input.schema) &&
          $io8(input.schema)));
    const $io8 = (input: any): boolean => true;
    const $io9 = (input: any): boolean =>
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
        "number" === typeof input["default"]) &&
      "integer" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.minimum || "number" === typeof input.minimum) &&
      (undefined === input.maximum || "number" === typeof input.maximum) &&
      (undefined === input.exclusiveMinimum ||
        "boolean" === typeof input.exclusiveMinimum) &&
      (undefined === input.exclusiveMaximum ||
        "boolean" === typeof input.exclusiveMaximum) &&
      (undefined === input.multipleOf ||
        "number" === typeof input.multipleOf) &&
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      (undefined === input["default"] ||
        "number" === typeof input["default"]) &&
      "number" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      "string" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
          $io13(input["x-typia-tuple"]))) &&
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      "array" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "object" === typeof input.properties &&
      null !== input.properties &&
      false === Array.isArray(input.properties) &&
      $io15(input.properties) &&
      (undefined === input.required ||
        (Array.isArray(input.required) &&
          input.required.every((elem: any) => "string" === typeof elem))) &&
      (undefined === input.patternProperties ||
        ("object" === typeof input.patternProperties &&
          null !== input.patternProperties &&
          false === Array.isArray(input.patternProperties) &&
          $io15(input.patternProperties))) &&
      (undefined === input.additionalProperties ||
        ("object" === typeof input.additionalProperties &&
          null !== input.additionalProperties &&
          false === Array.isArray(input.additionalProperties) &&
          $iu0(input.additionalProperties))) &&
      (undefined === input["x-typia-patternProperties"] ||
        ("object" === typeof input["x-typia-patternProperties"] &&
          null !== input["x-typia-patternProperties"] &&
          false === Array.isArray(input["x-typia-patternProperties"]) &&
          $io15(input["x-typia-patternProperties"]))) &&
      (undefined === input["x-typia-additionalProperties"] ||
        ("object" === typeof input["x-typia-additionalProperties"] &&
          null !== input["x-typia-additionalProperties"] &&
          false === Array.isArray(input["x-typia-additionalProperties"]) &&
          $iu0(input["x-typia-additionalProperties"]))) &&
      "object" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
    const $io15 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return (
          "object" === typeof value &&
          null !== value &&
          false === Array.isArray(value) &&
          $iu0(value)
        );
      });
    const $io16 = (input: any): boolean =>
      "string" === typeof input.$ref &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "null" === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      Array.isArray(input.oneOf) &&
      input.oneOf.every(
        (elem: any) =>
          "object" === typeof elem &&
          null !== elem &&
          false === Array.isArray(elem) &&
          $iu0(elem),
      ) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      null !== input.type &&
      undefined === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
    const $io20 = (input: any): boolean =>
      undefined === input.schemas ||
      ("object" === typeof input.schemas &&
        null !== input.schemas &&
        false === Array.isArray(input.schemas) &&
        $io21(input.schemas));
    const $io21 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return (
          "object" === typeof value &&
          null !== value &&
          false === Array.isArray(value) &&
          $iu1(value)
        );
      });
    const $io22 = (input: any): boolean =>
      Array.isArray(input["enum"]) &&
      input["enum"].every((elem: any) => "boolean" === typeof elem) &&
      "boolean" === input.type &&
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      input["enum"].every((elem: any) => "number" === typeof elem) &&
      "number" === input.type &&
      (undefined === input["default"] ||
        "number" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      Array.isArray(input["enum"]) &&
      input["enum"].every((elem: any) => "string" === typeof elem) &&
      "string" === input.type &&
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      (undefined === input.title || "string" === typeof input.title) &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      (undefined === input["default"] ||
        "boolean" === typeof input["default"]) &&
      "boolean" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
        "number" === typeof input["default"]) &&
      "integer" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.minimum || "number" === typeof input.minimum) &&
      (undefined === input.maximum || "number" === typeof input.maximum) &&
      (undefined === input.exclusiveMinimum ||
        "boolean" === typeof input.exclusiveMinimum) &&
      (undefined === input.exclusiveMaximum ||
        "boolean" === typeof input.exclusiveMaximum) &&
      (undefined === input.multipleOf ||
        "number" === typeof input.multipleOf) &&
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      (undefined === input["default"] ||
        "number" === typeof input["default"]) &&
      "number" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input["default"] ||
        "string" === typeof input["default"]) &&
      "string" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
          $io13(input["x-typia-tuple"]))) &&
      (undefined === input["x-typia-typeTags"] ||
        (Array.isArray(input["x-typia-typeTags"]) &&
          input["x-typia-typeTags"].every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ))) &&
      "array" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "object" === typeof input.properties &&
      null !== input.properties &&
      false === Array.isArray(input.properties) &&
      $io15(input.properties) &&
      (undefined === input.required ||
        (Array.isArray(input.required) &&
          input.required.every((elem: any) => "string" === typeof elem))) &&
      (undefined === input.patternProperties ||
        ("object" === typeof input.patternProperties &&
          null !== input.patternProperties &&
          false === Array.isArray(input.patternProperties) &&
          $io15(input.patternProperties))) &&
      (undefined === input.additionalProperties ||
        ("object" === typeof input.additionalProperties &&
          null !== input.additionalProperties &&
          false === Array.isArray(input.additionalProperties) &&
          $iu0(input.additionalProperties))) &&
      (undefined === input["x-typia-patternProperties"] ||
        ("object" === typeof input["x-typia-patternProperties"] &&
          null !== input["x-typia-patternProperties"] &&
          false === Array.isArray(input["x-typia-patternProperties"]) &&
          $io15(input["x-typia-patternProperties"]))) &&
      (undefined === input["x-typia-additionalProperties"] ||
        ("object" === typeof input["x-typia-additionalProperties"] &&
          null !== input["x-typia-additionalProperties"] &&
          false === Array.isArray(input["x-typia-additionalProperties"]) &&
          $iu0(input["x-typia-additionalProperties"]))) &&
      "object" === input.type &&
      (undefined === input.nullable || "boolean" === typeof input.nullable) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "string" === typeof input.$ref &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      "null" === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
      Array.isArray(input.oneOf) &&
      input.oneOf.every(
        (elem: any) =>
          "object" === typeof elem &&
          null !== elem &&
          false === Array.isArray(elem) &&
          $iu0(elem),
      ) &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
    const $io35 = (input: any): boolean =>
      null !== input.type &&
      undefined === input.type &&
      (undefined === input.deprecated ||
        "boolean" === typeof input.deprecated) &&
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
        if ("integer" === input.type) return $io9(input);
        else if (
          "object" === typeof input.items &&
          null !== input.items &&
          false === Array.isArray(input.items) &&
          $iu0(input.items)
        )
          return $io12(input);
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
          return $io13(input);
        else if ("object" === input.type) return $io14(input);
        else if (undefined !== input.$ref) return $io16(input);
        else if ("null" === input.type) return $io17(input);
        else if (undefined !== input.oneOf) return $io18(input);
        else
          return (
            $io5(input) ||
            $io4(input) ||
            $io1(input) ||
            $io6(input) ||
            $io10(input) ||
            $io11(input) ||
            $io19(input)
          );
      })();
    const $iu1 = (input: any): any =>
      (() => {
        if ("integer" === input.type) return $io26(input);
        else if (
          "object" === typeof input.items &&
          null !== input.items &&
          false === Array.isArray(input.items) &&
          $iu0(input.items)
        )
          return $io29(input);
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
          return $io30(input);
        else if ("object" === input.type) return $io31(input);
        else if (undefined !== input.$ref) return $io32(input);
        else if ("null" === input.type) return $io33(input);
        else if (undefined !== input.oneOf) return $io34(input);
        else
          return (
            $io24(input) ||
            $io23(input) ||
            $io22(input) ||
            $io25(input) ||
            $io27(input) ||
            $io28(input) ||
            $io35(input)
          );
      })();
    const $string = (typia.json.createIsStringify as any).string;
    const $throws = (typia.json.createIsStringify as any).throws;
    const $number = (typia.json.createIsStringify as any).number;
    const $tail = (typia.json.createIsStringify as any).tail;
    const $so0 = (input: any): any =>
      `{"schemas":${`[${input.schemas.map((elem: any) => $su0(elem)).join(",")}]`},"components":${$so20(input.components)},"purpose":${(() => {
        if ("string" === typeof input.purpose) return $string(input.purpose);
        if ("string" === typeof input.purpose) return '"' + input.purpose + '"';
        $throws({
          expected: '("ajv" | "swagger")',
          value: input.purpose,
        });
      })()},"surplus":${input.surplus}}`;
    const $so1 = (input: any): any =>
      `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? input["default"] : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"enum":${`[${input["enum"].map((elem: any) => elem).join(",")}]`},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"boolean"',
          value: input.type,
        });
      })()}}`;
    const $so2 = (input: any): any =>
      `{${undefined === input.text ? "" : `"text":${undefined !== input.text ? `[${input.text.map((elem: any) => `{"text":${$string((elem as any).text)},"kind":${$string((elem as any).kind)}}`).join(",")}]` : undefined},`}"name":${$string(input.name)}}`;
    const $so4 = (input: any): any =>
      `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"enum":${`[${input["enum"].map((elem: any) => $number(elem)).join(",")}]`},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"number"',
          value: input.type,
        });
      })()}}`;
    const $so5 = (input: any): any =>
      `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"enum":${`[${input["enum"].map((elem: any) => $string(elem)).join(",")}]`},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"string"',
          value: input.type,
        });
      })()}}`;
    const $so6 = (input: any): any =>
      `{${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? input["default"] : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"boolean"',
          value: input.type,
        });
      })()}}`;
    const $so7 = (input: any): any =>
      `{${undefined === input.value || "function" === typeof input.value ? "" : `"value":${undefined !== input.value ? JSON.stringify(input.value) : undefined},`}${undefined === input.validate ? "" : `"validate":${undefined !== input.validate ? $string(input.validate) : undefined},`}${undefined === input.schema ? "" : `"schema":${undefined !== input.schema ? "{}" : undefined},`}"target":${(() => {
        if ("string" === typeof input.target) return $string(input.target);
        if ("string" === typeof input.target) return '"' + input.target + '"';
        $throws({
          expected: '("array" | "bigint" | "boolean" | "number" | "string")',
          value: input.target,
        });
      })()},"name":${$string(input.name)},"kind":${$string(input.kind)},"exclusive":${(() => {
        if ("boolean" === typeof input.exclusive) return input.exclusive;
        if (Array.isArray(input.exclusive))
          return `[${input.exclusive.map((elem: any) => $string(elem)).join(",")}]`;
        $throws({
          expected: "(Array<string> | boolean)",
          value: input.exclusive,
        });
      })()}}`;
    const $so9 = (input: any): any =>
      `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"integer"',
          value: input.type,
        });
      })()}}`;
    const $so10 = (input: any): any =>
      `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"number"',
          value: input.type,
        });
      })()}}`;
    const $so11 = (input: any): any =>
      `{${undefined === input.minLength ? "" : `"minLength":${undefined !== input.minLength ? $number(input.minLength) : undefined},`}${undefined === input.maxLength ? "" : `"maxLength":${undefined !== input.maxLength ? $number(input.maxLength) : undefined},`}${undefined === input.pattern ? "" : `"pattern":${undefined !== input.pattern ? $string(input.pattern) : undefined},`}${undefined === input.format ? "" : `"format":${undefined !== input.format ? $string(input.format) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"string"',
          value: input.type,
        });
      })()}}`;
    const $so12 = (input: any): any =>
      `{${undefined === input.minItems ? "" : `"minItems":${undefined !== input.minItems ? $number(input.minItems) : undefined},`}${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input["x-typia-tuple"] ? "" : `"x-typia-tuple":${undefined !== input["x-typia-tuple"] ? $so13(input["x-typia-tuple"]) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"items":${$su0(input.items)},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"array"',
          value: input.type,
        });
      })()}}`;
    const $so13 = (input: any): any =>
      `{${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"items":${`[${input.items.map((elem: any) => $su0(elem)).join(",")}]`},"minItems":${$number(input.minItems)},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"array"',
          value: input.type,
        });
      })()}}`;
    const $so14 = (input: any): any =>
      `{${undefined === input.required ? "" : `"required":${undefined !== input.required ? `[${input.required.map((elem: any) => $string(elem)).join(",")}]` : undefined},`}${undefined === input.patternProperties ? "" : `"patternProperties":${undefined !== input.patternProperties ? $so15(input.patternProperties) : undefined},`}${undefined === input.additionalProperties ? "" : `"additionalProperties":${undefined !== input.additionalProperties ? $su0(input.additionalProperties) : undefined},`}${undefined === input["x-typia-patternProperties"] ? "" : `"x-typia-patternProperties":${undefined !== input["x-typia-patternProperties"] ? $so15(input["x-typia-patternProperties"]) : undefined},`}${undefined === input["x-typia-additionalProperties"] ? "" : `"x-typia-additionalProperties":${undefined !== input["x-typia-additionalProperties"] ? $su0(input["x-typia-additionalProperties"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"properties":${$so15(input.properties)},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"object"',
          value: input.type,
        });
      })()}}`;
    const $so15 = (input: any): any =>
      `{${Object.entries(input)
        .map(([key, value]: [string, any]) => {
          if (undefined === value) return "";
          return `${JSON.stringify(key)}:${$su0(value)}`;
        })
        .filter((str: any) => "" !== str)
        .join(",")}}`;
    const $so16 = (input: any): any =>
      `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"$ref":${$string(input.$ref)}}`;
    const $so17 = (input: any): any =>
      `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"null"',
          value: input.type,
        });
      })()}}`;
    const $so18 = (input: any): any =>
      `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"oneOf":${`[${input.oneOf.map((elem: any) => $su0(elem)).join(",")}]`}}`;
    const $so19 = (input: any): any =>
      `{${$tail(`${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined}`}`)}}`;
    const $so20 = (input: any): any =>
      `{${$tail(`${undefined === input.schemas ? "" : `"schemas":${undefined !== input.schemas ? $so21(input.schemas) : undefined}`}`)}}`;
    const $so21 = (input: any): any =>
      `{${Object.entries(input)
        .map(([key, value]: [string, any]) => {
          if (undefined === value) return "";
          return `${JSON.stringify(key)}:${$su1(value)}`;
        })
        .filter((str: any) => "" !== str)
        .join(",")}}`;
    const $so22 = (input: any): any =>
      `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? input["default"] : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"enum":${`[${input["enum"].map((elem: any) => elem).join(",")}]`},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"boolean"',
          value: input.type,
        });
      })()}}`;
    const $so23 = (input: any): any =>
      `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"enum":${`[${input["enum"].map((elem: any) => $number(elem)).join(",")}]`},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"number"',
          value: input.type,
        });
      })()}}`;
    const $so24 = (input: any): any =>
      `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"enum":${`[${input["enum"].map((elem: any) => $string(elem)).join(",")}]`},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"string"',
          value: input.type,
        });
      })()}}`;
    const $so25 = (input: any): any =>
      `{${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? input["default"] : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"boolean"',
          value: input.type,
        });
      })()}}`;
    const $so26 = (input: any): any =>
      `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"integer"',
          value: input.type,
        });
      })()}}`;
    const $so27 = (input: any): any =>
      `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"number"',
          value: input.type,
        });
      })()}}`;
    const $so28 = (input: any): any =>
      `{${undefined === input.minLength ? "" : `"minLength":${undefined !== input.minLength ? $number(input.minLength) : undefined},`}${undefined === input.maxLength ? "" : `"maxLength":${undefined !== input.maxLength ? $number(input.maxLength) : undefined},`}${undefined === input.pattern ? "" : `"pattern":${undefined !== input.pattern ? $string(input.pattern) : undefined},`}${undefined === input.format ? "" : `"format":${undefined !== input.format ? $string(input.format) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"string"',
          value: input.type,
        });
      })()}}`;
    const $so29 = (input: any): any =>
      `{${undefined === input.minItems ? "" : `"minItems":${undefined !== input.minItems ? $number(input.minItems) : undefined},`}${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input["x-typia-tuple"] ? "" : `"x-typia-tuple":${undefined !== input["x-typia-tuple"] ? $so13(input["x-typia-tuple"]) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"items":${$su0(input.items)},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"array"',
          value: input.type,
        });
      })()}}`;
    const $so30 = (input: any): any =>
      `{${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"items":${`[${input.items.map((elem: any) => $su0(elem)).join(",")}]`},"minItems":${$number(input.minItems)},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"array"',
          value: input.type,
        });
      })()}}`;
    const $so31 = (input: any): any =>
      `{${undefined === input.required ? "" : `"required":${undefined !== input.required ? `[${input.required.map((elem: any) => $string(elem)).join(",")}]` : undefined},`}${undefined === input.patternProperties ? "" : `"patternProperties":${undefined !== input.patternProperties ? $so15(input.patternProperties) : undefined},`}${undefined === input.additionalProperties ? "" : `"additionalProperties":${undefined !== input.additionalProperties ? $su0(input.additionalProperties) : undefined},`}${undefined === input["x-typia-patternProperties"] ? "" : `"x-typia-patternProperties":${undefined !== input["x-typia-patternProperties"] ? $so15(input["x-typia-patternProperties"]) : undefined},`}${undefined === input["x-typia-additionalProperties"] ? "" : `"x-typia-additionalProperties":${undefined !== input["x-typia-additionalProperties"] ? $su0(input["x-typia-additionalProperties"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"properties":${$so15(input.properties)},"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"object"',
          value: input.type,
        });
      })()}}`;
    const $so32 = (input: any): any =>
      `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"$ref":${$string(input.$ref)}}`;
    const $so33 = (input: any): any =>
      `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
        if ("string" === typeof input.type) return $string(input.type);
        if ("string" === typeof input.type) return '"' + input.type + '"';
        $throws({
          expected: '"null"',
          value: input.type,
        });
      })()}}`;
    const $so34 = (input: any): any =>
      `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"oneOf":${`[${input.oneOf.map((elem: any) => $su0(elem)).join(",")}]`}}`;
    const $so35 = (input: any): any =>
      `{${$tail(`${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined}`}`)}}`;
    const $su0 = (input: any): any =>
      (() => {
        if ("integer" === input.type) return $so9(input);
        else if (
          "object" === typeof input.items &&
          null !== input.items &&
          false === Array.isArray(input.items) &&
          $iu0(input.items)
        )
          return $so12(input);
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
          return $so13(input);
        else if ("object" === input.type) return $so14(input);
        else if (undefined !== input.$ref) return $so16(input);
        else if ("null" === input.type) return $so17(input);
        else if (undefined !== input.oneOf) return $so18(input);
        else
          return (() => {
            if ($io5(input)) return $so5(input);
            if ($io4(input)) return $so4(input);
            if ($io1(input)) return $so1(input);
            if ($io6(input)) return $so6(input);
            if ($io10(input)) return $so10(input);
            if ($io11(input)) return $so11(input);
            if ($io19(input)) return $so19(input);
            $throws({
              expected:
                '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
              value: input,
            });
          })();
      })();
    const $su1 = (input: any): any =>
      (() => {
        if ("integer" === input.type) return $so26(input);
        else if (
          "object" === typeof input.items &&
          null !== input.items &&
          false === Array.isArray(input.items) &&
          $iu0(input.items)
        )
          return $so29(input);
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
          return $so30(input);
        else if ("object" === input.type) return $so31(input);
        else if (undefined !== input.$ref) return $so32(input);
        else if ("null" === input.type) return $so33(input);
        else if (undefined !== input.oneOf) return $so34(input);
        else
          return (() => {
            if ($io24(input)) return $so24(input);
            if ($io23(input)) return $so23(input);
            if ($io22(input)) return $so22(input);
            if ($io25(input)) return $so25(input);
            if ($io27(input)) return $so27(input);
            if ($io28(input)) return $so28(input);
            if ($io35(input)) return $so35(input);
            $throws({
              expected:
                '(IEnumeration<"string"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"boolean"> & IIdentified | IBoolean & IIdentified | INumber & IIdentified | IString & IIdentified | IUnknown & IIdentified)',
              value: input,
            });
          })();
      })();
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
  };
  return is(input) ? stringify(input) : null;
});
