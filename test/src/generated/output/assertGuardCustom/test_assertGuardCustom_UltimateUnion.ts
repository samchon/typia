import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_assertGuardCustom_UltimateUnion = _test_assertGuard(
  CustomGuardError,
)("UltimateUnion")<UltimateUnion>(UltimateUnion)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is UltimateUnion => {
    const __is = (input: any): input is UltimateUnion => {
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
        (undefined === input.contentMediaType ||
          "string" === typeof input.contentMediaType) &&
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
        (undefined === input.contentMediaType ||
          "string" === typeof input.contentMediaType) &&
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
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is UltimateUnion => {
        const $guard = (typia.assertGuard as any).guard;
        const $join = (typia.assertGuard as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.schemas) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schemas",
                expected: "Array<IJsonSchema>",
                value: input.schemas,
              },
              errorFactory,
            )) &&
            input.schemas.every(
              (elem: any, _index2: number) =>
                ((("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".schemas[" + _index2 + "]",
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    elem,
                    _path + ".schemas[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".schemas[" + _index2 + "]",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schemas",
                expected: "Array<IJsonSchema>",
                value: input.schemas,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.components &&
            null !== input.components &&
            false === Array.isArray(input.components)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".components",
                expected: "IJsonComponents",
                value: input.components,
              },
              errorFactory,
            )) &&
            $ao20(
              input.components,
              _path + ".components",
              true && _exceptionable,
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".components",
                expected: "IJsonComponents",
                value: input.components,
              },
              errorFactory,
            )) &&
          ("ajv" === input.purpose ||
            "swagger" === input.purpose ||
            $guard(
              _exceptionable,
              {
                path: _path + ".purpose",
                expected: '("ajv" | "swagger")',
                value: input.purpose,
              },
              errorFactory,
            )) &&
          ("boolean" === typeof input.surplus ||
            $guard(
              _exceptionable,
              {
                path: _path + ".surplus",
                expected: "boolean",
                value: input.surplus,
              },
              errorFactory,
            ));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input["enum"]) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<boolean>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
            input["enum"].every(
              (elem: any, _index3: number) =>
                "boolean" === typeof elem ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["enum"][' + _index3 + "]",
                    expected: "boolean",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<boolean>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
          ("boolean" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"boolean"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "boolean" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(boolean | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index4: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index4 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index4 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index4 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          (undefined === input.text ||
            ((Array.isArray(input.text) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".text",
                  expected: "(Array<IJsDocTagInfo.IText> | undefined)",
                  value: input.text,
                },
                errorFactory,
              )) &&
              input.text.every(
                (elem: any, _index5: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".text[" + _index5 + "]",
                        expected: "IJsDocTagInfo.IText",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao3(
                      elem,
                      _path + ".text[" + _index5 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".text[" + _index5 + "]",
                      expected: "IJsDocTagInfo.IText",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".text",
                expected: "(Array<IJsDocTagInfo.IText> | undefined)",
                value: input.text,
              },
              errorFactory,
            ));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.text ||
            $guard(
              _exceptionable,
              {
                path: _path + ".text",
                expected: "string",
                value: input.text,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.kind ||
            $guard(
              _exceptionable,
              {
                path: _path + ".kind",
                expected: "string",
                value: input.kind,
              },
              errorFactory,
            ));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input["enum"]) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<number>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
            input["enum"].every(
              (elem: any, _index6: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["enum"][' + _index6 + "]",
                    expected: "number",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<number>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
          ("number" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"number"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              Number.isFinite(input["default"])) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index7: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index7 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index7 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index7 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input["enum"]) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<string>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
            input["enum"].every(
              (elem: any, _index8: number) =>
                "string" === typeof elem ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["enum"][' + _index8 + "]",
                    expected: "string",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<string>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
          ("string" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "string" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(string | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index9: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index9 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index9 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index9 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index10: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index10 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index10 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index10 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "boolean" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(boolean | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("boolean" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"boolean"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index11: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index11 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index11 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index11 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("array" === input.target ||
            "bigint" === input.target ||
            "boolean" === input.target ||
            "number" === input.target ||
            "string" === input.target ||
            $guard(
              _exceptionable,
              {
                path: _path + ".target",
                expected:
                  '("array" | "bigint" | "boolean" | "number" | "string")',
                value: input.target,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.kind ||
            $guard(
              _exceptionable,
              {
                path: _path + ".kind",
                expected: "string",
                value: input.kind,
              },
              errorFactory,
            )) &&
          (null !== input.exclusive ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusive",
                expected: "(Array<string> | boolean)",
                value: input.exclusive,
              },
              errorFactory,
            )) &&
          (undefined !== input.exclusive ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusive",
                expected: "(Array<string> | boolean)",
                value: input.exclusive,
              },
              errorFactory,
            )) &&
          ("boolean" === typeof input.exclusive ||
            ((Array.isArray(input.exclusive) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".exclusive",
                  expected: "(Array<string> | boolean)",
                  value: input.exclusive,
                },
                errorFactory,
              )) &&
              input.exclusive.every(
                (elem: any, _index12: number) =>
                  "string" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".exclusive[" + _index12 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusive",
                expected: "(Array<string> | boolean)",
                value: input.exclusive,
              },
              errorFactory,
            )) &&
          true &&
          (undefined === input.validate ||
            "string" === typeof input.validate ||
            $guard(
              _exceptionable,
              {
                path: _path + ".validate",
                expected: "(string | undefined)",
                value: input.validate,
              },
              errorFactory,
            )) &&
          (undefined === input.schema ||
            ((("object" === typeof input.schema &&
              null !== input.schema &&
              false === Array.isArray(input.schema)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".schema",
                  expected: "(object | undefined)",
                  value: input.schema,
                },
                errorFactory,
              )) &&
              $ao8(input.schema, _path + ".schema", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schema",
                expected: "(object | undefined)",
                value: input.schema,
              },
              errorFactory,
            ));
        const $ao8 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean => true;
        const $ao9 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.minimum ||
            ("number" === typeof input.minimum &&
              ((Math.floor(input.minimum) === input.minimum &&
                -2147483648 <= input.minimum &&
                input.minimum <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minimum",
                    expected: 'number & Type<"int32">',
                    value: input.minimum,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (undefined === input.maximum ||
            ("number" === typeof input.maximum &&
              ((Math.floor(input.maximum) === input.maximum &&
                -2147483648 <= input.maximum &&
                input.maximum <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maximum",
                    expected: 'number & Type<"int32">',
                    value: input.maximum,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMinimum ||
            "boolean" === typeof input.exclusiveMinimum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMinimum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMinimum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMaximum ||
            "boolean" === typeof input.exclusiveMaximum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMaximum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMaximum,
              },
              errorFactory,
            )) &&
          (undefined === input.multipleOf ||
            ("number" === typeof input.multipleOf &&
              ((Math.floor(input.multipleOf) === input.multipleOf &&
                -2147483648 <= input.multipleOf &&
                input.multipleOf <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".multipleOf",
                    expected: 'number & Type<"int32">',
                    value: input.multipleOf,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.multipleOf,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index13: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index13 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index13 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index13 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              Number.isFinite(input["default"])) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("integer" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"integer"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index14: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index14 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index14 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index14 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao10 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.minimum ||
            ("number" === typeof input.minimum &&
              Number.isFinite(input.minimum)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: "(number | undefined)",
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (undefined === input.maximum ||
            ("number" === typeof input.maximum &&
              Number.isFinite(input.maximum)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: "(number | undefined)",
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMinimum ||
            "boolean" === typeof input.exclusiveMinimum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMinimum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMinimum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMaximum ||
            "boolean" === typeof input.exclusiveMaximum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMaximum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMaximum,
              },
              errorFactory,
            )) &&
          (undefined === input.multipleOf ||
            ("number" === typeof input.multipleOf &&
              Number.isFinite(input.multipleOf)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: "(number | undefined)",
                value: input.multipleOf,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index15: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index15 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index15 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index15 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              Number.isFinite(input["default"])) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("number" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"number"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index16: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index16 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index16 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index16 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao11 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.minLength ||
            ("number" === typeof input.minLength &&
              ((Math.floor(input.minLength) === input.minLength &&
                0 <= input.minLength &&
                input.minLength <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minLength",
                    expected: 'number & Type<"uint32">',
                    value: input.minLength,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minLength",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.minLength,
              },
              errorFactory,
            )) &&
          (undefined === input.maxLength ||
            ("number" === typeof input.maxLength &&
              ((Math.floor(input.maxLength) === input.maxLength &&
                0 <= input.maxLength &&
                input.maxLength <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxLength",
                    expected: 'number & Type<"uint32">',
                    value: input.maxLength,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxLength",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxLength,
              },
              errorFactory,
            )) &&
          (undefined === input.pattern ||
            "string" === typeof input.pattern ||
            $guard(
              _exceptionable,
              {
                path: _path + ".pattern",
                expected: "(string | undefined)",
                value: input.pattern,
              },
              errorFactory,
            )) &&
          (undefined === input.format ||
            "string" === typeof input.format ||
            $guard(
              _exceptionable,
              {
                path: _path + ".format",
                expected: "(string | undefined)",
                value: input.format,
              },
              errorFactory,
            )) &&
          (undefined === input.contentMediaType ||
            "string" === typeof input.contentMediaType ||
            $guard(
              _exceptionable,
              {
                path: _path + ".contentMediaType",
                expected: "(string | undefined)",
                value: input.contentMediaType,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index17: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index17 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index17 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index17 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "string" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(string | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("string" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index18: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index18 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index18 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index18 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao12 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.items &&
            null !== input.items &&
            false === Array.isArray(input.items)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                value: input.items,
              },
              errorFactory,
            )) &&
            $au0(input.items, _path + ".items", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                value: input.items,
              },
              errorFactory,
            )) &&
          (undefined === input.minItems ||
            ("number" === typeof input.minItems &&
              ((Math.floor(input.minItems) === input.minItems &&
                0 <= input.minItems &&
                input.minItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minItems",
                    expected: 'number & Type<"uint32">',
                    value: input.minItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.minItems,
              },
              errorFactory,
            )) &&
          (undefined === input.maxItems ||
            ("number" === typeof input.maxItems &&
              ((Math.floor(input.maxItems) === input.maxItems &&
                0 <= input.maxItems &&
                input.maxItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxItems",
                    expected: 'number & Type<"uint32">',
                    value: input.maxItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxItems,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-tuple"] ||
            ((("object" === typeof input["x-typia-tuple"] &&
              null !== input["x-typia-tuple"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-tuple"]',
                  expected: "(IJsonSchema.ITuple | undefined)",
                  value: input["x-typia-tuple"],
                },
                errorFactory,
              )) &&
              $ao13(
                input["x-typia-tuple"],
                _path + '["x-typia-tuple"]',
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-tuple"]',
                expected: "(IJsonSchema.ITuple | undefined)",
                value: input["x-typia-tuple"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index19: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index19 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index19 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index19 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          ("array" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"array"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index20: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index20 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index20 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index20 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao13 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.items) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected: "Array<IJsonSchema>",
                value: input.items,
              },
              errorFactory,
            )) &&
            input.items.every(
              (elem: any, _index21: number) =>
                ((("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items[" + _index21 + "]",
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    elem,
                    _path + ".items[" + _index21 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items[" + _index21 + "]",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected: "Array<IJsonSchema>",
                value: input.items,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.minItems &&
            ((Math.floor(input.minItems) === input.minItems &&
              0 <= input.minItems &&
              input.minItems <= 4294967295) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".minItems",
                  expected: 'number & Type<"uint32">',
                  value: input.minItems,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minItems",
                expected: '(number & Type<"uint32">)',
                value: input.minItems,
              },
              errorFactory,
            )) &&
          (undefined === input.maxItems ||
            ("number" === typeof input.maxItems &&
              ((Math.floor(input.maxItems) === input.maxItems &&
                0 <= input.maxItems &&
                input.maxItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxItems",
                    expected: 'number & Type<"uint32">',
                    value: input.maxItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxItems,
              },
              errorFactory,
            )) &&
          ("array" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"array"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index22: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index22 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index22 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index22 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao14 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".properties",
                expected: "Record<string, IJsonSchema>",
                value: input.properties,
              },
              errorFactory,
            )) &&
            $ao15(
              input.properties,
              _path + ".properties",
              true && _exceptionable,
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".properties",
                expected: "Record<string, IJsonSchema>",
                value: input.properties,
              },
              errorFactory,
            )) &&
          (undefined === input.required ||
            ((Array.isArray(input.required) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".required",
                  expected: "(Array<string> | undefined)",
                  value: input.required,
                },
                errorFactory,
              )) &&
              input.required.every(
                (elem: any, _index23: number) =>
                  "string" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".required[" + _index23 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".required",
                expected: "(Array<string> | undefined)",
                value: input.required,
              },
              errorFactory,
            )) &&
          (undefined === input.patternProperties ||
            ((("object" === typeof input.patternProperties &&
              null !== input.patternProperties &&
              false === Array.isArray(input.patternProperties)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".patternProperties",
                  expected: "(Record<string, IJsonSchema> | undefined)",
                  value: input.patternProperties,
                },
                errorFactory,
              )) &&
              $ao15(
                input.patternProperties,
                _path + ".patternProperties",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".patternProperties",
                expected: "(Record<string, IJsonSchema> | undefined)",
                value: input.patternProperties,
              },
              errorFactory,
            )) &&
          (undefined === input.additionalProperties ||
            ((("object" === typeof input.additionalProperties &&
              null !== input.additionalProperties &&
              false === Array.isArray(input.additionalProperties)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".additionalProperties",
                  expected:
                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                  value: input.additionalProperties,
                },
                errorFactory,
              )) &&
              $au0(
                input.additionalProperties,
                _path + ".additionalProperties",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".additionalProperties",
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                value: input.additionalProperties,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-patternProperties"] ||
            ((("object" === typeof input["x-typia-patternProperties"] &&
              null !== input["x-typia-patternProperties"] &&
              false === Array.isArray(input["x-typia-patternProperties"])) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-patternProperties"]',
                  expected: "(Record<string, IJsonSchema> | undefined)",
                  value: input["x-typia-patternProperties"],
                },
                errorFactory,
              )) &&
              $ao15(
                input["x-typia-patternProperties"],
                _path + '["x-typia-patternProperties"]',
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-patternProperties"]',
                expected: "(Record<string, IJsonSchema> | undefined)",
                value: input["x-typia-patternProperties"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-additionalProperties"] ||
            ((("object" === typeof input["x-typia-additionalProperties"] &&
              null !== input["x-typia-additionalProperties"] &&
              false === Array.isArray(input["x-typia-additionalProperties"])) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-additionalProperties"]',
                  expected:
                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                  value: input["x-typia-additionalProperties"],
                },
                errorFactory,
              )) &&
              $au0(
                input["x-typia-additionalProperties"],
                _path + '["x-typia-additionalProperties"]',
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-additionalProperties"]',
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                value: input["x-typia-additionalProperties"],
              },
              errorFactory,
            )) &&
          ("object" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"object"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index24: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index24 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index24 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index24 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao15 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              ((("object" === typeof value &&
                null !== value &&
                false === Array.isArray(value)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: value,
                  },
                  errorFactory,
                )) &&
                $au0(value, _path + $join(key), true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected:
                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                  value: value,
                },
                errorFactory,
              )
            );
          });
        const $ao16 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.$ref ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$ref",
                expected: "string",
                value: input.$ref,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index25: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index25 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index25 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index25 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao17 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("null" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"null"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index26: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index26 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index26 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index26 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao18 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.oneOf) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".oneOf",
                expected: "Array<IJsonSchema>",
                value: input.oneOf,
              },
              errorFactory,
            )) &&
            input.oneOf.every(
              (elem: any, _index27: number) =>
                ((("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".oneOf[" + _index27 + "]",
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    elem,
                    _path + ".oneOf[" + _index27 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".oneOf[" + _index27 + "]",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".oneOf",
                expected: "Array<IJsonSchema>",
                value: input.oneOf,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index28: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index28 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index28 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index28 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao19 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null !== input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: "undefined",
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: "undefined",
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index29: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index29 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index29 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index29 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            ));
        const $ao20 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          undefined === input.schemas ||
          ((("object" === typeof input.schemas &&
            null !== input.schemas &&
            false === Array.isArray(input.schemas)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".schemas",
                expected:
                  "(Record<string, IJsonComponents.IAlias> | undefined)",
                value: input.schemas,
              },
              errorFactory,
            )) &&
            $ao21(input.schemas, _path + ".schemas", true && _exceptionable)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".schemas",
              expected: "(Record<string, IJsonComponents.IAlias> | undefined)",
              value: input.schemas,
            },
            errorFactory,
          );
        const $ao21 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              ((("object" === typeof value &&
                null !== value &&
                false === Array.isArray(value)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected:
                      '(IArray & IIdentified | IBoolean & IIdentified | IEnumeration<"boolean"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"string"> & IIdentified | IInteger & IIdentified | INullOnly & IIdentified | INumber & IIdentified | IObject & IIdentified | IOneOf & IIdentified | IReference & IIdentified | IString & IIdentified | ITuple & IIdentified | IUnknown & IIdentified)',
                    value: value,
                  },
                  errorFactory,
                )) &&
                $au1(value, _path + $join(key), true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected:
                    '(IArray & IIdentified | IBoolean & IIdentified | IEnumeration<"boolean"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"string"> & IIdentified | IInteger & IIdentified | INullOnly & IIdentified | INumber & IIdentified | IObject & IIdentified | IOneOf & IIdentified | IReference & IIdentified | IString & IIdentified | ITuple & IIdentified | IUnknown & IIdentified)',
                  value: value,
                },
                errorFactory,
              )
            );
          });
        const $ao22 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input["enum"]) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<boolean>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
            input["enum"].every(
              (elem: any, _index30: number) =>
                "boolean" === typeof elem ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["enum"][' + _index30 + "]",
                    expected: "boolean",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<boolean>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
          ("boolean" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"boolean"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "boolean" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(boolean | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index31: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index31 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index31 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index31 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao23 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input["enum"]) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<number>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
            input["enum"].every(
              (elem: any, _index32: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["enum"][' + _index32 + "]",
                    expected: "number",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<number>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
          ("number" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"number"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              Number.isFinite(input["default"])) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index33: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index33 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index33 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index33 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao24 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input["enum"]) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<string>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
            input["enum"].every(
              (elem: any, _index34: number) =>
                "string" === typeof elem ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["enum"][' + _index34 + "]",
                    expected: "string",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["enum"]',
                expected: "Array<string>",
                value: input["enum"],
              },
              errorFactory,
            )) &&
          ("string" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "string" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(string | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index35: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index35 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index35 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index35 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao25 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index36: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index36 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index36 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index36 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "boolean" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(boolean | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("boolean" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"boolean"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index37: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index37 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index37 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index37 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao26 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.minimum ||
            ("number" === typeof input.minimum &&
              ((Math.floor(input.minimum) === input.minimum &&
                -2147483648 <= input.minimum &&
                input.minimum <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minimum",
                    expected: 'number & Type<"int32">',
                    value: input.minimum,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (undefined === input.maximum ||
            ("number" === typeof input.maximum &&
              ((Math.floor(input.maximum) === input.maximum &&
                -2147483648 <= input.maximum &&
                input.maximum <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maximum",
                    expected: 'number & Type<"int32">',
                    value: input.maximum,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMinimum ||
            "boolean" === typeof input.exclusiveMinimum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMinimum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMinimum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMaximum ||
            "boolean" === typeof input.exclusiveMaximum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMaximum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMaximum,
              },
              errorFactory,
            )) &&
          (undefined === input.multipleOf ||
            ("number" === typeof input.multipleOf &&
              ((Math.floor(input.multipleOf) === input.multipleOf &&
                -2147483648 <= input.multipleOf &&
                input.multipleOf <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".multipleOf",
                    expected: 'number & Type<"int32">',
                    value: input.multipleOf,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: '((number & Type<"int32">) | undefined)',
                value: input.multipleOf,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index38: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index38 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index38 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index38 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              Number.isFinite(input["default"])) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("integer" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"integer"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index39: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index39 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index39 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index39 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao27 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.minimum ||
            ("number" === typeof input.minimum &&
              Number.isFinite(input.minimum)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: "(number | undefined)",
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (undefined === input.maximum ||
            ("number" === typeof input.maximum &&
              Number.isFinite(input.maximum)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: "(number | undefined)",
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMinimum ||
            "boolean" === typeof input.exclusiveMinimum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMinimum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMinimum,
              },
              errorFactory,
            )) &&
          (undefined === input.exclusiveMaximum ||
            "boolean" === typeof input.exclusiveMaximum ||
            $guard(
              _exceptionable,
              {
                path: _path + ".exclusiveMaximum",
                expected: "(boolean | undefined)",
                value: input.exclusiveMaximum,
              },
              errorFactory,
            )) &&
          (undefined === input.multipleOf ||
            ("number" === typeof input.multipleOf &&
              Number.isFinite(input.multipleOf)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: "(number | undefined)",
                value: input.multipleOf,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index40: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index40 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index40 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index40 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            ("number" === typeof input["default"] &&
              Number.isFinite(input["default"])) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("number" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"number"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index41: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index41 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index41 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index41 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao28 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.minLength ||
            ("number" === typeof input.minLength &&
              ((Math.floor(input.minLength) === input.minLength &&
                0 <= input.minLength &&
                input.minLength <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minLength",
                    expected: 'number & Type<"uint32">',
                    value: input.minLength,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minLength",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.minLength,
              },
              errorFactory,
            )) &&
          (undefined === input.maxLength ||
            ("number" === typeof input.maxLength &&
              ((Math.floor(input.maxLength) === input.maxLength &&
                0 <= input.maxLength &&
                input.maxLength <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxLength",
                    expected: 'number & Type<"uint32">',
                    value: input.maxLength,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxLength",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxLength,
              },
              errorFactory,
            )) &&
          (undefined === input.pattern ||
            "string" === typeof input.pattern ||
            $guard(
              _exceptionable,
              {
                path: _path + ".pattern",
                expected: "(string | undefined)",
                value: input.pattern,
              },
              errorFactory,
            )) &&
          (undefined === input.format ||
            "string" === typeof input.format ||
            $guard(
              _exceptionable,
              {
                path: _path + ".format",
                expected: "(string | undefined)",
                value: input.format,
              },
              errorFactory,
            )) &&
          (undefined === input.contentMediaType ||
            "string" === typeof input.contentMediaType ||
            $guard(
              _exceptionable,
              {
                path: _path + ".contentMediaType",
                expected: "(string | undefined)",
                value: input.contentMediaType,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index42: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index42 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index42 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index42 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["default"] ||
            "string" === typeof input["default"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["default"]',
                expected: "(string | undefined)",
                value: input["default"],
              },
              errorFactory,
            )) &&
          ("string" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index43: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index43 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index43 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index43 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao29 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.items &&
            null !== input.items &&
            false === Array.isArray(input.items)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                value: input.items,
              },
              errorFactory,
            )) &&
            $au0(input.items, _path + ".items", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                value: input.items,
              },
              errorFactory,
            )) &&
          (undefined === input.minItems ||
            ("number" === typeof input.minItems &&
              ((Math.floor(input.minItems) === input.minItems &&
                0 <= input.minItems &&
                input.minItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minItems",
                    expected: 'number & Type<"uint32">',
                    value: input.minItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.minItems,
              },
              errorFactory,
            )) &&
          (undefined === input.maxItems ||
            ("number" === typeof input.maxItems &&
              ((Math.floor(input.maxItems) === input.maxItems &&
                0 <= input.maxItems &&
                input.maxItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxItems",
                    expected: 'number & Type<"uint32">',
                    value: input.maxItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxItems,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-tuple"] ||
            ((("object" === typeof input["x-typia-tuple"] &&
              null !== input["x-typia-tuple"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-tuple"]',
                  expected: "(IJsonSchema.ITuple | undefined)",
                  value: input["x-typia-tuple"],
                },
                errorFactory,
              )) &&
              $ao13(
                input["x-typia-tuple"],
                _path + '["x-typia-tuple"]',
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-tuple"]',
                expected: "(IJsonSchema.ITuple | undefined)",
                value: input["x-typia-tuple"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-typeTags"] ||
            ((Array.isArray(input["x-typia-typeTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-typeTags"]',
                  expected: "(Array<IMetadataTypeTag> | undefined)",
                  value: input["x-typia-typeTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-typeTags"].every(
                (elem: any, _index44: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-typeTags"][' + _index44 + "]",
                        expected: "IMetadataTypeTag",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao7(
                      elem,
                      _path + '["x-typia-typeTags"][' + _index44 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-typeTags"][' + _index44 + "]",
                      expected: "IMetadataTypeTag",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-typeTags"]',
                expected: "(Array<IMetadataTypeTag> | undefined)",
                value: input["x-typia-typeTags"],
              },
              errorFactory,
            )) &&
          ("array" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"array"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index45: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index45 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index45 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index45 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao30 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.items) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected: "Array<IJsonSchema>",
                value: input.items,
              },
              errorFactory,
            )) &&
            input.items.every(
              (elem: any, _index46: number) =>
                ((("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items[" + _index46 + "]",
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    elem,
                    _path + ".items[" + _index46 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items[" + _index46 + "]",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".items",
                expected: "Array<IJsonSchema>",
                value: input.items,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.minItems &&
            ((Math.floor(input.minItems) === input.minItems &&
              0 <= input.minItems &&
              input.minItems <= 4294967295) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".minItems",
                  expected: 'number & Type<"uint32">',
                  value: input.minItems,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minItems",
                expected: '(number & Type<"uint32">)',
                value: input.minItems,
              },
              errorFactory,
            )) &&
          (undefined === input.maxItems ||
            ("number" === typeof input.maxItems &&
              ((Math.floor(input.maxItems) === input.maxItems &&
                0 <= input.maxItems &&
                input.maxItems <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maxItems",
                    expected: 'number & Type<"uint32">',
                    value: input.maxItems,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maxItems",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.maxItems,
              },
              errorFactory,
            )) &&
          ("array" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"array"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index47: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index47 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index47 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index47 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao31 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".properties",
                expected: "Record<string, IJsonSchema>",
                value: input.properties,
              },
              errorFactory,
            )) &&
            $ao15(
              input.properties,
              _path + ".properties",
              true && _exceptionable,
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".properties",
                expected: "Record<string, IJsonSchema>",
                value: input.properties,
              },
              errorFactory,
            )) &&
          (undefined === input.required ||
            ((Array.isArray(input.required) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".required",
                  expected: "(Array<string> | undefined)",
                  value: input.required,
                },
                errorFactory,
              )) &&
              input.required.every(
                (elem: any, _index48: number) =>
                  "string" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".required[" + _index48 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".required",
                expected: "(Array<string> | undefined)",
                value: input.required,
              },
              errorFactory,
            )) &&
          (undefined === input.patternProperties ||
            ((("object" === typeof input.patternProperties &&
              null !== input.patternProperties &&
              false === Array.isArray(input.patternProperties)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".patternProperties",
                  expected: "(Record<string, IJsonSchema> | undefined)",
                  value: input.patternProperties,
                },
                errorFactory,
              )) &&
              $ao15(
                input.patternProperties,
                _path + ".patternProperties",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".patternProperties",
                expected: "(Record<string, IJsonSchema> | undefined)",
                value: input.patternProperties,
              },
              errorFactory,
            )) &&
          (undefined === input.additionalProperties ||
            ((("object" === typeof input.additionalProperties &&
              null !== input.additionalProperties &&
              false === Array.isArray(input.additionalProperties)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".additionalProperties",
                  expected:
                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                  value: input.additionalProperties,
                },
                errorFactory,
              )) &&
              $au0(
                input.additionalProperties,
                _path + ".additionalProperties",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".additionalProperties",
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                value: input.additionalProperties,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-patternProperties"] ||
            ((("object" === typeof input["x-typia-patternProperties"] &&
              null !== input["x-typia-patternProperties"] &&
              false === Array.isArray(input["x-typia-patternProperties"])) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-patternProperties"]',
                  expected: "(Record<string, IJsonSchema> | undefined)",
                  value: input["x-typia-patternProperties"],
                },
                errorFactory,
              )) &&
              $ao15(
                input["x-typia-patternProperties"],
                _path + '["x-typia-patternProperties"]',
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-patternProperties"]',
                expected: "(Record<string, IJsonSchema> | undefined)",
                value: input["x-typia-patternProperties"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-additionalProperties"] ||
            ((("object" === typeof input["x-typia-additionalProperties"] &&
              null !== input["x-typia-additionalProperties"] &&
              false === Array.isArray(input["x-typia-additionalProperties"])) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-additionalProperties"]',
                  expected:
                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                  value: input["x-typia-additionalProperties"],
                },
                errorFactory,
              )) &&
              $au0(
                input["x-typia-additionalProperties"],
                _path + '["x-typia-additionalProperties"]',
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-additionalProperties"]',
                expected:
                  '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                value: input["x-typia-additionalProperties"],
              },
              errorFactory,
            )) &&
          ("object" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"object"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nullable",
                expected: "(boolean | undefined)",
                value: input.nullable,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index49: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index49 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index49 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index49 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao32 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.$ref ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$ref",
                expected: "string",
                value: input.$ref,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index50: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index50 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index50 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index50 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao33 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("null" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"null"',
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index51: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index51 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index51 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index51 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao34 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.oneOf) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".oneOf",
                expected: "Array<IJsonSchema>",
                value: input.oneOf,
              },
              errorFactory,
            )) &&
            input.oneOf.every(
              (elem: any, _index52: number) =>
                ((("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".oneOf[" + _index52 + "]",
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    elem,
                    _path + ".oneOf[" + _index52 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".oneOf[" + _index52 + "]",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".oneOf",
                expected: "Array<IJsonSchema>",
                value: input.oneOf,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index53: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index53 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index53 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index53 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $ao35 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null !== input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: "undefined",
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: "undefined",
                value: input.type,
              },
              errorFactory,
            )) &&
          (undefined === input.deprecated ||
            "boolean" === typeof input.deprecated ||
            $guard(
              _exceptionable,
              {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              },
              errorFactory,
            )) &&
          (undefined === input.title ||
            "string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "(string | undefined)",
                value: input.title,
              },
              errorFactory,
            )) &&
          (undefined === input.description ||
            "string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-jsDocTags"] ||
            ((Array.isArray(input["x-typia-jsDocTags"]) ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["x-typia-jsDocTags"]',
                  expected: "(Array<IJsDocTagInfo> | undefined)",
                  value: input["x-typia-jsDocTags"],
                },
                errorFactory,
              )) &&
              input["x-typia-jsDocTags"].every(
                (elem: any, _index54: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + '["x-typia-jsDocTags"][' + _index54 + "]",
                        expected: "IJsDocTagInfo",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + '["x-typia-jsDocTags"][' + _index54 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["x-typia-jsDocTags"][' + _index54 + "]",
                      expected: "IJsDocTagInfo",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-jsDocTags"]',
                expected: "(Array<IJsDocTagInfo> | undefined)",
                value: input["x-typia-jsDocTags"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-required"] ||
            "boolean" === typeof input["x-typia-required"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-required"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-required"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-optional"] ||
            "boolean" === typeof input["x-typia-optional"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-optional"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-optional"],
              },
              errorFactory,
            )) &&
          (undefined === input["x-typia-rest"] ||
            "boolean" === typeof input["x-typia-rest"] ||
            $guard(
              _exceptionable,
              {
                path: _path + '["x-typia-rest"]',
                expected: "(boolean | undefined)",
                value: input["x-typia-rest"],
              },
              errorFactory,
            )) &&
          (undefined === input.$id ||
            "string" === typeof input.$id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$id",
                expected: "(string | undefined)",
                value: input.$id,
              },
              errorFactory,
            )) &&
          (undefined === input.$recursiveAnchor ||
            "boolean" === typeof input.$recursiveAnchor ||
            $guard(
              _exceptionable,
              {
                path: _path + ".$recursiveAnchor",
                expected: "(boolean | undefined)",
                value: input.$recursiveAnchor,
              },
              errorFactory,
            ));
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if ("integer" === input.type)
              return $ao9(input, _path, true && _exceptionable);
            else if (
              "object" === typeof input.items &&
              null !== input.items &&
              false === Array.isArray(input.items) &&
              $au0(input.items, _path + ".items", false && _exceptionable)
            )
              return $ao12(input, _path, true && _exceptionable);
            else if (
              Array.isArray(input.items) &&
              input.items.every(
                (elem: any, _index55: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem) &&
                  $au0(
                    elem,
                    _path + ".items[" + _index55 + "]",
                    false && _exceptionable,
                  ),
              )
            )
              return $ao13(input, _path, true && _exceptionable);
            else if ("object" === input.type)
              return $ao14(input, _path, true && _exceptionable);
            else if (undefined !== input.$ref)
              return $ao16(input, _path, true && _exceptionable);
            else if ("null" === input.type)
              return $ao17(input, _path, true && _exceptionable);
            else if (undefined !== input.oneOf)
              return $ao18(input, _path, true && _exceptionable);
            else
              return (
                $ao5(input, _path, false && _exceptionable) ||
                $ao4(input, _path, false && _exceptionable) ||
                $ao1(input, _path, false && _exceptionable) ||
                $ao6(input, _path, false && _exceptionable) ||
                $ao10(input, _path, false && _exceptionable) ||
                $ao11(input, _path, false && _exceptionable) ||
                $ao19(input, _path, false && _exceptionable) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path,
                    expected:
                      '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                    value: input,
                  },
                  errorFactory,
                )
              );
          })();
        const $au1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if ("integer" === input.type)
              return $ao26(input, _path, true && _exceptionable);
            else if (
              "object" === typeof input.items &&
              null !== input.items &&
              false === Array.isArray(input.items) &&
              $au0(input.items, _path + ".items", false && _exceptionable)
            )
              return $ao29(input, _path, true && _exceptionable);
            else if (
              Array.isArray(input.items) &&
              input.items.every(
                (elem: any, _index56: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem) &&
                  $au0(
                    elem,
                    _path + ".items[" + _index56 + "]",
                    false && _exceptionable,
                  ),
              )
            )
              return $ao30(input, _path, true && _exceptionable);
            else if ("object" === input.type)
              return $ao31(input, _path, true && _exceptionable);
            else if (undefined !== input.$ref)
              return $ao32(input, _path, true && _exceptionable);
            else if ("null" === input.type)
              return $ao33(input, _path, true && _exceptionable);
            else if (undefined !== input.oneOf)
              return $ao34(input, _path, true && _exceptionable);
            else
              return (
                $ao24(input, _path, false && _exceptionable) ||
                $ao23(input, _path, false && _exceptionable) ||
                $ao22(input, _path, false && _exceptionable) ||
                $ao25(input, _path, false && _exceptionable) ||
                $ao27(input, _path, false && _exceptionable) ||
                $ao28(input, _path, false && _exceptionable) ||
                $ao35(input, _path, false && _exceptionable) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path,
                    expected:
                      '(IEnumeration<"string"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"boolean"> & IIdentified | IBoolean & IIdentified | INumber & IIdentified | IString & IIdentified | IUnknown & IIdentified)',
                    value: input,
                  },
                  errorFactory,
                )
              );
          })();
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "UltimateUnion",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "IJsonApplication",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "IJsonApplication",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "UltimateUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input, (p) => new CustomGuardError(p)),
);
