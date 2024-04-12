import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_misc_isClone_UltimateUnion = _test_misc_isClone(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
  ((input: any): import("typia").Resolved<UltimateUnion> | null => {
    const is = (input: any): input is UltimateUnion => {
      const $io0 = (input: any): boolean =>
        "3.1" === input.version &&
        "object" === typeof input.components &&
        null !== input.components &&
        $io1(input.components) &&
        Array.isArray(input.schemas) &&
        input.schemas.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu0(elem),
        );
      const $io1 = (input: any): boolean =>
        "object" === typeof input.schemas &&
        null !== input.schemas &&
        false === Array.isArray(input.schemas) &&
        $io2(input.schemas) &&
        (undefined === input.securitySchemes ||
          ("object" === typeof input.securitySchemes &&
            null !== input.securitySchemes &&
            false === Array.isArray(input.securitySchemes) &&
            $io15(input.securitySchemes)));
      const $io2 = (input: any): boolean =>
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
      const $io3 = (input: any): boolean =>
        ("string" === typeof input["const"] ||
          ("number" === typeof input["const"] &&
            Number.isFinite(input["const"])) ||
          "boolean" === typeof input["const"]) &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io4 = (input: any): boolean =>
        (undefined === input["default"] ||
          "boolean" === typeof input["default"]) &&
        "boolean" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io5 = (input: any): boolean =>
        (undefined === input["default"] ||
          ("number" === typeof input["default"] &&
            Math.floor(input["default"]) === input["default"] &&
            -2147483648 <= input["default"] &&
            input["default"] <= 2147483647)) &&
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
            0 <= input.multipleOf &&
            input.multipleOf <= 4294967295)) &&
        "integer" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io6 = (input: any): boolean =>
        (undefined === input["default"] ||
          ("number" === typeof input["default"] &&
            Number.isFinite(input["default"]))) &&
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
        "number" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io7 = (input: any): boolean =>
        (undefined === input.contentMediaType ||
          "string" === typeof input.contentMediaType) &&
        (undefined === input["default"] ||
          "string" === typeof input["default"]) &&
        (undefined === input["enum"] ||
          (Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "string" === typeof elem))) &&
        (undefined === input.format || "string" === typeof input.format) &&
        (undefined === input.pattern || "string" === typeof input.pattern) &&
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
        "string" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io8 = (input: any): boolean =>
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
        "array" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io9 = (input: any): boolean =>
        Array.isArray(input.prefixItems) &&
        input.prefixItems.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu0(elem),
        ) &&
        null !== input.additionalItems &&
        undefined !== input.additionalItems &&
        ("boolean" === typeof input.additionalItems ||
          ("object" === typeof input.additionalItems &&
            null !== input.additionalItems &&
            false === Array.isArray(input.additionalItems) &&
            $iu0(input.additionalItems))) &&
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
        "array" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io10 = (input: any): boolean =>
        (undefined === input.properties ||
          ("object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties) &&
            $io2(input.properties))) &&
        null !== input.additionalProperties &&
        (undefined === input.additionalProperties ||
          "boolean" === typeof input.additionalProperties ||
          ("object" === typeof input.additionalProperties &&
            null !== input.additionalProperties &&
            false === Array.isArray(input.additionalProperties) &&
            $iu0(input.additionalProperties))) &&
        (undefined === input.required ||
          (Array.isArray(input.required) &&
            input.required.every((elem: any) => "string" === typeof elem))) &&
        "object" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io11 = (input: any): boolean =>
        "string" === typeof input.$ref &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io12 = (input: any): boolean =>
        Array.isArray(input.oneOf) &&
        input.oneOf.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu1(elem),
        ) &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io13 = (input: any): boolean =>
        "null" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io14 = (input: any): boolean =>
        null !== input.type &&
        undefined === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io15 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "object" === typeof value && null !== value && $iu2(value);
        });
      const $io16 = (input: any): boolean =>
        "apiKey" === input.type &&
        (undefined === input["in"] ||
          "header" === input["in"] ||
          "query" === input["in"] ||
          "cookie" === input["in"]) &&
        (undefined === input.name || "string" === typeof input.name) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io17 = (input: any): boolean =>
        "http" === input.type &&
        "basic" === input.scheme &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io18 = (input: any): boolean =>
        "http" === input.type &&
        "bearer" === input.scheme &&
        (undefined === input.bearerFormat ||
          "string" === typeof input.bearerFormat) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io19 = (input: any): boolean =>
        "oauth2" === input.type &&
        "object" === typeof input.flows &&
        null !== input.flows &&
        false === Array.isArray(input.flows) &&
        $io20(input.flows) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io20 = (input: any): boolean =>
        (undefined === input.authorizationCode ||
          ("object" === typeof input.authorizationCode &&
            null !== input.authorizationCode &&
            false === Array.isArray(input.authorizationCode) &&
            $io21(input.authorizationCode))) &&
        (undefined === input.implicit ||
          ("object" === typeof input.implicit &&
            null !== input.implicit &&
            false === Array.isArray(input.implicit) &&
            $io23(input.implicit))) &&
        (undefined === input.password ||
          ("object" === typeof input.password &&
            null !== input.password &&
            false === Array.isArray(input.password) &&
            $io24(input.password))) &&
        (undefined === input.clientCredentials ||
          ("object" === typeof input.clientCredentials &&
            null !== input.clientCredentials &&
            false === Array.isArray(input.clientCredentials) &&
            $io24(input.clientCredentials)));
      const $io21 = (input: any): boolean =>
        (undefined === input.authorizationUrl ||
          "string" === typeof input.authorizationUrl) &&
        (undefined === input.tokenUrl || "string" === typeof input.tokenUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io22(input.scopes)));
      const $io22 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "string" === typeof value;
        });
      const $io23 = (input: any): boolean =>
        (undefined === input.authorizationUrl ||
          "string" === typeof input.authorizationUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io22(input.scopes)));
      const $io24 = (input: any): boolean =>
        (undefined === input.tokenUrl || "string" === typeof input.tokenUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io22(input.scopes)));
      const $io25 = (input: any): boolean =>
        "openIdConnect" === input.type &&
        "string" === typeof input.openIdConnectUrl &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $io3(input);
          else if ("boolean" === input.type) return $io4(input);
          else if ("number" === input.type) return $io6(input);
          else if ("integer" === input.type) return $io5(input);
          else if ("string" === input.type) return $io7(input);
          else if (undefined !== input.items) return $io8(input);
          else if (undefined !== input.prefixItems) return $io9(input);
          else if ("object" === input.type) return $io10(input);
          else if (undefined !== input.$ref) return $io11(input);
          else if (undefined !== input.oneOf) return $io12(input);
          else if ("null" === input.type) return $io13(input);
          else return $io14(input);
        })();
      const $iu1 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $io3(input);
          else if ("boolean" === input.type) return $io4(input);
          else if ("number" === input.type) return $io6(input);
          else if ("integer" === input.type) return $io5(input);
          else if ("string" === input.type) return $io7(input);
          else if (undefined !== input.items) return $io8(input);
          else if (undefined !== input.prefixItems) return $io9(input);
          else if ("object" === input.type) return $io10(input);
          else if (undefined !== input.$ref) return $io11(input);
          else if ("null" === input.type) return $io13(input);
          else return $io14(input);
        })();
      const $iu2 = (input: any): any =>
        (() => {
          if ("apiKey" === input.type) return $io16(input);
          else if ("basic" === input.scheme) return $io17(input);
          else if ("bearer" === input.scheme) return $io18(input);
          else if ("oauth2" === input.type) return $io19(input);
          else if ("openIdConnect" === input.type) return $io25(input);
          else return false;
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
        "object" === typeof input.schemas &&
        null !== input.schemas &&
        false === Array.isArray(input.schemas) &&
        $io2(input.schemas) &&
        (undefined === input.securitySchemes ||
          ("object" === typeof input.securitySchemes &&
            null !== input.securitySchemes &&
            false === Array.isArray(input.securitySchemes) &&
            $io15(input.securitySchemes)));
      const $io2 = (input: any): boolean =>
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
      const $io3 = (input: any): boolean =>
        ("string" === typeof input["const"] ||
          "number" === typeof input["const"] ||
          "boolean" === typeof input["const"]) &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io4 = (input: any): boolean =>
        (undefined === input["default"] ||
          "boolean" === typeof input["default"]) &&
        "boolean" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io5 = (input: any): boolean =>
        (undefined === input["default"] ||
          ("number" === typeof input["default"] &&
            Math.floor(input["default"]) === input["default"] &&
            -2147483648 <= input["default"] &&
            input["default"] <= 2147483647)) &&
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
            0 <= input.multipleOf &&
            input.multipleOf <= 4294967295)) &&
        "integer" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io6 = (input: any): boolean =>
        (undefined === input["default"] ||
          "number" === typeof input["default"]) &&
        (undefined === input.minimum || "number" === typeof input.minimum) &&
        (undefined === input.maximum || "number" === typeof input.maximum) &&
        (undefined === input.exclusiveMinimum ||
          "boolean" === typeof input.exclusiveMinimum) &&
        (undefined === input.exclusiveMaximum ||
          "boolean" === typeof input.exclusiveMaximum) &&
        (undefined === input.multipleOf ||
          "number" === typeof input.multipleOf) &&
        "number" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io7 = (input: any): boolean =>
        (undefined === input.contentMediaType ||
          "string" === typeof input.contentMediaType) &&
        (undefined === input["default"] ||
          "string" === typeof input["default"]) &&
        (undefined === input["enum"] ||
          (Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "string" === typeof elem))) &&
        (undefined === input.format || "string" === typeof input.format) &&
        (undefined === input.pattern || "string" === typeof input.pattern) &&
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
        "string" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io8 = (input: any): boolean =>
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
        "array" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io9 = (input: any): boolean =>
        Array.isArray(input.prefixItems) &&
        input.prefixItems.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu0(elem),
        ) &&
        null !== input.additionalItems &&
        undefined !== input.additionalItems &&
        ("boolean" === typeof input.additionalItems ||
          ("object" === typeof input.additionalItems &&
            null !== input.additionalItems &&
            false === Array.isArray(input.additionalItems) &&
            $iu0(input.additionalItems))) &&
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
        "array" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io10 = (input: any): boolean =>
        (undefined === input.properties ||
          ("object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties) &&
            $io2(input.properties))) &&
        null !== input.additionalProperties &&
        (undefined === input.additionalProperties ||
          "boolean" === typeof input.additionalProperties ||
          ("object" === typeof input.additionalProperties &&
            null !== input.additionalProperties &&
            false === Array.isArray(input.additionalProperties) &&
            $iu0(input.additionalProperties))) &&
        (undefined === input.required ||
          (Array.isArray(input.required) &&
            input.required.every((elem: any) => "string" === typeof elem))) &&
        "object" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io11 = (input: any): boolean =>
        "string" === typeof input.$ref &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io12 = (input: any): boolean =>
        Array.isArray(input.oneOf) &&
        input.oneOf.every(
          (elem: any) =>
            "object" === typeof elem &&
            null !== elem &&
            false === Array.isArray(elem) &&
            $iu1(elem),
        ) &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io13 = (input: any): boolean =>
        "null" === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io14 = (input: any): boolean =>
        null !== input.type &&
        undefined === input.type &&
        (undefined === input.title || "string" === typeof input.title) &&
        (undefined === input.description ||
          "string" === typeof input.description) &&
        (undefined === input.deprecated ||
          "boolean" === typeof input.deprecated);
      const $io15 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "object" === typeof value && null !== value && $iu2(value);
        });
      const $io16 = (input: any): boolean =>
        "apiKey" === input.type &&
        (undefined === input["in"] ||
          "header" === input["in"] ||
          "query" === input["in"] ||
          "cookie" === input["in"]) &&
        (undefined === input.name || "string" === typeof input.name) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io17 = (input: any): boolean =>
        "http" === input.type &&
        "basic" === input.scheme &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io18 = (input: any): boolean =>
        "http" === input.type &&
        "bearer" === input.scheme &&
        (undefined === input.bearerFormat ||
          "string" === typeof input.bearerFormat) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io19 = (input: any): boolean =>
        "oauth2" === input.type &&
        "object" === typeof input.flows &&
        null !== input.flows &&
        false === Array.isArray(input.flows) &&
        $io20(input.flows) &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $io20 = (input: any): boolean =>
        (undefined === input.authorizationCode ||
          ("object" === typeof input.authorizationCode &&
            null !== input.authorizationCode &&
            false === Array.isArray(input.authorizationCode) &&
            $io21(input.authorizationCode))) &&
        (undefined === input.implicit ||
          ("object" === typeof input.implicit &&
            null !== input.implicit &&
            false === Array.isArray(input.implicit) &&
            $io23(input.implicit))) &&
        (undefined === input.password ||
          ("object" === typeof input.password &&
            null !== input.password &&
            false === Array.isArray(input.password) &&
            $io24(input.password))) &&
        (undefined === input.clientCredentials ||
          ("object" === typeof input.clientCredentials &&
            null !== input.clientCredentials &&
            false === Array.isArray(input.clientCredentials) &&
            $io24(input.clientCredentials)));
      const $io21 = (input: any): boolean =>
        (undefined === input.authorizationUrl ||
          "string" === typeof input.authorizationUrl) &&
        (undefined === input.tokenUrl || "string" === typeof input.tokenUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io22(input.scopes)));
      const $io22 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "string" === typeof value;
        });
      const $io23 = (input: any): boolean =>
        (undefined === input.authorizationUrl ||
          "string" === typeof input.authorizationUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io22(input.scopes)));
      const $io24 = (input: any): boolean =>
        (undefined === input.tokenUrl || "string" === typeof input.tokenUrl) &&
        (undefined === input.refreshUrl ||
          "string" === typeof input.refreshUrl) &&
        (undefined === input.scopes ||
          ("object" === typeof input.scopes &&
            null !== input.scopes &&
            false === Array.isArray(input.scopes) &&
            $io22(input.scopes)));
      const $io25 = (input: any): boolean =>
        "openIdConnect" === input.type &&
        "string" === typeof input.openIdConnectUrl &&
        (undefined === input.description ||
          "string" === typeof input.description);
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $io3(input);
          else if ("boolean" === input.type) return $io4(input);
          else if ("number" === input.type) return $io6(input);
          else if ("integer" === input.type) return $io5(input);
          else if ("string" === input.type) return $io7(input);
          else if (undefined !== input.items) return $io8(input);
          else if (undefined !== input.prefixItems) return $io9(input);
          else if ("object" === input.type) return $io10(input);
          else if (undefined !== input.$ref) return $io11(input);
          else if (undefined !== input.oneOf) return $io12(input);
          else if ("null" === input.type) return $io13(input);
          else return $io14(input);
        })();
      const $iu1 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $io3(input);
          else if ("boolean" === input.type) return $io4(input);
          else if ("number" === input.type) return $io6(input);
          else if ("integer" === input.type) return $io5(input);
          else if ("string" === input.type) return $io7(input);
          else if (undefined !== input.items) return $io8(input);
          else if (undefined !== input.prefixItems) return $io9(input);
          else if ("object" === input.type) return $io10(input);
          else if (undefined !== input.$ref) return $io11(input);
          else if ("null" === input.type) return $io13(input);
          else return $io14(input);
        })();
      const $iu2 = (input: any): any =>
        (() => {
          if ("apiKey" === input.type) return $io16(input);
          else if ("basic" === input.scheme) return $io17(input);
          else if ("bearer" === input.scheme) return $io18(input);
          else if ("oauth2" === input.type) return $io19(input);
          else if ("openIdConnect" === input.type) return $io25(input);
          else return false;
        })();
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
            ? $cu1(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        version: input.version as any,
        components:
          "object" === typeof input.components && null !== input.components
            ? $co1(input.components)
            : (input.components as any),
        schemas: Array.isArray(input.schemas)
          ? $cp1(input.schemas)
          : (input.schemas as any),
      });
      const $co1 = (input: any): any => ({
        schemas:
          "object" === typeof input.schemas && null !== input.schemas
            ? $co2(input.schemas)
            : (input.schemas as any),
        securitySchemes:
          "object" === typeof input.securitySchemes &&
          null !== input.securitySchemes
            ? $co15(input.securitySchemes)
            : (input.securitySchemes as any),
      });
      const $co2 = (input: any): any => {
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
      const $co3 = (input: any): any => ({
        const: input["const"] as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co4 = (input: any): any => ({
        default: input["default"] as any,
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co5 = (input: any): any => ({
        default: input["default"] as any,
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        exclusiveMinimum: input.exclusiveMinimum as any,
        exclusiveMaximum: input.exclusiveMaximum as any,
        multipleOf: input.multipleOf as any,
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co6 = (input: any): any => ({
        default: input["default"] as any,
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        exclusiveMinimum: input.exclusiveMinimum as any,
        exclusiveMaximum: input.exclusiveMaximum as any,
        multipleOf: input.multipleOf as any,
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co7 = (input: any): any => ({
        contentMediaType: input.contentMediaType as any,
        default: input["default"] as any,
        enum: Array.isArray(input["enum"])
          ? $cp2(input["enum"])
          : (input["enum"] as any),
        format: input.format as any,
        pattern: input.pattern as any,
        minLength: input.minLength as any,
        maxLength: input.maxLength as any,
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co8 = (input: any): any => ({
        items:
          "object" === typeof input.items && null !== input.items
            ? $cu0(input.items)
            : (input.items as any),
        minItems: input.minItems as any,
        maxItems: input.maxItems as any,
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co9 = (input: any): any => ({
        prefixItems: Array.isArray(input.prefixItems)
          ? $cp1(input.prefixItems)
          : (input.prefixItems as any),
        additionalItems:
          "object" === typeof input.additionalItems &&
          null !== input.additionalItems
            ? $cu0(input.additionalItems)
            : (input.additionalItems as any),
        minItems: input.minItems as any,
        maxItems: input.maxItems as any,
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co10 = (input: any): any => ({
        properties:
          "object" === typeof input.properties && null !== input.properties
            ? $co2(input.properties)
            : (input.properties as any),
        additionalProperties:
          "object" === typeof input.additionalProperties &&
          null !== input.additionalProperties
            ? $cu0(input.additionalProperties)
            : (input.additionalProperties as any),
        required: Array.isArray(input.required)
          ? $cp2(input.required)
          : (input.required as any),
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co11 = (input: any): any => ({
        $ref: input.$ref as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co12 = (input: any): any => ({
        oneOf: Array.isArray(input.oneOf)
          ? $cp3(input.oneOf)
          : (input.oneOf as any),
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co13 = (input: any): any => ({
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co14 = (input: any): any => ({
        type: input.type as any,
        title: input.title as any,
        description: input.description as any,
        deprecated: input.deprecated as any,
      });
      const $co15 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/(.*)/).test(key)) {
            output[key] =
              "object" === typeof value && null !== value
                ? $cu2(value)
                : (value as any);
            continue;
          }
        }
        return output;
      };
      const $co16 = (input: any): any => ({
        type: input.type as any,
        in: input["in"] as any,
        name: input.name as any,
        description: input.description as any,
      });
      const $co17 = (input: any): any => ({
        type: input.type as any,
        scheme: input.scheme as any,
        description: input.description as any,
      });
      const $co18 = (input: any): any => ({
        type: input.type as any,
        scheme: input.scheme as any,
        bearerFormat: input.bearerFormat as any,
        description: input.description as any,
      });
      const $co19 = (input: any): any => ({
        type: input.type as any,
        flows:
          "object" === typeof input.flows && null !== input.flows
            ? $co20(input.flows)
            : (input.flows as any),
        description: input.description as any,
      });
      const $co20 = (input: any): any => ({
        authorizationCode:
          "object" === typeof input.authorizationCode &&
          null !== input.authorizationCode
            ? $co21(input.authorizationCode)
            : (input.authorizationCode as any),
        implicit:
          "object" === typeof input.implicit && null !== input.implicit
            ? $co23(input.implicit)
            : (input.implicit as any),
        password:
          "object" === typeof input.password && null !== input.password
            ? $co24(input.password)
            : (input.password as any),
        clientCredentials:
          "object" === typeof input.clientCredentials &&
          null !== input.clientCredentials
            ? $co24(input.clientCredentials)
            : (input.clientCredentials as any),
      });
      const $co21 = (input: any): any => ({
        authorizationUrl: input.authorizationUrl as any,
        tokenUrl: input.tokenUrl as any,
        refreshUrl: input.refreshUrl as any,
        scopes:
          "object" === typeof input.scopes && null !== input.scopes
            ? $co22(input.scopes)
            : (input.scopes as any),
      });
      const $co22 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/(.*)/).test(key)) {
            output[key] = value as any;
            continue;
          }
        }
        return output;
      };
      const $co23 = (input: any): any => ({
        authorizationUrl: input.authorizationUrl as any,
        refreshUrl: input.refreshUrl as any,
        scopes:
          "object" === typeof input.scopes && null !== input.scopes
            ? $co22(input.scopes)
            : (input.scopes as any),
      });
      const $co24 = (input: any): any => ({
        tokenUrl: input.tokenUrl as any,
        refreshUrl: input.refreshUrl as any,
        scopes:
          "object" === typeof input.scopes && null !== input.scopes
            ? $co22(input.scopes)
            : (input.scopes as any),
      });
      const $co25 = (input: any): any => ({
        type: input.type as any,
        openIdConnectUrl: input.openIdConnectUrl as any,
        description: input.description as any,
      });
      const $cu0 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $co3(input);
          else if ("boolean" === input.type) return $co4(input);
          else if ("number" === input.type) return $co6(input);
          else if ("integer" === input.type) return $co5(input);
          else if ("string" === input.type) return $co7(input);
          else if (undefined !== input.items) return $co8(input);
          else if (undefined !== input.prefixItems) return $co9(input);
          else if ("object" === input.type) return $co10(input);
          else if (undefined !== input.$ref) return $co11(input);
          else if (undefined !== input.oneOf) return $co12(input);
          else if ("null" === input.type) return $co13(input);
          else return $co14(input);
        })();
      const $cu1 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $co3(input);
          else if ("boolean" === input.type) return $co4(input);
          else if ("number" === input.type) return $co6(input);
          else if ("integer" === input.type) return $co5(input);
          else if ("string" === input.type) return $co7(input);
          else if (undefined !== input.items) return $co8(input);
          else if (undefined !== input.prefixItems) return $co9(input);
          else if ("object" === input.type) return $co10(input);
          else if (undefined !== input.$ref) return $co11(input);
          else if ("null" === input.type) return $co13(input);
          else return $co14(input);
        })();
      const $cu2 = (input: any): any =>
        (() => {
          if ("apiKey" === input.type) return $co16(input);
          else if ("basic" === input.scheme) return $co17(input);
          else if ("bearer" === input.scheme) return $co18(input);
          else if ("oauth2" === input.type) return $co19(input);
          else if ("openIdConnect" === input.type) return $co25(input);
          else
            $throws({
              expected:
                "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
              value: input,
            });
        })();
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
