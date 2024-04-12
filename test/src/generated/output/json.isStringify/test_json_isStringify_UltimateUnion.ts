import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_isStringify_UltimateUnion = _test_json_isStringify(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
  ((input: UltimateUnion): string | null => {
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
    const stringify = (input: UltimateUnion): string => {
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
      const $string = (typia.json.isStringify as any).string;
      const $throws = (typia.json.isStringify as any).throws;
      const $number = (typia.json.isStringify as any).number;
      const $tail = (typia.json.isStringify as any).tail;
      const $so0 = (input: any): any =>
        `{"version":${(() => {
          if ("string" === typeof input.version) return $string(input.version);
          if ("string" === typeof input.version)
            return '"' + input.version + '"';
          $throws({
            expected: '"3.1"',
            value: input.version,
          });
        })()},"components":${$so1(input.components)},"schemas":${`[${input.schemas.map((elem: any) => $su0(elem)).join(",")}]`}}`;
      const $so1 = (input: any): any =>
        `{${undefined === input.securitySchemes ? "" : `"securitySchemes":${undefined !== input.securitySchemes ? $so15(input.securitySchemes) : undefined},`}"schemas":${$so2(input.schemas)}}`;
      const $so2 = (input: any): any =>
        `{${Object.entries(input)
          .map(([key, value]: [string, any]) => {
            if (undefined === value) return "";
            return `${JSON.stringify(key)}:${$su0(value)}`;
          })
          .filter((str: any) => "" !== str)
          .join(",")}}`;
      const $so3 = (input: any): any =>
        `{${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"const":${(() => {
          if ("string" === typeof input["const"])
            return $string(input["const"]);
          if ("number" === typeof input["const"])
            return $number(input["const"]);
          if ("boolean" === typeof input["const"]) return input["const"];
          $throws({
            expected: "(boolean | number | string)",
            value: input["const"],
          });
        })()}}`;
      const $so4 = (input: any): any =>
        `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? input["default"] : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"boolean"',
            value: input.type,
          });
        })()}}`;
      const $so5 = (input: any): any =>
        `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"integer"',
            value: input.type,
          });
        })()}}`;
      const $so6 = (input: any): any =>
        `{${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $number(input["default"]) : undefined},`}${undefined === input.minimum ? "" : `"minimum":${undefined !== input.minimum ? $number(input.minimum) : undefined},`}${undefined === input.maximum ? "" : `"maximum":${undefined !== input.maximum ? $number(input.maximum) : undefined},`}${undefined === input.exclusiveMinimum ? "" : `"exclusiveMinimum":${undefined !== input.exclusiveMinimum ? input.exclusiveMinimum : undefined},`}${undefined === input.exclusiveMaximum ? "" : `"exclusiveMaximum":${undefined !== input.exclusiveMaximum ? input.exclusiveMaximum : undefined},`}${undefined === input.multipleOf ? "" : `"multipleOf":${undefined !== input.multipleOf ? $number(input.multipleOf) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"number"',
            value: input.type,
          });
        })()}}`;
      const $so7 = (input: any): any =>
        `{${undefined === input.contentMediaType ? "" : `"contentMediaType":${undefined !== input.contentMediaType ? $string(input.contentMediaType) : undefined},`}${undefined === input["default"] ? "" : `"default":${undefined !== input["default"] ? $string(input["default"]) : undefined},`}${undefined === input["enum"] ? "" : `"enum":${undefined !== input["enum"] ? `[${input["enum"].map((elem: any) => $string(elem)).join(",")}]` : undefined},`}${undefined === input.format ? "" : `"format":${undefined !== input.format ? $string(input.format) : undefined},`}${undefined === input.pattern ? "" : `"pattern":${undefined !== input.pattern ? $string(input.pattern) : undefined},`}${undefined === input.minLength ? "" : `"minLength":${undefined !== input.minLength ? $number(input.minLength) : undefined},`}${undefined === input.maxLength ? "" : `"maxLength":${undefined !== input.maxLength ? $number(input.maxLength) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"string"',
            value: input.type,
          });
        })()}}`;
      const $so8 = (input: any): any =>
        `{${undefined === input.minItems ? "" : `"minItems":${undefined !== input.minItems ? $number(input.minItems) : undefined},`}${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"items":${$su0(input.items)},"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"array"',
            value: input.type,
          });
        })()}}`;
      const $so9 = (input: any): any =>
        `{${undefined === input.minItems ? "" : `"minItems":${undefined !== input.minItems ? $number(input.minItems) : undefined},`}${undefined === input.maxItems ? "" : `"maxItems":${undefined !== input.maxItems ? $number(input.maxItems) : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"prefixItems":${`[${input.prefixItems.map((elem: any) => $su0(elem)).join(",")}]`},"additionalItems":${(() => {
          if ("boolean" === typeof input.additionalItems)
            return input.additionalItems;
          if (
            "object" === typeof input.additionalItems &&
            null !== input.additionalItems &&
            false === Array.isArray(input.additionalItems)
          )
            return $su0(input.additionalItems);
          $throws({
            expected:
              "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean)",
            value: input.additionalItems,
          });
        })()},"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"array"',
            value: input.type,
          });
        })()}}`;
      const $so10 = (input: any): any =>
        `{${undefined === input.properties ? "" : `"properties":${undefined !== input.properties ? $so2(input.properties) : undefined},`}${
          undefined === input.additionalProperties
            ? ""
            : `"additionalProperties":${
                undefined !== input.additionalProperties
                  ? (() => {
                      if ("boolean" === typeof input.additionalProperties)
                        return input.additionalProperties;
                      if (
                        "object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties)
                      )
                        return $su0(input.additionalProperties);
                      $throws({
                        expected:
                          "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean | undefined)",
                        value: input.additionalProperties,
                      });
                    })()
                  : undefined
              },`
        }${undefined === input.required ? "" : `"required":${undefined !== input.required ? `[${input.required.map((elem: any) => $string(elem)).join(",")}]` : undefined},`}${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"object"',
            value: input.type,
          });
        })()}}`;
      const $so11 = (input: any): any =>
        `{${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"$ref":${$string(input.$ref)}}`;
      const $so12 = (input: any): any =>
        `{${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"oneOf":${`[${input.oneOf.map((elem: any) => $su1(elem)).join(",")}]`}}`;
      const $so13 = (input: any): any =>
        `{${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"null"',
            value: input.type,
          });
        })()}}`;
      const $so14 = (input: any): any =>
        `{${$tail(`${undefined === input.title ? "" : `"title":${undefined !== input.title ? $string(input.title) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}${undefined === input.deprecated ? "" : `"deprecated":${undefined !== input.deprecated ? input.deprecated : undefined}`}`)}}`;
      const $so15 = (input: any): any =>
        `{${Object.entries(input)
          .map(([key, value]: [string, any]) => {
            if (undefined === value) return "";
            return `${JSON.stringify(key)}:${$su2(value)}`;
          })
          .filter((str: any) => "" !== str)
          .join(",")}}`;
      const $so16 = (input: any): any =>
        `{${
          undefined === input["in"]
            ? ""
            : `"in":${
                undefined !== input["in"]
                  ? (() => {
                      if ("string" === typeof input["in"])
                        return $string(input["in"]);
                      if ("string" === typeof input["in"])
                        return '"' + input["in"] + '"';
                      $throws({
                        expected: '("cookie" | "header" | "query" | undefined)',
                        value: input["in"],
                      });
                    })()
                  : undefined
              },`
        }${undefined === input.name ? "" : `"name":${undefined !== input.name ? $string(input.name) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"apiKey"',
            value: input.type,
          });
        })()}}`;
      const $so17 = (input: any): any =>
        `{${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"http"',
            value: input.type,
          });
        })()},"scheme":${(() => {
          if ("string" === typeof input.scheme) return $string(input.scheme);
          if ("string" === typeof input.scheme) return '"' + input.scheme + '"';
          $throws({
            expected: '"basic"',
            value: input.scheme,
          });
        })()}}`;
      const $so18 = (input: any): any =>
        `{${undefined === input.bearerFormat ? "" : `"bearerFormat":${undefined !== input.bearerFormat ? $string(input.bearerFormat) : undefined},`}${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"http"',
            value: input.type,
          });
        })()},"scheme":${(() => {
          if ("string" === typeof input.scheme) return $string(input.scheme);
          if ("string" === typeof input.scheme) return '"' + input.scheme + '"';
          $throws({
            expected: '"bearer"',
            value: input.scheme,
          });
        })()}}`;
      const $so19 = (input: any): any =>
        `{${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"oauth2"',
            value: input.type,
          });
        })()},"flows":${$so20(input.flows)}}`;
      const $so20 = (input: any): any =>
        `{${$tail(`${undefined === input.authorizationCode ? "" : `"authorizationCode":${undefined !== input.authorizationCode ? $so21(input.authorizationCode) : undefined},`}${undefined === input.implicit ? "" : `"implicit":${undefined !== input.implicit ? $so23(input.implicit) : undefined},`}${undefined === input.password ? "" : `"password":${undefined !== input.password ? $so24(input.password) : undefined},`}${undefined === input.clientCredentials ? "" : `"clientCredentials":${undefined !== input.clientCredentials ? $so24(input.clientCredentials) : undefined}`}`)}}`;
      const $so21 = (input: any): any =>
        `{${$tail(`${undefined === input.authorizationUrl ? "" : `"authorizationUrl":${undefined !== input.authorizationUrl ? $string(input.authorizationUrl) : undefined},`}${undefined === input.tokenUrl ? "" : `"tokenUrl":${undefined !== input.tokenUrl ? $string(input.tokenUrl) : undefined},`}${undefined === input.refreshUrl ? "" : `"refreshUrl":${undefined !== input.refreshUrl ? $string(input.refreshUrl) : undefined},`}${undefined === input.scopes ? "" : `"scopes":${undefined !== input.scopes ? $so22(input.scopes) : undefined}`}`)}}`;
      const $so22 = (input: any): any =>
        `{${Object.entries(input)
          .map(([key, value]: [string, any]) => {
            if (undefined === value) return "";
            return `${JSON.stringify(key)}:${$string(value)}`;
          })
          .filter((str: any) => "" !== str)
          .join(",")}}`;
      const $so23 = (input: any): any =>
        `{${$tail(`${undefined === input.authorizationUrl ? "" : `"authorizationUrl":${undefined !== input.authorizationUrl ? $string(input.authorizationUrl) : undefined},`}${undefined === input.refreshUrl ? "" : `"refreshUrl":${undefined !== input.refreshUrl ? $string(input.refreshUrl) : undefined},`}${undefined === input.scopes ? "" : `"scopes":${undefined !== input.scopes ? $so22(input.scopes) : undefined}`}`)}}`;
      const $so24 = (input: any): any =>
        `{${$tail(`${undefined === input.tokenUrl ? "" : `"tokenUrl":${undefined !== input.tokenUrl ? $string(input.tokenUrl) : undefined},`}${undefined === input.refreshUrl ? "" : `"refreshUrl":${undefined !== input.refreshUrl ? $string(input.refreshUrl) : undefined},`}${undefined === input.scopes ? "" : `"scopes":${undefined !== input.scopes ? $so22(input.scopes) : undefined}`}`)}}`;
      const $so25 = (input: any): any =>
        `{${undefined === input.description ? "" : `"description":${undefined !== input.description ? $string(input.description) : undefined},`}"type":${(() => {
          if ("string" === typeof input.type) return $string(input.type);
          if ("string" === typeof input.type) return '"' + input.type + '"';
          $throws({
            expected: '"openIdConnect"',
            value: input.type,
          });
        })()},"openIdConnectUrl":${$string(input.openIdConnectUrl)}}`;
      const $su0 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $so3(input);
          else if ("boolean" === input.type) return $so4(input);
          else if ("number" === input.type) return $so6(input);
          else if ("integer" === input.type) return $so5(input);
          else if ("string" === input.type) return $so7(input);
          else if (undefined !== input.items) return $so8(input);
          else if (undefined !== input.prefixItems) return $so9(input);
          else if ("object" === input.type) return $so10(input);
          else if (undefined !== input.$ref) return $so11(input);
          else if (undefined !== input.oneOf) return $so12(input);
          else if ("null" === input.type) return $so13(input);
          else return $so14(input);
        })();
      const $su1 = (input: any): any =>
        (() => {
          if (undefined !== input["const"]) return $so3(input);
          else if ("boolean" === input.type) return $so4(input);
          else if ("number" === input.type) return $so6(input);
          else if ("integer" === input.type) return $so5(input);
          else if ("string" === input.type) return $so7(input);
          else if (undefined !== input.items) return $so8(input);
          else if (undefined !== input.prefixItems) return $so9(input);
          else if ("object" === input.type) return $so10(input);
          else if (undefined !== input.$ref) return $so11(input);
          else if ("null" === input.type) return $so13(input);
          else return $so14(input);
        })();
      const $su2 = (input: any): any =>
        (() => {
          if ("apiKey" === input.type) return $so16(input);
          else if ("basic" === input.scheme) return $so17(input);
          else if ("bearer" === input.scheme) return $so18(input);
          else if ("oauth2" === input.type) return $so19(input);
          else if ("openIdConnect" === input.type) return $so25(input);
          else
            $throws({
              expected:
                "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
              value: input,
            });
        })();
      return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
