import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_functional_isFunction_UltimateUnion =
  _test_functional_isFunction("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => UltimateUnion) =>
      (input: UltimateUnion): UltimateUnion | null => {
        if (
          false ===
          ((input: any): input is UltimateUnion => {
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
                  input["enum"].every(
                    (elem: any) => "string" === typeof elem,
                  ))) &&
              (undefined === input.format ||
                "string" === typeof input.format) &&
              (undefined === input.pattern ||
                "string" === typeof input.pattern) &&
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
                  input.required.every(
                    (elem: any) => "string" === typeof elem,
                  ))) &&
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
                return (
                  "object" === typeof value && null !== value && $iu2(value)
                );
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
              (undefined === input.tokenUrl ||
                "string" === typeof input.tokenUrl) &&
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
              (undefined === input.tokenUrl ||
                "string" === typeof input.tokenUrl) &&
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
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is UltimateUnion => {
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
                input["enum"].every(
                  (elem: any) => "string" === typeof elem,
                ))) &&
            (undefined === input.format || "string" === typeof input.format) &&
            (undefined === input.pattern ||
              "string" === typeof input.pattern) &&
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
                input.required.every(
                  (elem: any) => "string" === typeof elem,
                ))) &&
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
            (undefined === input.tokenUrl ||
              "string" === typeof input.tokenUrl) &&
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
            (undefined === input.tokenUrl ||
              "string" === typeof input.tokenUrl) &&
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
        })(result)
          ? result
          : null;
      },
  );
