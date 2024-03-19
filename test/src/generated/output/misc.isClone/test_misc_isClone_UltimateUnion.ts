import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { UltimateUnion } from "../../../structures/UltimateUnion";
export const test_misc_isClone_UltimateUnion = _test_misc_isClone(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
  ((input: any): import("typia").Resolved<UltimateUnion> | null => {
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
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const clone = (
      input: UltimateUnion,
    ): import("typia").Resolved<UltimateUnion> => {
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
      const $any = (typia.misc.isClone as any).any;
      const $throws = (typia.misc.isClone as any).throws;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $cu0(elem)
            : (elem as any),
        );
      const $cp2 = (input: any) => input.map((elem: any) => elem as any);
      const $cp3 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co2(elem)
            : (elem as any),
        );
      const $cp4 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co3(elem)
            : (elem as any),
        );
      const $cp5 = (input: any) => input.map((elem: any) => elem as any);
      const $cp6 = (input: any) => input.map((elem: any) => elem as any);
      const $cp7 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co7(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        schemas: Array.isArray(input.schemas)
          ? $cp1(input.schemas)
          : (input.schemas as any),
        components:
          "object" === typeof input.components && null !== input.components
            ? $co20(input.components)
            : (input.components as any),
        purpose: input.purpose as any,
        surplus: input.surplus as any,
      });
      const $co1 = (input: any): any => ({
        enum: Array.isArray(input["enum"])
          ? $cp2(input["enum"])
          : (input["enum"] as any),
        type: input.type as any,
        default: input["default"] as any,
        title: input.title as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co2 = (input: any): any => ({
        name: input.name as any,
        text: Array.isArray(input.text)
          ? $cp4(input.text)
          : (input.text as any),
      });
      const $co3 = (input: any): any => ({
        text: input.text as any,
        kind: input.kind as any,
      });
      const $co4 = (input: any): any => ({
        enum: Array.isArray(input["enum"])
          ? $cp5(input["enum"])
          : (input["enum"] as any),
        type: input.type as any,
        default: input["default"] as any,
        title: input.title as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co5 = (input: any): any => ({
        enum: Array.isArray(input["enum"])
          ? $cp6(input["enum"])
          : (input["enum"] as any),
        type: input.type as any,
        default: input["default"] as any,
        title: input.title as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co6 = (input: any): any => ({
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co7 = (input: any): any => ({
        target: input.target as any,
        name: input.name as any,
        kind: input.kind as any,
        exclusive: Array.isArray(input.exclusive)
          ? $cp6(input.exclusive)
          : (input.exclusive as any),
        value: $any(input.value),
        validate: input.validate as any,
        schema:
          "object" === typeof input.schema && null !== input.schema
            ? $co8(input.schema)
            : (input.schema as any),
      });
      const $co8 = (input: any): any => {};
      const $co9 = (input: any): any => ({
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        exclusiveMinimum: input.exclusiveMinimum as any,
        exclusiveMaximum: input.exclusiveMaximum as any,
        multipleOf: input.multipleOf as any,
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co10 = (input: any): any => ({
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        exclusiveMinimum: input.exclusiveMinimum as any,
        exclusiveMaximum: input.exclusiveMaximum as any,
        multipleOf: input.multipleOf as any,
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co11 = (input: any): any => ({
        minLength: input.minLength as any,
        maxLength: input.maxLength as any,
        pattern: input.pattern as any,
        format: input.format as any,
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co12 = (input: any): any => ({
        items:
          "object" === typeof input.items && null !== input.items
            ? $cu0(input.items)
            : (input.items as any),
        minItems: input.minItems as any,
        maxItems: input.maxItems as any,
        "x-typia-tuple":
          "object" === typeof input["x-typia-tuple"] &&
          null !== input["x-typia-tuple"]
            ? $co13(input["x-typia-tuple"])
            : (input["x-typia-tuple"] as any),
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co13 = (input: any): any => ({
        items: Array.isArray(input.items)
          ? $cp1(input.items)
          : (input.items as any),
        minItems: input.minItems as any,
        maxItems: input.maxItems as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co14 = (input: any): any => ({
        properties:
          "object" === typeof input.properties && null !== input.properties
            ? $co15(input.properties)
            : (input.properties as any),
        required: Array.isArray(input.required)
          ? $cp6(input.required)
          : (input.required as any),
        patternProperties:
          "object" === typeof input.patternProperties &&
          null !== input.patternProperties
            ? $co15(input.patternProperties)
            : (input.patternProperties as any),
        additionalProperties:
          "object" === typeof input.additionalProperties &&
          null !== input.additionalProperties
            ? $cu0(input.additionalProperties)
            : (input.additionalProperties as any),
        "x-typia-patternProperties":
          "object" === typeof input["x-typia-patternProperties"] &&
          null !== input["x-typia-patternProperties"]
            ? $co15(input["x-typia-patternProperties"])
            : (input["x-typia-patternProperties"] as any),
        "x-typia-additionalProperties":
          "object" === typeof input["x-typia-additionalProperties"] &&
          null !== input["x-typia-additionalProperties"]
            ? $cu0(input["x-typia-additionalProperties"])
            : (input["x-typia-additionalProperties"] as any),
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co15 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/(.*)/).test(key)) {
            output[key] =
              "object" === typeof value && null !== value
                ? $cu0(value)
                : (value as any);
            continue;
          }
        }
        return output;
      };
      const $co16 = (input: any): any => ({
        $ref: input.$ref as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co17 = (input: any): any => ({
        type: input.type as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co18 = (input: any): any => ({
        oneOf: Array.isArray(input.oneOf)
          ? $cp1(input.oneOf)
          : (input.oneOf as any),
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co19 = (input: any): any => ({
        type: input.type as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
      });
      const $co20 = (input: any): any => ({
        schemas:
          "object" === typeof input.schemas && null !== input.schemas
            ? $co21(input.schemas)
            : (input.schemas as any),
      });
      const $co21 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/(.*)/).test(key)) {
            output[key] =
              "object" === typeof value && null !== value
                ? $cu1(value)
                : (value as any);
            continue;
          }
        }
        return output;
      };
      const $co22 = (input: any): any => ({
        enum: Array.isArray(input["enum"])
          ? $cp2(input["enum"])
          : (input["enum"] as any),
        type: input.type as any,
        default: input["default"] as any,
        title: input.title as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co23 = (input: any): any => ({
        enum: Array.isArray(input["enum"])
          ? $cp5(input["enum"])
          : (input["enum"] as any),
        type: input.type as any,
        default: input["default"] as any,
        title: input.title as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co24 = (input: any): any => ({
        enum: Array.isArray(input["enum"])
          ? $cp6(input["enum"])
          : (input["enum"] as any),
        type: input.type as any,
        default: input["default"] as any,
        title: input.title as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co25 = (input: any): any => ({
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co26 = (input: any): any => ({
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        exclusiveMinimum: input.exclusiveMinimum as any,
        exclusiveMaximum: input.exclusiveMaximum as any,
        multipleOf: input.multipleOf as any,
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co27 = (input: any): any => ({
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        exclusiveMinimum: input.exclusiveMinimum as any,
        exclusiveMaximum: input.exclusiveMaximum as any,
        multipleOf: input.multipleOf as any,
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co28 = (input: any): any => ({
        minLength: input.minLength as any,
        maxLength: input.maxLength as any,
        pattern: input.pattern as any,
        format: input.format as any,
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        default: input["default"] as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co29 = (input: any): any => ({
        items:
          "object" === typeof input.items && null !== input.items
            ? $cu0(input.items)
            : (input.items as any),
        minItems: input.minItems as any,
        maxItems: input.maxItems as any,
        "x-typia-tuple":
          "object" === typeof input["x-typia-tuple"] &&
          null !== input["x-typia-tuple"]
            ? $co13(input["x-typia-tuple"])
            : (input["x-typia-tuple"] as any),
        "x-typia-typeTags": Array.isArray(input["x-typia-typeTags"])
          ? $cp7(input["x-typia-typeTags"])
          : (input["x-typia-typeTags"] as any),
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co30 = (input: any): any => ({
        items: Array.isArray(input.items)
          ? $cp1(input.items)
          : (input.items as any),
        minItems: input.minItems as any,
        maxItems: input.maxItems as any,
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co31 = (input: any): any => ({
        properties:
          "object" === typeof input.properties && null !== input.properties
            ? $co15(input.properties)
            : (input.properties as any),
        required: Array.isArray(input.required)
          ? $cp6(input.required)
          : (input.required as any),
        patternProperties:
          "object" === typeof input.patternProperties &&
          null !== input.patternProperties
            ? $co15(input.patternProperties)
            : (input.patternProperties as any),
        additionalProperties:
          "object" === typeof input.additionalProperties &&
          null !== input.additionalProperties
            ? $cu0(input.additionalProperties)
            : (input.additionalProperties as any),
        "x-typia-patternProperties":
          "object" === typeof input["x-typia-patternProperties"] &&
          null !== input["x-typia-patternProperties"]
            ? $co15(input["x-typia-patternProperties"])
            : (input["x-typia-patternProperties"] as any),
        "x-typia-additionalProperties":
          "object" === typeof input["x-typia-additionalProperties"] &&
          null !== input["x-typia-additionalProperties"]
            ? $cu0(input["x-typia-additionalProperties"])
            : (input["x-typia-additionalProperties"] as any),
        type: input.type as any,
        nullable: input.nullable as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co32 = (input: any): any => ({
        $ref: input.$ref as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co33 = (input: any): any => ({
        type: input.type as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co34 = (input: any): any => ({
        oneOf: Array.isArray(input.oneOf)
          ? $cp1(input.oneOf)
          : (input.oneOf as any),
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $co35 = (input: any): any => ({
        type: input.type as any,
        deprecated: input.deprecated as any,
        title: input.title as any,
        description: input.description as any,
        "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
          ? $cp3(input["x-typia-jsDocTags"])
          : (input["x-typia-jsDocTags"] as any),
        "x-typia-required": input["x-typia-required"] as any,
        "x-typia-optional": input["x-typia-optional"] as any,
        "x-typia-rest": input["x-typia-rest"] as any,
        $id: input.$id as any,
        $recursiveAnchor: input.$recursiveAnchor as any,
      });
      const $cu0 = (input: any): any =>
        (() => {
          if ("integer" === input.type) return $co9(input);
          else if (
            "object" === typeof input.items &&
            null !== input.items &&
            false === Array.isArray(input.items) &&
            $iu0(input.items)
          )
            return $co12(input);
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
            return $co13(input);
          else if ("object" === input.type) return $co14(input);
          else if (undefined !== input.$ref) return $co16(input);
          else if ("null" === input.type) return $co17(input);
          else if (undefined !== input.oneOf) return $co18(input);
          else
            return (() => {
              if ($io5(input)) return $co5(input);
              if ($io4(input)) return $co4(input);
              if ($io1(input)) return $co1(input);
              if ($io6(input)) return $co6(input);
              if ($io10(input)) return $co10(input);
              if ($io11(input)) return $co11(input);
              if ($io19(input)) return $co19(input);
              $throws({
                expected:
                  '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                value: input,
              });
            })();
        })();
      const $cu1 = (input: any): any =>
        (() => {
          if ("integer" === input.type) return $co26(input);
          else if (
            "object" === typeof input.items &&
            null !== input.items &&
            false === Array.isArray(input.items) &&
            $iu0(input.items)
          )
            return $co29(input);
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
            return $co30(input);
          else if ("object" === input.type) return $co31(input);
          else if (undefined !== input.$ref) return $co32(input);
          else if ("null" === input.type) return $co33(input);
          else if (undefined !== input.oneOf) return $co34(input);
          else
            return (() => {
              if ($io24(input)) return $co24(input);
              if ($io23(input)) return $co23(input);
              if ($io22(input)) return $co22(input);
              if ($io25(input)) return $co25(input);
              if ($io27(input)) return $co27(input);
              if ($io28(input)) return $co28(input);
              if ($io35(input)) return $co35(input);
              $throws({
                expected:
                  '(IEnumeration<"string"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"boolean"> & IIdentified | IBoolean & IIdentified | INumber & IIdentified | IString & IIdentified | IUnknown & IIdentified)',
                value: input,
              });
            })();
        })();
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
