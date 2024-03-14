import typia from "typia";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { UltimateUnion } from "../../../structures/UltimateUnion";
export const test_json_createValidateStringify_UltimateUnion =
  _test_json_validateStringify("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    (input: UltimateUnion): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<UltimateUnion> => {
        const errors = [] as any[];
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
            $io19(input.components) &&
            ("ajv" === input.purpose || "swagger" === input.purpose) &&
            "boolean" === typeof input.surplus;
          const $io1 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "boolean" === typeof elem) &&
            "boolean" === input.type &&
            (undefined === input["default"] ||
              "boolean" === typeof input["default"]) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
                input.exclusive.every(
                  (elem: any) => "string" === typeof elem,
                ))) &&
            true &&
            (undefined === input.validate ||
              "string" === typeof input.validate);
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
          const $io9 = (input: any): boolean =>
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.pattern ||
              "string" === typeof input.pattern) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            "object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties) &&
            $io14(input.properties) &&
            (undefined === input.required ||
              (Array.isArray(input.required) &&
                input.required.every(
                  (elem: any) => "string" === typeof elem,
                ))) &&
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
                false ===
                  Array.isArray(input["x-typia-additionalProperties"]) &&
                $iu0(input["x-typia-additionalProperties"]))) &&
            "object" === input.type &&
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
          const $io15 = (input: any): boolean =>
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
          const $io16 = (input: any): boolean =>
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
          const $io17 = (input: any): boolean =>
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
          const $io18 = (input: any): boolean =>
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
              return (
                "object" === typeof value &&
                null !== value &&
                false === Array.isArray(value) &&
                $iu1(value)
              );
            });
          const $io21 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "boolean" === typeof elem) &&
            "boolean" === input.type &&
            (undefined === input["default"] ||
              "boolean" === typeof input["default"]) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
          const $io22 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            "number" === input.type &&
            (undefined === input["default"] ||
              ("number" === typeof input["default"] &&
                Number.isFinite(input["default"]))) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            input["enum"].every((elem: any) => "string" === typeof elem) &&
            "string" === input.type &&
            (undefined === input["default"] ||
              "string" === typeof input["default"]) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input["x-typia-typeTags"] ||
              (Array.isArray(input["x-typia-typeTags"]) &&
                input["x-typia-typeTags"].every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
                ))) &&
            (undefined === input["default"] ||
              "boolean" === typeof input["default"]) &&
            "boolean" === input.type &&
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.pattern ||
              "string" === typeof input.pattern) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
            "object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties) &&
            $io14(input.properties) &&
            (undefined === input.required ||
              (Array.isArray(input.required) &&
                input.required.every(
                  (elem: any) => "string" === typeof elem,
                ))) &&
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
                false ===
                  Array.isArray(input["x-typia-additionalProperties"]) &&
                $iu0(input["x-typia-additionalProperties"]))) &&
            "object" === input.type &&
            (undefined === input.nullable ||
              "boolean" === typeof input.nullable) &&
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
          const $io32 = (input: any): boolean =>
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
          const $io33 = (input: any): boolean =>
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
          const $io34 = (input: any): boolean =>
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
                  if ($io4(input)) return $io4(input);
                  if ($io1(input)) return $io1(input);
                  if ($io6(input)) return $io6(input);
                  if ($io9(input)) return $io9(input);
                  if ($io10(input)) return $io10(input);
                  if ($io18(input)) return $io18(input);
                  return false;
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
                  if ($io22(input)) return $io22(input);
                  if ($io21(input)) return $io21(input);
                  if ($io24(input)) return $io24(input);
                  if ($io26(input)) return $io26(input);
                  if ($io27(input)) return $io27(input);
                  if ($io34(input)) return $io34(input);
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
        if (false === __is(input)) {
          const $report = (typia.json.createValidateStringify as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is UltimateUnion => {
            const $join = (typia.json.createValidateStringify as any).join;
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.schemas) ||
                  $report(_exceptionable, {
                    path: _path + ".schemas",
                    expected: "Array<IJsonSchema>",
                    value: input.schemas,
                  })) &&
                  input.schemas
                    .map(
                      (elem: any, _index2: number) =>
                        ((("object" === typeof elem &&
                          null !== elem &&
                          false === Array.isArray(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".schemas[" + _index2 + "]",
                            expected:
                              '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: elem,
                          })) &&
                          $vu0(
                            elem,
                            _path + ".schemas[" + _index2 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".schemas[" + _index2 + "]",
                          expected:
                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".schemas",
                    expected: "Array<IJsonSchema>",
                    value: input.schemas,
                  }),
                ((("object" === typeof input.components &&
                  null !== input.components &&
                  false === Array.isArray(input.components)) ||
                  $report(_exceptionable, {
                    path: _path + ".components",
                    expected: "IJsonComponents",
                    value: input.components,
                  })) &&
                  $vo19(
                    input.components,
                    _path + ".components",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".components",
                    expected: "IJsonComponents",
                    value: input.components,
                  }),
                "ajv" === input.purpose ||
                  "swagger" === input.purpose ||
                  $report(_exceptionable, {
                    path: _path + ".purpose",
                    expected: '("ajv" | "swagger")',
                    value: input.purpose,
                  }),
                "boolean" === typeof input.surplus ||
                  $report(_exceptionable, {
                    path: _path + ".surplus",
                    expected: "boolean",
                    value: input.surplus,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input["enum"]) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<boolean>",
                    value: input["enum"],
                  })) &&
                  input["enum"]
                    .map(
                      (elem: any, _index3: number) =>
                        "boolean" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + '["enum"][' + _index3 + "]",
                          expected: "boolean",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<boolean>",
                    value: input["enum"],
                  }),
                "boolean" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"boolean"',
                    value: input.type,
                  }),
                undefined === input["default"] ||
                  "boolean" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(boolean | undefined)",
                    value: input["default"],
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index4: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index4 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index4 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index4 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                undefined === input.text ||
                  ((Array.isArray(input.text) ||
                    $report(_exceptionable, {
                      path: _path + ".text",
                      expected: "(Array<IJsDocTagInfo.IText> | undefined)",
                      value: input.text,
                    })) &&
                    input.text
                      .map(
                        (elem: any, _index5: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".text[" + _index5 + "]",
                              expected: "IJsDocTagInfo.IText",
                              value: elem,
                            })) &&
                            $vo3(
                              elem,
                              _path + ".text[" + _index5 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".text[" + _index5 + "]",
                            expected: "IJsDocTagInfo.IText",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".text",
                    expected: "(Array<IJsDocTagInfo.IText> | undefined)",
                    value: input.text,
                  }),
              ].every((flag: boolean) => flag);
            const $vo3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.text ||
                  $report(_exceptionable, {
                    path: _path + ".text",
                    expected: "string",
                    value: input.text,
                  }),
                "string" === typeof input.kind ||
                  $report(_exceptionable, {
                    path: _path + ".kind",
                    expected: "string",
                    value: input.kind,
                  }),
              ].every((flag: boolean) => flag);
            const $vo4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input["enum"]) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<number>",
                    value: input["enum"],
                  })) &&
                  input["enum"]
                    .map(
                      (elem: any, _index6: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $report(_exceptionable, {
                          path: _path + '["enum"][' + _index6 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<number>",
                    value: input["enum"],
                  }),
                "number" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"number"',
                    value: input.type,
                  }),
                undefined === input["default"] ||
                  ("number" === typeof input["default"] &&
                    Number.isFinite(input["default"])) ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(number | undefined)",
                    value: input["default"],
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index7: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index7 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index7 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index7 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo5 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input["enum"]) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<string>",
                    value: input["enum"],
                  })) &&
                  input["enum"]
                    .map(
                      (elem: any, _index8: number) =>
                        "string" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + '["enum"][' + _index8 + "]",
                          expected: "string",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<string>",
                    value: input["enum"],
                  }),
                "string" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"string"',
                    value: input.type,
                  }),
                undefined === input["default"] ||
                  "string" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(string | undefined)",
                    value: input["default"],
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index9: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index9 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index9 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index9 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo6 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index10: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index10 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index10 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index10 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  "boolean" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(boolean | undefined)",
                    value: input["default"],
                  }),
                "boolean" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"boolean"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index11: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index11 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index11 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index11 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo7 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "array" === input.target ||
                  "bigint" === input.target ||
                  "boolean" === input.target ||
                  "number" === input.target ||
                  "string" === input.target ||
                  $report(_exceptionable, {
                    path: _path + ".target",
                    expected:
                      '("array" | "bigint" | "boolean" | "number" | "string")',
                    value: input.target,
                  }),
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                "string" === typeof input.kind ||
                  $report(_exceptionable, {
                    path: _path + ".kind",
                    expected: "string",
                    value: input.kind,
                  }),
                (null !== input.exclusive ||
                  $report(_exceptionable, {
                    path: _path + ".exclusive",
                    expected: "(Array<string> | boolean)",
                    value: input.exclusive,
                  })) &&
                  (undefined !== input.exclusive ||
                    $report(_exceptionable, {
                      path: _path + ".exclusive",
                      expected: "(Array<string> | boolean)",
                      value: input.exclusive,
                    })) &&
                  ("boolean" === typeof input.exclusive ||
                    ((Array.isArray(input.exclusive) ||
                      $report(_exceptionable, {
                        path: _path + ".exclusive",
                        expected: "(Array<string> | boolean)",
                        value: input.exclusive,
                      })) &&
                      input.exclusive
                        .map(
                          (elem: any, _index12: number) =>
                            "string" === typeof elem ||
                            $report(_exceptionable, {
                              path: _path + ".exclusive[" + _index12 + "]",
                              expected: "string",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".exclusive",
                      expected: "(Array<string> | boolean)",
                      value: input.exclusive,
                    })),
                true,
                undefined === input.validate ||
                  "string" === typeof input.validate ||
                  $report(_exceptionable, {
                    path: _path + ".validate",
                    expected: "(string | undefined)",
                    value: input.validate,
                  }),
              ].every((flag: boolean) => flag);
            const $vo8 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.minimum ||
                  ("number" === typeof input.minimum &&
                    ((Math.floor(input.minimum) === input.minimum &&
                      -2147483648 <= input.minimum &&
                      input.minimum <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: 'number & Type<"int32">',
                        value: input.minimum,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: '((number & Type<"int32">) | undefined)',
                    value: input.minimum,
                  }),
                undefined === input.maximum ||
                  ("number" === typeof input.maximum &&
                    ((Math.floor(input.maximum) === input.maximum &&
                      -2147483648 <= input.maximum &&
                      input.maximum <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: 'number & Type<"int32">',
                        value: input.maximum,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: '((number & Type<"int32">) | undefined)',
                    value: input.maximum,
                  }),
                undefined === input.exclusiveMinimum ||
                  "boolean" === typeof input.exclusiveMinimum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMinimum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMinimum,
                  }),
                undefined === input.exclusiveMaximum ||
                  "boolean" === typeof input.exclusiveMaximum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMaximum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMaximum,
                  }),
                undefined === input.multipleOf ||
                  ("number" === typeof input.multipleOf &&
                    ((Math.floor(input.multipleOf) === input.multipleOf &&
                      -2147483648 <= input.multipleOf &&
                      input.multipleOf <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: 'number & Type<"int32">',
                        value: input.multipleOf,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: '((number & Type<"int32">) | undefined)',
                    value: input.multipleOf,
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index13: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index13 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index13 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index13 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  ("number" === typeof input["default"] &&
                    Number.isFinite(input["default"])) ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(number | undefined)",
                    value: input["default"],
                  }),
                "integer" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"integer"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index14: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index14 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index14 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index14 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo9 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.minimum ||
                  ("number" === typeof input.minimum &&
                    Number.isFinite(input.minimum)) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "(number | undefined)",
                    value: input.minimum,
                  }),
                undefined === input.maximum ||
                  ("number" === typeof input.maximum &&
                    Number.isFinite(input.maximum)) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "(number | undefined)",
                    value: input.maximum,
                  }),
                undefined === input.exclusiveMinimum ||
                  "boolean" === typeof input.exclusiveMinimum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMinimum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMinimum,
                  }),
                undefined === input.exclusiveMaximum ||
                  "boolean" === typeof input.exclusiveMaximum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMaximum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMaximum,
                  }),
                undefined === input.multipleOf ||
                  ("number" === typeof input.multipleOf &&
                    Number.isFinite(input.multipleOf)) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "(number | undefined)",
                    value: input.multipleOf,
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index15: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index15 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index15 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index15 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  ("number" === typeof input["default"] &&
                    Number.isFinite(input["default"])) ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(number | undefined)",
                    value: input["default"],
                  }),
                "number" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"number"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index16: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index16 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index16 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index16 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo10 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.minLength ||
                  ("number" === typeof input.minLength &&
                    ((Math.floor(input.minLength) === input.minLength &&
                      0 <= input.minLength &&
                      input.minLength <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".minLength",
                        expected: 'number & Type<"uint32">',
                        value: input.minLength,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minLength",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.minLength,
                  }),
                undefined === input.maxLength ||
                  ("number" === typeof input.maxLength &&
                    ((Math.floor(input.maxLength) === input.maxLength &&
                      0 <= input.maxLength &&
                      input.maxLength <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".maxLength",
                        expected: 'number & Type<"uint32">',
                        value: input.maxLength,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maxLength",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.maxLength,
                  }),
                undefined === input.pattern ||
                  "string" === typeof input.pattern ||
                  $report(_exceptionable, {
                    path: _path + ".pattern",
                    expected: "(string | undefined)",
                    value: input.pattern,
                  }),
                undefined === input.format ||
                  "string" === typeof input.format ||
                  $report(_exceptionable, {
                    path: _path + ".format",
                    expected: "(string | undefined)",
                    value: input.format,
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index17: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index17 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index17 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index17 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  "string" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(string | undefined)",
                    value: input["default"],
                  }),
                "string" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"string"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index18: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index18 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index18 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index18 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo11 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.items &&
                  null !== input.items &&
                  false === Array.isArray(input.items)) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: input.items,
                  })) &&
                  $vu0(
                    input.items,
                    _path + ".items",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: input.items,
                  }),
                undefined === input.minItems ||
                  ("number" === typeof input.minItems &&
                    ((Math.floor(input.minItems) === input.minItems &&
                      0 <= input.minItems &&
                      input.minItems <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".minItems",
                        expected: 'number & Type<"uint32">',
                        value: input.minItems,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minItems",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.minItems,
                  }),
                undefined === input.maxItems ||
                  ("number" === typeof input.maxItems &&
                    ((Math.floor(input.maxItems) === input.maxItems &&
                      0 <= input.maxItems &&
                      input.maxItems <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: 'number & Type<"uint32">',
                        value: input.maxItems,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maxItems",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.maxItems,
                  }),
                undefined === input["x-typia-tuple"] ||
                  ((("object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-tuple"]',
                      expected: "(IJsonSchema.ITuple | undefined)",
                      value: input["x-typia-tuple"],
                    })) &&
                    $vo12(
                      input["x-typia-tuple"],
                      _path + '["x-typia-tuple"]',
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-tuple"]',
                    expected: "(IJsonSchema.ITuple | undefined)",
                    value: input["x-typia-tuple"],
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index19: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index19 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index19 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index19 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                "array" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"array"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index20: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index20 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index20 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index20 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo12 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.items) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<IJsonSchema>",
                    value: input.items,
                  })) &&
                  input.items
                    .map(
                      (elem: any, _index21: number) =>
                        ((("object" === typeof elem &&
                          null !== elem &&
                          false === Array.isArray(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".items[" + _index21 + "]",
                            expected:
                              '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: elem,
                          })) &&
                          $vu0(
                            elem,
                            _path + ".items[" + _index21 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".items[" + _index21 + "]",
                          expected:
                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<IJsonSchema>",
                    value: input.items,
                  }),
                ("number" === typeof input.minItems &&
                  ((Math.floor(input.minItems) === input.minItems &&
                    0 <= input.minItems &&
                    input.minItems <= 4294967295) ||
                    $report(_exceptionable, {
                      path: _path + ".minItems",
                      expected: 'number & Type<"uint32">',
                      value: input.minItems,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minItems",
                    expected: '(number & Type<"uint32">)',
                    value: input.minItems,
                  }),
                undefined === input.maxItems ||
                  ("number" === typeof input.maxItems &&
                    ((Math.floor(input.maxItems) === input.maxItems &&
                      0 <= input.maxItems &&
                      input.maxItems <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: 'number & Type<"uint32">',
                        value: input.maxItems,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maxItems",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.maxItems,
                  }),
                "array" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"array"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index22: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index22 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index22 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index22 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo13 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.properties &&
                  null !== input.properties &&
                  false === Array.isArray(input.properties)) ||
                  $report(_exceptionable, {
                    path: _path + ".properties",
                    expected: "Record<string, IJsonSchema>",
                    value: input.properties,
                  })) &&
                  $vo14(
                    input.properties,
                    _path + ".properties",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".properties",
                    expected: "Record<string, IJsonSchema>",
                    value: input.properties,
                  }),
                undefined === input.required ||
                  ((Array.isArray(input.required) ||
                    $report(_exceptionable, {
                      path: _path + ".required",
                      expected: "(Array<string> | undefined)",
                      value: input.required,
                    })) &&
                    input.required
                      .map(
                        (elem: any, _index23: number) =>
                          "string" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + ".required[" + _index23 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".required",
                    expected: "(Array<string> | undefined)",
                    value: input.required,
                  }),
                undefined === input.patternProperties ||
                  ((("object" === typeof input.patternProperties &&
                    null !== input.patternProperties &&
                    false === Array.isArray(input.patternProperties)) ||
                    $report(_exceptionable, {
                      path: _path + ".patternProperties",
                      expected: "(Record<string, IJsonSchema> | undefined)",
                      value: input.patternProperties,
                    })) &&
                    $vo14(
                      input.patternProperties,
                      _path + ".patternProperties",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".patternProperties",
                    expected: "(Record<string, IJsonSchema> | undefined)",
                    value: input.patternProperties,
                  }),
                undefined === input.additionalProperties ||
                  ((("object" === typeof input.additionalProperties &&
                    null !== input.additionalProperties &&
                    false === Array.isArray(input.additionalProperties)) ||
                    $report(_exceptionable, {
                      path: _path + ".additionalProperties",
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                      value: input.additionalProperties,
                    })) &&
                    $vu0(
                      input.additionalProperties,
                      _path + ".additionalProperties",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".additionalProperties",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                    value: input.additionalProperties,
                  }),
                undefined === input["x-typia-patternProperties"] ||
                  ((("object" === typeof input["x-typia-patternProperties"] &&
                    null !== input["x-typia-patternProperties"] &&
                    false ===
                      Array.isArray(input["x-typia-patternProperties"])) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-patternProperties"]',
                      expected: "(Record<string, IJsonSchema> | undefined)",
                      value: input["x-typia-patternProperties"],
                    })) &&
                    $vo14(
                      input["x-typia-patternProperties"],
                      _path + '["x-typia-patternProperties"]',
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-patternProperties"]',
                    expected: "(Record<string, IJsonSchema> | undefined)",
                    value: input["x-typia-patternProperties"],
                  }),
                undefined === input["x-typia-additionalProperties"] ||
                  ((("object" ===
                    typeof input["x-typia-additionalProperties"] &&
                    null !== input["x-typia-additionalProperties"] &&
                    false ===
                      Array.isArray(input["x-typia-additionalProperties"])) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-additionalProperties"]',
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                      value: input["x-typia-additionalProperties"],
                    })) &&
                    $vu0(
                      input["x-typia-additionalProperties"],
                      _path + '["x-typia-additionalProperties"]',
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-additionalProperties"]',
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                    value: input["x-typia-additionalProperties"],
                  }),
                "object" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"object"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index24: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index24 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index24 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index24 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo14 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                false === _exceptionable ||
                  Object.keys(input)
                    .map((key: any) => {
                      const value = input[key];
                      if (undefined === value) return true;
                      return (
                        ((("object" === typeof value &&
                          null !== value &&
                          false === Array.isArray(value)) ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected:
                              '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: value,
                          })) &&
                          $vu0(
                            value,
                            _path + $join(key),
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + $join(key),
                          expected:
                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                          value: value,
                        })
                      );
                    })
                    .every((flag: boolean) => flag),
              ].every((flag: boolean) => flag);
            const $vo15 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.$ref ||
                  $report(_exceptionable, {
                    path: _path + ".$ref",
                    expected: "string",
                    value: input.$ref,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index25: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index25 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index25 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index25 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo16 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "null" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"null"',
                    value: input.type,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index26: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index26 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index26 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index26 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo17 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.oneOf) ||
                  $report(_exceptionable, {
                    path: _path + ".oneOf",
                    expected: "Array<IJsonSchema>",
                    value: input.oneOf,
                  })) &&
                  input.oneOf
                    .map(
                      (elem: any, _index27: number) =>
                        ((("object" === typeof elem &&
                          null !== elem &&
                          false === Array.isArray(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".oneOf[" + _index27 + "]",
                            expected:
                              '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: elem,
                          })) &&
                          $vu0(
                            elem,
                            _path + ".oneOf[" + _index27 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".oneOf[" + _index27 + "]",
                          expected:
                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".oneOf",
                    expected: "Array<IJsonSchema>",
                    value: input.oneOf,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index28: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index28 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index28 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index28 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo18 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                (null !== input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: "undefined",
                    value: input.type,
                  })) &&
                  (undefined === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: "undefined",
                      value: input.type,
                    })),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index29: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index29 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index29 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index29 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
              ].every((flag: boolean) => flag);
            const $vo19 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.schemas ||
                  ((("object" === typeof input.schemas &&
                    null !== input.schemas &&
                    false === Array.isArray(input.schemas)) ||
                    $report(_exceptionable, {
                      path: _path + ".schemas",
                      expected:
                        "(Record<string, IJsonComponents.IAlias> | undefined)",
                      value: input.schemas,
                    })) &&
                    $vo20(
                      input.schemas,
                      _path + ".schemas",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".schemas",
                    expected:
                      "(Record<string, IJsonComponents.IAlias> | undefined)",
                    value: input.schemas,
                  }),
              ].every((flag: boolean) => flag);
            const $vo20 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                false === _exceptionable ||
                  Object.keys(input)
                    .map((key: any) => {
                      const value = input[key];
                      if (undefined === value) return true;
                      return (
                        ((("object" === typeof value &&
                          null !== value &&
                          false === Array.isArray(value)) ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected:
                              '(IArray & IIdentified | IBoolean & IIdentified | IEnumeration<"boolean"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"string"> & IIdentified | IInteger & IIdentified | INullOnly & IIdentified | INumber & IIdentified | IObject & IIdentified | IOneOf & IIdentified | IReference & IIdentified | IString & IIdentified | ITuple & IIdentified | IUnknown & IIdentified)',
                            value: value,
                          })) &&
                          $vu1(
                            value,
                            _path + $join(key),
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + $join(key),
                          expected:
                            '(IArray & IIdentified | IBoolean & IIdentified | IEnumeration<"boolean"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"string"> & IIdentified | IInteger & IIdentified | INullOnly & IIdentified | INumber & IIdentified | IObject & IIdentified | IOneOf & IIdentified | IReference & IIdentified | IString & IIdentified | ITuple & IIdentified | IUnknown & IIdentified)',
                          value: value,
                        })
                      );
                    })
                    .every((flag: boolean) => flag),
              ].every((flag: boolean) => flag);
            const $vo21 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input["enum"]) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<boolean>",
                    value: input["enum"],
                  })) &&
                  input["enum"]
                    .map(
                      (elem: any, _index30: number) =>
                        "boolean" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + '["enum"][' + _index30 + "]",
                          expected: "boolean",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<boolean>",
                    value: input["enum"],
                  }),
                "boolean" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"boolean"',
                    value: input.type,
                  }),
                undefined === input["default"] ||
                  "boolean" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(boolean | undefined)",
                    value: input["default"],
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index31: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index31 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index31 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index31 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo22 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input["enum"]) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<number>",
                    value: input["enum"],
                  })) &&
                  input["enum"]
                    .map(
                      (elem: any, _index32: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $report(_exceptionable, {
                          path: _path + '["enum"][' + _index32 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<number>",
                    value: input["enum"],
                  }),
                "number" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"number"',
                    value: input.type,
                  }),
                undefined === input["default"] ||
                  ("number" === typeof input["default"] &&
                    Number.isFinite(input["default"])) ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(number | undefined)",
                    value: input["default"],
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index33: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index33 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index33 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index33 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo23 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input["enum"]) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<string>",
                    value: input["enum"],
                  })) &&
                  input["enum"]
                    .map(
                      (elem: any, _index34: number) =>
                        "string" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + '["enum"][' + _index34 + "]",
                          expected: "string",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["enum"]',
                    expected: "Array<string>",
                    value: input["enum"],
                  }),
                "string" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"string"',
                    value: input.type,
                  }),
                undefined === input["default"] ||
                  "string" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(string | undefined)",
                    value: input["default"],
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index35: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index35 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index35 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index35 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo24 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index36: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index36 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index36 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index36 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  "boolean" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(boolean | undefined)",
                    value: input["default"],
                  }),
                "boolean" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"boolean"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index37: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index37 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index37 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index37 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo25 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.minimum ||
                  ("number" === typeof input.minimum &&
                    ((Math.floor(input.minimum) === input.minimum &&
                      -2147483648 <= input.minimum &&
                      input.minimum <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".minimum",
                        expected: 'number & Type<"int32">',
                        value: input.minimum,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: '((number & Type<"int32">) | undefined)',
                    value: input.minimum,
                  }),
                undefined === input.maximum ||
                  ("number" === typeof input.maximum &&
                    ((Math.floor(input.maximum) === input.maximum &&
                      -2147483648 <= input.maximum &&
                      input.maximum <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".maximum",
                        expected: 'number & Type<"int32">',
                        value: input.maximum,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: '((number & Type<"int32">) | undefined)',
                    value: input.maximum,
                  }),
                undefined === input.exclusiveMinimum ||
                  "boolean" === typeof input.exclusiveMinimum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMinimum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMinimum,
                  }),
                undefined === input.exclusiveMaximum ||
                  "boolean" === typeof input.exclusiveMaximum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMaximum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMaximum,
                  }),
                undefined === input.multipleOf ||
                  ("number" === typeof input.multipleOf &&
                    ((Math.floor(input.multipleOf) === input.multipleOf &&
                      -2147483648 <= input.multipleOf &&
                      input.multipleOf <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: 'number & Type<"int32">',
                        value: input.multipleOf,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: '((number & Type<"int32">) | undefined)',
                    value: input.multipleOf,
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index38: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index38 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index38 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index38 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  ("number" === typeof input["default"] &&
                    Number.isFinite(input["default"])) ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(number | undefined)",
                    value: input["default"],
                  }),
                "integer" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"integer"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index39: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index39 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index39 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index39 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo26 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.minimum ||
                  ("number" === typeof input.minimum &&
                    Number.isFinite(input.minimum)) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "(number | undefined)",
                    value: input.minimum,
                  }),
                undefined === input.maximum ||
                  ("number" === typeof input.maximum &&
                    Number.isFinite(input.maximum)) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "(number | undefined)",
                    value: input.maximum,
                  }),
                undefined === input.exclusiveMinimum ||
                  "boolean" === typeof input.exclusiveMinimum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMinimum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMinimum,
                  }),
                undefined === input.exclusiveMaximum ||
                  "boolean" === typeof input.exclusiveMaximum ||
                  $report(_exceptionable, {
                    path: _path + ".exclusiveMaximum",
                    expected: "(boolean | undefined)",
                    value: input.exclusiveMaximum,
                  }),
                undefined === input.multipleOf ||
                  ("number" === typeof input.multipleOf &&
                    Number.isFinite(input.multipleOf)) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "(number | undefined)",
                    value: input.multipleOf,
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index40: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index40 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index40 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index40 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  ("number" === typeof input["default"] &&
                    Number.isFinite(input["default"])) ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(number | undefined)",
                    value: input["default"],
                  }),
                "number" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"number"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index41: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index41 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index41 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index41 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo27 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.minLength ||
                  ("number" === typeof input.minLength &&
                    ((Math.floor(input.minLength) === input.minLength &&
                      0 <= input.minLength &&
                      input.minLength <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".minLength",
                        expected: 'number & Type<"uint32">',
                        value: input.minLength,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minLength",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.minLength,
                  }),
                undefined === input.maxLength ||
                  ("number" === typeof input.maxLength &&
                    ((Math.floor(input.maxLength) === input.maxLength &&
                      0 <= input.maxLength &&
                      input.maxLength <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".maxLength",
                        expected: 'number & Type<"uint32">',
                        value: input.maxLength,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maxLength",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.maxLength,
                  }),
                undefined === input.pattern ||
                  "string" === typeof input.pattern ||
                  $report(_exceptionable, {
                    path: _path + ".pattern",
                    expected: "(string | undefined)",
                    value: input.pattern,
                  }),
                undefined === input.format ||
                  "string" === typeof input.format ||
                  $report(_exceptionable, {
                    path: _path + ".format",
                    expected: "(string | undefined)",
                    value: input.format,
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index42: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index42 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index42 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index42 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                undefined === input["default"] ||
                  "string" === typeof input["default"] ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: "(string | undefined)",
                    value: input["default"],
                  }),
                "string" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"string"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index43: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index43 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index43 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index43 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo28 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.items &&
                  null !== input.items &&
                  false === Array.isArray(input.items)) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: input.items,
                  })) &&
                  $vu0(
                    input.items,
                    _path + ".items",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                    value: input.items,
                  }),
                undefined === input.minItems ||
                  ("number" === typeof input.minItems &&
                    ((Math.floor(input.minItems) === input.minItems &&
                      0 <= input.minItems &&
                      input.minItems <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".minItems",
                        expected: 'number & Type<"uint32">',
                        value: input.minItems,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minItems",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.minItems,
                  }),
                undefined === input.maxItems ||
                  ("number" === typeof input.maxItems &&
                    ((Math.floor(input.maxItems) === input.maxItems &&
                      0 <= input.maxItems &&
                      input.maxItems <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: 'number & Type<"uint32">',
                        value: input.maxItems,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maxItems",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.maxItems,
                  }),
                undefined === input["x-typia-tuple"] ||
                  ((("object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-tuple"]',
                      expected: "(IJsonSchema.ITuple | undefined)",
                      value: input["x-typia-tuple"],
                    })) &&
                    $vo12(
                      input["x-typia-tuple"],
                      _path + '["x-typia-tuple"]',
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-tuple"]',
                    expected: "(IJsonSchema.ITuple | undefined)",
                    value: input["x-typia-tuple"],
                  }),
                undefined === input["x-typia-typeTags"] ||
                  ((Array.isArray(input["x-typia-typeTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-typeTags"]',
                      expected: "(Array<IMetadataTypeTag> | undefined)",
                      value: input["x-typia-typeTags"],
                    })) &&
                    input["x-typia-typeTags"]
                      .map(
                        (elem: any, _index44: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-typeTags"][' +
                                _index44 +
                                "]",
                              expected: "IMetadataTypeTag",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + '["x-typia-typeTags"][' + _index44 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-typeTags"][' + _index44 + "]",
                            expected: "IMetadataTypeTag",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-typeTags"]',
                    expected: "(Array<IMetadataTypeTag> | undefined)",
                    value: input["x-typia-typeTags"],
                  }),
                "array" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"array"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index45: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index45 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index45 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index45 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo29 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.items) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<IJsonSchema>",
                    value: input.items,
                  })) &&
                  input.items
                    .map(
                      (elem: any, _index46: number) =>
                        ((("object" === typeof elem &&
                          null !== elem &&
                          false === Array.isArray(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".items[" + _index46 + "]",
                            expected:
                              '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: elem,
                          })) &&
                          $vu0(
                            elem,
                            _path + ".items[" + _index46 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".items[" + _index46 + "]",
                          expected:
                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<IJsonSchema>",
                    value: input.items,
                  }),
                ("number" === typeof input.minItems &&
                  ((Math.floor(input.minItems) === input.minItems &&
                    0 <= input.minItems &&
                    input.minItems <= 4294967295) ||
                    $report(_exceptionable, {
                      path: _path + ".minItems",
                      expected: 'number & Type<"uint32">',
                      value: input.minItems,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minItems",
                    expected: '(number & Type<"uint32">)',
                    value: input.minItems,
                  }),
                undefined === input.maxItems ||
                  ("number" === typeof input.maxItems &&
                    ((Math.floor(input.maxItems) === input.maxItems &&
                      0 <= input.maxItems &&
                      input.maxItems <= 4294967295) ||
                      $report(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: 'number & Type<"uint32">',
                        value: input.maxItems,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maxItems",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.maxItems,
                  }),
                "array" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"array"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index47: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index47 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index47 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index47 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo30 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.properties &&
                  null !== input.properties &&
                  false === Array.isArray(input.properties)) ||
                  $report(_exceptionable, {
                    path: _path + ".properties",
                    expected: "Record<string, IJsonSchema>",
                    value: input.properties,
                  })) &&
                  $vo14(
                    input.properties,
                    _path + ".properties",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".properties",
                    expected: "Record<string, IJsonSchema>",
                    value: input.properties,
                  }),
                undefined === input.required ||
                  ((Array.isArray(input.required) ||
                    $report(_exceptionable, {
                      path: _path + ".required",
                      expected: "(Array<string> | undefined)",
                      value: input.required,
                    })) &&
                    input.required
                      .map(
                        (elem: any, _index48: number) =>
                          "string" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + ".required[" + _index48 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".required",
                    expected: "(Array<string> | undefined)",
                    value: input.required,
                  }),
                undefined === input.patternProperties ||
                  ((("object" === typeof input.patternProperties &&
                    null !== input.patternProperties &&
                    false === Array.isArray(input.patternProperties)) ||
                    $report(_exceptionable, {
                      path: _path + ".patternProperties",
                      expected: "(Record<string, IJsonSchema> | undefined)",
                      value: input.patternProperties,
                    })) &&
                    $vo14(
                      input.patternProperties,
                      _path + ".patternProperties",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".patternProperties",
                    expected: "(Record<string, IJsonSchema> | undefined)",
                    value: input.patternProperties,
                  }),
                undefined === input.additionalProperties ||
                  ((("object" === typeof input.additionalProperties &&
                    null !== input.additionalProperties &&
                    false === Array.isArray(input.additionalProperties)) ||
                    $report(_exceptionable, {
                      path: _path + ".additionalProperties",
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                      value: input.additionalProperties,
                    })) &&
                    $vu0(
                      input.additionalProperties,
                      _path + ".additionalProperties",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".additionalProperties",
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                    value: input.additionalProperties,
                  }),
                undefined === input["x-typia-patternProperties"] ||
                  ((("object" === typeof input["x-typia-patternProperties"] &&
                    null !== input["x-typia-patternProperties"] &&
                    false ===
                      Array.isArray(input["x-typia-patternProperties"])) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-patternProperties"]',
                      expected: "(Record<string, IJsonSchema> | undefined)",
                      value: input["x-typia-patternProperties"],
                    })) &&
                    $vo14(
                      input["x-typia-patternProperties"],
                      _path + '["x-typia-patternProperties"]',
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-patternProperties"]',
                    expected: "(Record<string, IJsonSchema> | undefined)",
                    value: input["x-typia-patternProperties"],
                  }),
                undefined === input["x-typia-additionalProperties"] ||
                  ((("object" ===
                    typeof input["x-typia-additionalProperties"] &&
                    null !== input["x-typia-additionalProperties"] &&
                    false ===
                      Array.isArray(input["x-typia-additionalProperties"])) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-additionalProperties"]',
                      expected:
                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                      value: input["x-typia-additionalProperties"],
                    })) &&
                    $vu0(
                      input["x-typia-additionalProperties"],
                      _path + '["x-typia-additionalProperties"]',
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-additionalProperties"]',
                    expected:
                      '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                    value: input["x-typia-additionalProperties"],
                  }),
                "object" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"object"',
                    value: input.type,
                  }),
                undefined === input.nullable ||
                  "boolean" === typeof input.nullable ||
                  $report(_exceptionable, {
                    path: _path + ".nullable",
                    expected: "(boolean | undefined)",
                    value: input.nullable,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index49: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index49 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index49 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index49 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo31 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.$ref ||
                  $report(_exceptionable, {
                    path: _path + ".$ref",
                    expected: "string",
                    value: input.$ref,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index50: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index50 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index50 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index50 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo32 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "null" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"null"',
                    value: input.type,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index51: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index51 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index51 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index51 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo33 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.oneOf) ||
                  $report(_exceptionable, {
                    path: _path + ".oneOf",
                    expected: "Array<IJsonSchema>",
                    value: input.oneOf,
                  })) &&
                  input.oneOf
                    .map(
                      (elem: any, _index52: number) =>
                        ((("object" === typeof elem &&
                          null !== elem &&
                          false === Array.isArray(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".oneOf[" + _index52 + "]",
                            expected:
                              '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: elem,
                          })) &&
                          $vu0(
                            elem,
                            _path + ".oneOf[" + _index52 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".oneOf[" + _index52 + "]",
                          expected:
                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IObject | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".oneOf",
                    expected: "Array<IJsonSchema>",
                    value: input.oneOf,
                  }),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index53: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index53 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index53 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index53 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vo34 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                (null !== input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: "undefined",
                    value: input.type,
                  })) &&
                  (undefined === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: "undefined",
                      value: input.type,
                    })),
                undefined === input.deprecated ||
                  "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "(boolean | undefined)",
                    value: input.deprecated,
                  }),
                undefined === input.title ||
                  "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "(string | undefined)",
                    value: input.title,
                  }),
                undefined === input.description ||
                  "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "(string | undefined)",
                    value: input.description,
                  }),
                undefined === input["x-typia-jsDocTags"] ||
                  ((Array.isArray(input["x-typia-jsDocTags"]) ||
                    $report(_exceptionable, {
                      path: _path + '["x-typia-jsDocTags"]',
                      expected: "(Array<IJsDocTagInfo> | undefined)",
                      value: input["x-typia-jsDocTags"],
                    })) &&
                    input["x-typia-jsDocTags"]
                      .map(
                        (elem: any, _index54: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path:
                                _path +
                                '["x-typia-jsDocTags"][' +
                                _index54 +
                                "]",
                              expected: "IJsDocTagInfo",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + '["x-typia-jsDocTags"][' + _index54 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path:
                              _path + '["x-typia-jsDocTags"][' + _index54 + "]",
                            expected: "IJsDocTagInfo",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-jsDocTags"]',
                    expected: "(Array<IJsDocTagInfo> | undefined)",
                    value: input["x-typia-jsDocTags"],
                  }),
                undefined === input["x-typia-required"] ||
                  "boolean" === typeof input["x-typia-required"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-required"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-required"],
                  }),
                undefined === input["x-typia-optional"] ||
                  "boolean" === typeof input["x-typia-optional"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-optional"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-optional"],
                  }),
                undefined === input["x-typia-rest"] ||
                  "boolean" === typeof input["x-typia-rest"] ||
                  $report(_exceptionable, {
                    path: _path + '["x-typia-rest"]',
                    expected: "(boolean | undefined)",
                    value: input["x-typia-rest"],
                  }),
                undefined === input.$id ||
                  "string" === typeof input.$id ||
                  $report(_exceptionable, {
                    path: _path + ".$id",
                    expected: "(string | undefined)",
                    value: input.$id,
                  }),
                undefined === input.$recursiveAnchor ||
                  "boolean" === typeof input.$recursiveAnchor ||
                  $report(_exceptionable, {
                    path: _path + ".$recursiveAnchor",
                    expected: "(boolean | undefined)",
                    value: input.$recursiveAnchor,
                  }),
              ].every((flag: boolean) => flag);
            const $vu0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              (() => {
                if ("integer" === input.type)
                  return $vo8(input, _path, true && _exceptionable);
                else if (
                  "object" === typeof input.items &&
                  null !== input.items &&
                  false === Array.isArray(input.items) &&
                  $vu0(input.items, _path + ".items", false && _exceptionable)
                )
                  return $vo11(input, _path, true && _exceptionable);
                else if (
                  Array.isArray(input.items) &&
                  input.items
                    .map(
                      (elem: any, _index55: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $vu0(
                          elem,
                          _path + ".items[" + _index55 + "]",
                          false && _exceptionable,
                        ),
                    )
                    .every((flag: boolean) => flag)
                )
                  return $vo12(input, _path, true && _exceptionable);
                else if ("object" === input.type)
                  return $vo13(input, _path, true && _exceptionable);
                else if (undefined !== input.$ref)
                  return $vo15(input, _path, true && _exceptionable);
                else if ("null" === input.type)
                  return $vo16(input, _path, true && _exceptionable);
                else if (undefined !== input.oneOf)
                  return $vo17(input, _path, true && _exceptionable);
                else
                  return (
                    $vo5(input, _path, false && _exceptionable) ||
                    $vo4(input, _path, false && _exceptionable) ||
                    $vo1(input, _path, false && _exceptionable) ||
                    $vo6(input, _path, false && _exceptionable) ||
                    $vo9(input, _path, false && _exceptionable) ||
                    $vo10(input, _path, false && _exceptionable) ||
                    $vo18(input, _path, false && _exceptionable)
                  );
              })();
            const $vu1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              (() => {
                if ("integer" === input.type)
                  return $vo25(input, _path, true && _exceptionable);
                else if (
                  "object" === typeof input.items &&
                  null !== input.items &&
                  false === Array.isArray(input.items) &&
                  $vu0(input.items, _path + ".items", false && _exceptionable)
                )
                  return $vo28(input, _path, true && _exceptionable);
                else if (
                  Array.isArray(input.items) &&
                  input.items
                    .map(
                      (elem: any, _index56: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $vu0(
                          elem,
                          _path + ".items[" + _index56 + "]",
                          false && _exceptionable,
                        ),
                    )
                    .every((flag: boolean) => flag)
                )
                  return $vo29(input, _path, true && _exceptionable);
                else if ("object" === input.type)
                  return $vo30(input, _path, true && _exceptionable);
                else if (undefined !== input.$ref)
                  return $vo31(input, _path, true && _exceptionable);
                else if ("null" === input.type)
                  return $vo32(input, _path, true && _exceptionable);
                else if (undefined !== input.oneOf)
                  return $vo33(input, _path, true && _exceptionable);
                else
                  return (
                    $vo23(input, _path, false && _exceptionable) ||
                    $vo22(input, _path, false && _exceptionable) ||
                    $vo21(input, _path, false && _exceptionable) ||
                    $vo24(input, _path, false && _exceptionable) ||
                    $vo26(input, _path, false && _exceptionable) ||
                    $vo27(input, _path, false && _exceptionable) ||
                    $vo34(input, _path, false && _exceptionable)
                  );
              })();
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "UltimateUnion",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "IJsonApplication",
                          value: elem,
                        })) &&
                        $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "IJsonApplication",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "UltimateUnion",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const stringify = (input: UltimateUnion): string => {
        const $io1 = (input: any): boolean =>
          Array.isArray(input["enum"]) &&
          input["enum"].every((elem: any) => "boolean" === typeof elem) &&
          "boolean" === input.type &&
          (undefined === input["default"] ||
            "boolean" === typeof input["default"]) &&
          (undefined === input.title || "string" === typeof input.title) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
              input.exclusive.every(
                (elem: any) => "string" === typeof elem,
              ))) &&
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
            "number" === typeof input["default"]) &&
          "integer" === input.type &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
        const $io9 = (input: any): boolean =>
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
        const $io15 = (input: any): boolean =>
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
        const $io16 = (input: any): boolean =>
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
        const $io17 = (input: any): boolean =>
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
        const $io18 = (input: any): boolean =>
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
            return (
              "object" === typeof value &&
              null !== value &&
              false === Array.isArray(value) &&
              $iu1(value)
            );
          });
        const $io21 = (input: any): boolean =>
          Array.isArray(input["enum"]) &&
          input["enum"].every((elem: any) => "boolean" === typeof elem) &&
          "boolean" === input.type &&
          (undefined === input["default"] ||
            "boolean" === typeof input["default"]) &&
          (undefined === input.title || "string" === typeof input.title) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
        const $io22 = (input: any): boolean =>
          Array.isArray(input["enum"]) &&
          input["enum"].every((elem: any) => "number" === typeof elem) &&
          "number" === input.type &&
          (undefined === input["default"] ||
            "number" === typeof input["default"]) &&
          (undefined === input.title || "string" === typeof input.title) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          input["enum"].every((elem: any) => "string" === typeof elem) &&
          "string" === input.type &&
          (undefined === input["default"] ||
            "string" === typeof input["default"]) &&
          (undefined === input.title || "string" === typeof input.title) &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input["x-typia-typeTags"] ||
            (Array.isArray(input["x-typia-typeTags"]) &&
              input["x-typia-typeTags"].every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io7(elem),
              ))) &&
          (undefined === input["default"] ||
            "boolean" === typeof input["default"]) &&
          "boolean" === input.type &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
            "number" === typeof input["default"]) &&
          "integer" === input.type &&
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
          (undefined === input.nullable ||
            "boolean" === typeof input.nullable) &&
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
        const $io32 = (input: any): boolean =>
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
        const $io33 = (input: any): boolean =>
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
        const $io34 = (input: any): boolean =>
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
              return (
                $io5(input) ||
                $io4(input) ||
                $io1(input) ||
                $io6(input) ||
                $io9(input) ||
                $io10(input) ||
                $io18(input)
              );
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
              return (
                $io23(input) ||
                $io22(input) ||
                $io21(input) ||
                $io24(input) ||
                $io26(input) ||
                $io27(input) ||
                $io34(input)
              );
          })();
        const $string = (typia.json.createValidateStringify as any).string;
        const $throws = (typia.json.createValidateStringify as any).throws;
        const $number = (typia.json.createValidateStringify as any).number;
        const $tail = (typia.json.createValidateStringify as any).tail;
        const $so0 = (input: any): any =>
          `{"schemas":${`[${input.schemas.map((elem: any) => $su0(elem)).join(",")}]`},"components":${$so19(input.components)},"purpose":${(() => {
            if ("string" === typeof input.purpose)
              return $string(input.purpose);
            if ("string" === typeof input.purpose)
              return '"' + input.purpose + '"';
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
          `{${undefined === input.value || "function" === typeof input.value ? "" : `"value":${undefined !== input.value ? JSON.stringify(input.value) : undefined},`}${undefined === input.validate ? "" : `"validate":${undefined !== input.validate ? $string(input.validate) : undefined},`}"target":${(() => {
            if ("string" === typeof input.target) return $string(input.target);
            if ("string" === typeof input.target)
              return '"' + input.target + '"';
            $throws({
              expected:
                '("array" | "bigint" | "boolean" | "number" | "string")',
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
        const $so8 = (input: any): any =>
          `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"integer"',
              value: input.type,
            });
          })()}}`;
        const $so9 = (input: any): any =>
          `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"number"',
              value: input.type,
            });
          })()}}`;
        const $so10 = (input: any): any =>
          `{${undefined === input.minLength ? "" : `"minLength":${undefined !== input.minLength ? $number(input.minLength) : undefined},`}${undefined === input.maxLength ? "" : `"maxLength":${undefined !== input.maxLength ? $number(input.maxLength) : undefined},`}${undefined === input.pattern ? "" : `"pattern":${undefined !== input.pattern ? $string(input.pattern) : undefined},`}${undefined === input.format ? "" : `"format":${undefined !== input.format ? $string(input.format) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"string"',
              value: input.type,
            });
          })()}}`;
        const $so11 = (input: any): any =>
          `{${undefined === input.minItems ? "" : `"minItems":${undefined !== input.minItems ? $number(input.minItems) : undefined},`}${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input["x-typia-tuple"] ? "" : `"x-typia-tuple":${undefined !== input["x-typia-tuple"] ? $so12(input["x-typia-tuple"]) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"items":${$su0(input.items)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"array"',
              value: input.type,
            });
          })()}}`;
        const $so12 = (input: any): any =>
          `{${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"items":${`[${input.items.map((elem: any) => $su0(elem)).join(",")}]`},"minItems":${$number(input.minItems)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"array"',
              value: input.type,
            });
          })()}}`;
        const $so13 = (input: any): any =>
          `{${undefined === input.required ? "" : `"required":${undefined !== input.required ? `[${input.required.map((elem: any) => $string(elem)).join(",")}]` : undefined},`}${undefined === input.patternProperties ? "" : `"patternProperties":${undefined !== input.patternProperties ? $so14(input.patternProperties) : undefined},`}${undefined === input.additionalProperties ? "" : `"additionalProperties":${undefined !== input.additionalProperties ? $su0(input.additionalProperties) : undefined},`}${undefined === input["x-typia-patternProperties"] ? "" : `"x-typia-patternProperties":${undefined !== input["x-typia-patternProperties"] ? $so14(input["x-typia-patternProperties"]) : undefined},`}${undefined === input["x-typia-additionalProperties"] ? "" : `"x-typia-additionalProperties":${undefined !== input["x-typia-additionalProperties"] ? $su0(input["x-typia-additionalProperties"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"properties":${$so14(input.properties)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"object"',
              value: input.type,
            });
          })()}}`;
        const $so14 = (input: any): any =>
          `{${Object.entries(input)
            .map(([key, value]: [string, any]) => {
              if (undefined === value) return "";
              return `${JSON.stringify(key)}:${$su0(value)}`;
            })
            .filter((str: any) => "" !== str)
            .join(",")}}`;
        const $so15 = (input: any): any =>
          `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"$ref":${$string(input.$ref)}}`;
        const $so16 = (input: any): any =>
          `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"null"',
              value: input.type,
            });
          })()}}`;
        const $so17 = (input: any): any =>
          `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}"oneOf":${`[${input.oneOf.map((elem: any) => $su0(elem)).join(",")}]`}}`;
        const $so18 = (input: any): any =>
          `{${$tail(`${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined}`}`)}}`;
        const $so19 = (input: any): any =>
          `{${$tail(`${undefined === input.schemas ? "" : `"schemas":${undefined !== input.schemas ? $so20(input.schemas) : undefined}`}`)}}`;
        const $so20 = (input: any): any =>
          `{${Object.entries(input)
            .map(([key, value]: [string, any]) => {
              if (undefined === value) return "";
              return `${JSON.stringify(key)}:${$su1(value)}`;
            })
            .filter((str: any) => "" !== str)
            .join(",")}}`;
        const $so21 = (input: any): any =>
          `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? input["default"] : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"enum":${`[${input["enum"].map((elem: any) => elem).join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"boolean"',
              value: input.type,
            });
          })()}}`;
        const $so22 = (input: any): any =>
          `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"enum":${`[${input["enum"].map((elem: any) => $number(elem)).join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"number"',
              value: input.type,
            });
          })()}}`;
        const $so23 = (input: any): any =>
          `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"enum":${`[${input["enum"].map((elem: any) => $string(elem)).join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"string"',
              value: input.type,
            });
          })()}}`;
        const $so24 = (input: any): any =>
          `{${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? input["default"] : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"boolean"',
              value: input.type,
            });
          })()}}`;
        const $so25 = (input: any): any =>
          `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"integer"',
              value: input.type,
            });
          })()}}`;
        const $so26 = (input: any): any =>
          `{${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"number"',
              value: input.type,
            });
          })()}}`;
        const $so27 = (input: any): any =>
          `{${undefined === input.minLength ? "" : `"minLength":${undefined !== input.minLength ? $number(input.minLength) : undefined},`}${undefined === input.maxLength ? "" : `"maxLength":${undefined !== input.maxLength ? $number(input.maxLength) : undefined},`}${undefined === input.pattern ? "" : `"pattern":${undefined !== input.pattern ? $string(input.pattern) : undefined},`}${undefined === input.format ? "" : `"format":${undefined !== input.format ? $string(input.format) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"string"',
              value: input.type,
            });
          })()}}`;
        const $so28 = (input: any): any =>
          `{${undefined === input.minItems ? "" : `"minItems":${undefined !== input.minItems ? $number(input.minItems) : undefined},`}${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input["x-typia-tuple"] ? "" : `"x-typia-tuple":${undefined !== input["x-typia-tuple"] ? $so12(input["x-typia-tuple"]) : undefined},`}${undefined === input["x-typia-typeTags"] ? "" : `"x-typia-typeTags":${undefined !== input["x-typia-typeTags"] ? `[${input["x-typia-typeTags"].map((elem: any) => $so7(elem)).join(",")}]` : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"items":${$su0(input.items)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"array"',
              value: input.type,
            });
          })()}}`;
        const $so29 = (input: any): any =>
          `{${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"items":${`[${input.items.map((elem: any) => $su0(elem)).join(",")}]`},"minItems":${$number(input.minItems)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"array"',
              value: input.type,
            });
          })()}}`;
        const $so30 = (input: any): any =>
          `{${undefined === input.required ? "" : `"required":${undefined !== input.required ? `[${input.required.map((elem: any) => $string(elem)).join(",")}]` : undefined},`}${undefined === input.patternProperties ? "" : `"patternProperties":${undefined !== input.patternProperties ? $so14(input.patternProperties) : undefined},`}${undefined === input.additionalProperties ? "" : `"additionalProperties":${undefined !== input.additionalProperties ? $su0(input.additionalProperties) : undefined},`}${undefined === input["x-typia-patternProperties"] ? "" : `"x-typia-patternProperties":${undefined !== input["x-typia-patternProperties"] ? $so14(input["x-typia-patternProperties"]) : undefined},`}${undefined === input["x-typia-additionalProperties"] ? "" : `"x-typia-additionalProperties":${undefined !== input["x-typia-additionalProperties"] ? $su0(input["x-typia-additionalProperties"]) : undefined},`}${undefined === input.nullable ? "" : `"nullable":${undefined !== input.nullable ? input.nullable : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"properties":${$so14(input.properties)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"object"',
              value: input.type,
            });
          })()}}`;
        const $so31 = (input: any): any =>
          `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"$ref":${$string(input.$ref)}}`;
        const $so32 = (input: any): any =>
          `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"null"',
              value: input.type,
            });
          })()}}`;
        const $so33 = (input: any): any =>
          `{${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined},`}"oneOf":${`[${input.oneOf.map((elem: any) => $su0(elem)).join(",")}]`}}`;
        const $so34 = (input: any): any =>
          `{${$tail(`${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input["x-typia-jsDocTags"] ? "" : `"x-typia-jsDocTags":${undefined !== input["x-typia-jsDocTags"] ? `[${input["x-typia-jsDocTags"].map((elem: any) => $so2(elem)).join(",")}]` : undefined},`}${undefined === input["x-typia-required"] ? "" : `"x-typia-required":${undefined !== input["x-typia-required"] ? input["x-typia-required"] : undefined},`}${undefined === input["x-typia-optional"] ? "" : `"x-typia-optional":${undefined !== input["x-typia-optional"] ? input["x-typia-optional"] : undefined},`}${undefined === input["x-typia-rest"] ? "" : `"x-typia-rest":${undefined !== input["x-typia-rest"] ? input["x-typia-rest"] : undefined},`}${undefined === input.$id ? "" : `"$id":${undefined !== input.$id ? $string(input.$id) : undefined},`}${undefined === input.$recursiveAnchor ? "" : `"$recursiveAnchor":${undefined !== input.$recursiveAnchor ? input.$recursiveAnchor : undefined}`}`)}}`;
        const $su0 = (input: any): any =>
          (() => {
            if ("integer" === input.type) return $so8(input);
            else if (
              "object" === typeof input.items &&
              null !== input.items &&
              false === Array.isArray(input.items) &&
              $iu0(input.items)
            )
              return $so11(input);
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
              return $so12(input);
            else if ("object" === input.type) return $so13(input);
            else if (undefined !== input.$ref) return $so15(input);
            else if ("null" === input.type) return $so16(input);
            else if (undefined !== input.oneOf) return $so17(input);
            else
              return (() => {
                if ($io5(input)) return $so5(input);
                if ($io4(input)) return $so4(input);
                if ($io1(input)) return $so1(input);
                if ($io6(input)) return $so6(input);
                if ($io9(input)) return $so9(input);
                if ($io10(input)) return $so10(input);
                if ($io18(input)) return $so18(input);
                $throws({
                  expected:
                    '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                  value: input,
                });
              })();
          })();
        const $su1 = (input: any): any =>
          (() => {
            if ("integer" === input.type) return $so25(input);
            else if (
              "object" === typeof input.items &&
              null !== input.items &&
              false === Array.isArray(input.items) &&
              $iu0(input.items)
            )
              return $so28(input);
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
              return $so29(input);
            else if ("object" === input.type) return $so30(input);
            else if (undefined !== input.$ref) return $so31(input);
            else if ("null" === input.type) return $so32(input);
            else if (undefined !== input.oneOf) return $so33(input);
            else
              return (() => {
                if ($io23(input)) return $so23(input);
                if ($io22(input)) return $so22(input);
                if ($io21(input)) return $so21(input);
                if ($io24(input)) return $so24(input);
                if ($io26(input)) return $so26(input);
                if ($io27(input)) return $so27(input);
                if ($io34(input)) return $so34(input);
                $throws({
                  expected:
                    '(IEnumeration<"string"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"boolean"> & IIdentified | IBoolean & IIdentified | INumber & IIdentified | IString & IIdentified | IUnknown & IIdentified)',
                  value: input,
                });
              })();
          })();
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    },
  );
