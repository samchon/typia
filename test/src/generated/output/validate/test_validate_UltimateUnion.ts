import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_validate_UltimateUnion = _test_validate(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
  ((input: any): typia.IValidation<UltimateUnion> => {
    const errors = [] as any[];
    const __is = (input: any): input is UltimateUnion => {
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
    if (false === __is(input)) {
      const $report = (typia.validate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is UltimateUnion => {
        const $join = (typia.validate as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "3.1" === input.version ||
              $report(_exceptionable, {
                path: _path + ".version",
                expected: '"3.1"',
                value: input.version,
              }),
            ((("object" === typeof input.components &&
              null !== input.components) ||
              $report(_exceptionable, {
                path: _path + ".components",
                expected: "OpenApi.IComponents",
                value: input.components,
              })) &&
              $vo1(
                input.components,
                _path + ".components",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".components",
                expected: "OpenApi.IComponents",
                value: input.components,
              }),
            ((Array.isArray(input.schemas) ||
              $report(_exceptionable, {
                path: _path + ".schemas",
                expected: "Array<OpenApi.IJsonSchema>",
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
                          "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
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
                        "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".schemas",
                expected: "Array<OpenApi.IJsonSchema>",
                value: input.schemas,
              }),
          ].every((flag: boolean) => flag);
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.schemas &&
              null !== input.schemas &&
              false === Array.isArray(input.schemas)) ||
              $report(_exceptionable, {
                path: _path + ".schemas",
                expected: "Record<string, OpenApi.IJsonSchema>",
                value: input.schemas,
              })) &&
              $vo2(
                input.schemas,
                _path + ".schemas",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".schemas",
                expected: "Record<string, OpenApi.IJsonSchema>",
                value: input.schemas,
              }),
            undefined === input.securitySchemes ||
              ((("object" === typeof input.securitySchemes &&
                null !== input.securitySchemes &&
                false === Array.isArray(input.securitySchemes)) ||
                $report(_exceptionable, {
                  path: _path + ".securitySchemes",
                  expected:
                    "(Record<string, OpenApi.ISecurityScheme> | undefined)",
                  value: input.securitySchemes,
                })) &&
                $vo15(
                  input.securitySchemes,
                  _path + ".securitySchemes",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".securitySchemes",
                expected:
                  "(Record<string, OpenApi.ISecurityScheme> | undefined)",
                value: input.securitySchemes,
              }),
          ].every((flag: boolean) => flag);
        const $vo2 = (
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
                          "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
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
                        "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
                      value: value,
                    })
                  );
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "string" === typeof input["const"] ||
              ("number" === typeof input["const"] &&
                Number.isFinite(input["const"])) ||
              "boolean" === typeof input["const"] ||
              $report(_exceptionable, {
                path: _path + '["const"]',
                expected: "(boolean | number | string)",
                value: input["const"],
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input["default"] ||
              ("number" === typeof input["default"] &&
                ((Math.floor(input["default"]) === input["default"] &&
                  -2147483648 <= input["default"] &&
                  input["default"] <= 2147483647) ||
                  $report(_exceptionable, {
                    path: _path + '["default"]',
                    expected: 'number & Type<"int32">',
                    value: input["default"],
                  }))) ||
              $report(_exceptionable, {
                path: _path + '["default"]',
                expected: '((number & Type<"int32">) | undefined)',
                value: input["default"],
              }),
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
                  0 <= input.multipleOf &&
                  input.multipleOf <= 4294967295) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: 'number & Type<"uint32">',
                    value: input.multipleOf,
                  }))) ||
              $report(_exceptionable, {
                path: _path + ".multipleOf",
                expected: '((number & Type<"uint32">) | undefined)',
                value: input.multipleOf,
              }),
            "integer" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"integer"',
                value: input.type,
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input["default"] ||
              ("number" === typeof input["default"] &&
                Number.isFinite(input["default"])) ||
              $report(_exceptionable, {
                path: _path + '["default"]',
                expected: "(number | undefined)",
                value: input["default"],
              }),
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
            "number" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"number"',
                value: input.type,
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.contentMediaType ||
              "string" === typeof input.contentMediaType ||
              $report(_exceptionable, {
                path: _path + ".contentMediaType",
                expected: "(string | undefined)",
                value: input.contentMediaType,
              }),
            undefined === input["default"] ||
              "string" === typeof input["default"] ||
              $report(_exceptionable, {
                path: _path + '["default"]',
                expected: "(string | undefined)",
                value: input["default"],
              }),
            undefined === input["enum"] ||
              ((Array.isArray(input["enum"]) ||
                $report(_exceptionable, {
                  path: _path + '["enum"]',
                  expected: "(Array<string> | undefined)",
                  value: input["enum"],
                })) &&
                input["enum"]
                  .map(
                    (elem: any, _index3: number) =>
                      "string" === typeof elem ||
                      $report(_exceptionable, {
                        path: _path + '["enum"][' + _index3 + "]",
                        expected: "string",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + '["enum"]',
                expected: "(Array<string> | undefined)",
                value: input["enum"],
              }),
            undefined === input.format ||
              "string" === typeof input.format ||
              $report(_exceptionable, {
                path: _path + ".format",
                expected: "(string | undefined)",
                value: input.format,
              }),
            undefined === input.pattern ||
              "string" === typeof input.pattern ||
              $report(_exceptionable, {
                path: _path + ".pattern",
                expected: "(string | undefined)",
                value: input.pattern,
              }),
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
            "string" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo8 = (
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
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
                value: input.items,
              })) &&
              $vu0(input.items, _path + ".items", true && _exceptionable)) ||
              $report(_exceptionable, {
                path: _path + ".items",
                expected:
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
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
            "array" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"array"',
                value: input.type,
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo9 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((Array.isArray(input.prefixItems) ||
              $report(_exceptionable, {
                path: _path + ".prefixItems",
                expected: "Array<OpenApi.IJsonSchema>",
                value: input.prefixItems,
              })) &&
              input.prefixItems
                .map(
                  (elem: any, _index4: number) =>
                    ((("object" === typeof elem &&
                      null !== elem &&
                      false === Array.isArray(elem)) ||
                      $report(_exceptionable, {
                        path: _path + ".prefixItems[" + _index4 + "]",
                        expected:
                          "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
                        value: elem,
                      })) &&
                      $vu0(
                        elem,
                        _path + ".prefixItems[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".prefixItems[" + _index4 + "]",
                      expected:
                        "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".prefixItems",
                expected: "Array<OpenApi.IJsonSchema>",
                value: input.prefixItems,
              }),
            (null !== input.additionalItems ||
              $report(_exceptionable, {
                path: _path + ".additionalItems",
                expected:
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean)",
                value: input.additionalItems,
              })) &&
              (undefined !== input.additionalItems ||
                $report(_exceptionable, {
                  path: _path + ".additionalItems",
                  expected:
                    "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean)",
                  value: input.additionalItems,
                })) &&
              ("boolean" === typeof input.additionalItems ||
                ((("object" === typeof input.additionalItems &&
                  null !== input.additionalItems &&
                  false === Array.isArray(input.additionalItems)) ||
                  $report(_exceptionable, {
                    path: _path + ".additionalItems",
                    expected:
                      "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean)",
                    value: input.additionalItems,
                  })) &&
                  $vu0(
                    input.additionalItems,
                    _path + ".additionalItems",
                    true && _exceptionable,
                  )) ||
                $report(_exceptionable, {
                  path: _path + ".additionalItems",
                  expected:
                    "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean)",
                  value: input.additionalItems,
                })),
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
            "array" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"array"',
                value: input.type,
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo10 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.properties ||
              ((("object" === typeof input.properties &&
                null !== input.properties &&
                false === Array.isArray(input.properties)) ||
                $report(_exceptionable, {
                  path: _path + ".properties",
                  expected: "(Record<string, OpenApi.IJsonSchema> | undefined)",
                  value: input.properties,
                })) &&
                $vo2(
                  input.properties,
                  _path + ".properties",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".properties",
                expected: "(Record<string, OpenApi.IJsonSchema> | undefined)",
                value: input.properties,
              }),
            (null !== input.additionalProperties ||
              $report(_exceptionable, {
                path: _path + ".additionalProperties",
                expected:
                  "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean | undefined)",
                value: input.additionalProperties,
              })) &&
              (undefined === input.additionalProperties ||
                "boolean" === typeof input.additionalProperties ||
                ((("object" === typeof input.additionalProperties &&
                  null !== input.additionalProperties &&
                  false === Array.isArray(input.additionalProperties)) ||
                  $report(_exceptionable, {
                    path: _path + ".additionalProperties",
                    expected:
                      "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean | undefined)",
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
                    "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IOneOf | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown | boolean | undefined)",
                  value: input.additionalProperties,
                })),
            undefined === input.required ||
              ((Array.isArray(input.required) ||
                $report(_exceptionable, {
                  path: _path + ".required",
                  expected: "(Array<string> | undefined)",
                  value: input.required,
                })) &&
                input.required
                  .map(
                    (elem: any, _index5: number) =>
                      "string" === typeof elem ||
                      $report(_exceptionable, {
                        path: _path + ".required[" + _index5 + "]",
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
            "object" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"object"',
                value: input.type,
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo11 = (
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo12 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((Array.isArray(input.oneOf) ||
              $report(_exceptionable, {
                path: _path + ".oneOf",
                expected:
                  "Array<IConstant | IBoolean | IInteger | INumber | IString | IArray | ITuple | IObject | IReference<string> | INull | IUnknown>",
                value: input.oneOf,
              })) &&
              input.oneOf
                .map(
                  (elem: any, _index6: number) =>
                    ((("object" === typeof elem &&
                      null !== elem &&
                      false === Array.isArray(elem)) ||
                      $report(_exceptionable, {
                        path: _path + ".oneOf[" + _index6 + "]",
                        expected:
                          "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
                        value: elem,
                      })) &&
                      $vu1(
                        elem,
                        _path + ".oneOf[" + _index6 + "]",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".oneOf[" + _index6 + "]",
                      expected:
                        "(OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IBoolean | OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INull | OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference<string> | OpenApi.IJsonSchema.IString | OpenApi.IJsonSchema.ITuple | OpenApi.IJsonSchema.IUnknown)",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".oneOf",
                expected:
                  "Array<IConstant | IBoolean | IInteger | INumber | IString | IArray | ITuple | IObject | IReference<string> | INull | IUnknown>",
                value: input.oneOf,
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo13 = (
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo14 = (
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
            undefined === input.deprecated ||
              "boolean" === typeof input.deprecated ||
              $report(_exceptionable, {
                path: _path + ".deprecated",
                expected: "(boolean | undefined)",
                value: input.deprecated,
              }),
          ].every((flag: boolean) => flag);
        const $vo15 = (
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
                    ((("object" === typeof value && null !== value) ||
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected:
                          "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
                        value: value,
                      })) &&
                      $vu2(
                        value,
                        _path + $join(key),
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + $join(key),
                      expected:
                        "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
                      value: value,
                    })
                  );
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo16 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "apiKey" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"apiKey"',
                value: input.type,
              }),
            undefined === input["in"] ||
              "header" === input["in"] ||
              "query" === input["in"] ||
              "cookie" === input["in"] ||
              $report(_exceptionable, {
                path: _path + '["in"]',
                expected: '("cookie" | "header" | "query" | undefined)',
                value: input["in"],
              }),
            undefined === input.name ||
              "string" === typeof input.name ||
              $report(_exceptionable, {
                path: _path + ".name",
                expected: "(string | undefined)",
                value: input.name,
              }),
            undefined === input.description ||
              "string" === typeof input.description ||
              $report(_exceptionable, {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              }),
          ].every((flag: boolean) => flag);
        const $vo17 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "http" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"http"',
                value: input.type,
              }),
            "basic" === input.scheme ||
              $report(_exceptionable, {
                path: _path + ".scheme",
                expected: '"basic"',
                value: input.scheme,
              }),
            undefined === input.description ||
              "string" === typeof input.description ||
              $report(_exceptionable, {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              }),
          ].every((flag: boolean) => flag);
        const $vo18 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "http" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"http"',
                value: input.type,
              }),
            "bearer" === input.scheme ||
              $report(_exceptionable, {
                path: _path + ".scheme",
                expected: '"bearer"',
                value: input.scheme,
              }),
            undefined === input.bearerFormat ||
              "string" === typeof input.bearerFormat ||
              $report(_exceptionable, {
                path: _path + ".bearerFormat",
                expected: "(string | undefined)",
                value: input.bearerFormat,
              }),
            undefined === input.description ||
              "string" === typeof input.description ||
              $report(_exceptionable, {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              }),
          ].every((flag: boolean) => flag);
        const $vo19 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "oauth2" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"oauth2"',
                value: input.type,
              }),
            ((("object" === typeof input.flows &&
              null !== input.flows &&
              false === Array.isArray(input.flows)) ||
              $report(_exceptionable, {
                path: _path + ".flows",
                expected: "OpenApi.ISecurityScheme.IOAuth2.IFlowSet",
                value: input.flows,
              })) &&
              $vo20(input.flows, _path + ".flows", true && _exceptionable)) ||
              $report(_exceptionable, {
                path: _path + ".flows",
                expected: "OpenApi.ISecurityScheme.IOAuth2.IFlowSet",
                value: input.flows,
              }),
            undefined === input.description ||
              "string" === typeof input.description ||
              $report(_exceptionable, {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              }),
          ].every((flag: boolean) => flag);
        const $vo20 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.authorizationCode ||
              ((("object" === typeof input.authorizationCode &&
                null !== input.authorizationCode &&
                false === Array.isArray(input.authorizationCode)) ||
                $report(_exceptionable, {
                  path: _path + ".authorizationCode",
                  expected:
                    "(OpenApi.ISecurityScheme.IOAuth2.IFlow | undefined)",
                  value: input.authorizationCode,
                })) &&
                $vo21(
                  input.authorizationCode,
                  _path + ".authorizationCode",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".authorizationCode",
                expected: "(OpenApi.ISecurityScheme.IOAuth2.IFlow | undefined)",
                value: input.authorizationCode,
              }),
            undefined === input.implicit ||
              ((("object" === typeof input.implicit &&
                null !== input.implicit &&
                false === Array.isArray(input.implicit)) ||
                $report(_exceptionable, {
                  path: _path + ".implicit",
                  expected:
                    '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "tokenUrl"> | undefined)',
                  value: input.implicit,
                })) &&
                $vo23(
                  input.implicit,
                  _path + ".implicit",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".implicit",
                expected:
                  '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "tokenUrl"> | undefined)',
                value: input.implicit,
              }),
            undefined === input.password ||
              ((("object" === typeof input.password &&
                null !== input.password &&
                false === Array.isArray(input.password)) ||
                $report(_exceptionable, {
                  path: _path + ".password",
                  expected:
                    '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                  value: input.password,
                })) &&
                $vo24(
                  input.password,
                  _path + ".password",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".password",
                expected:
                  '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                value: input.password,
              }),
            undefined === input.clientCredentials ||
              ((("object" === typeof input.clientCredentials &&
                null !== input.clientCredentials &&
                false === Array.isArray(input.clientCredentials)) ||
                $report(_exceptionable, {
                  path: _path + ".clientCredentials",
                  expected:
                    '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                  value: input.clientCredentials,
                })) &&
                $vo24(
                  input.clientCredentials,
                  _path + ".clientCredentials",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".clientCredentials",
                expected:
                  '(Omit<OpenApi.ISecurityScheme.IOAuth2.IFlow, "authorizationUrl"> | undefined)',
                value: input.clientCredentials,
              }),
          ].every((flag: boolean) => flag);
        const $vo21 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.authorizationUrl ||
              "string" === typeof input.authorizationUrl ||
              $report(_exceptionable, {
                path: _path + ".authorizationUrl",
                expected: "(string | undefined)",
                value: input.authorizationUrl,
              }),
            undefined === input.tokenUrl ||
              "string" === typeof input.tokenUrl ||
              $report(_exceptionable, {
                path: _path + ".tokenUrl",
                expected: "(string | undefined)",
                value: input.tokenUrl,
              }),
            undefined === input.refreshUrl ||
              "string" === typeof input.refreshUrl ||
              $report(_exceptionable, {
                path: _path + ".refreshUrl",
                expected: "(string | undefined)",
                value: input.refreshUrl,
              }),
            undefined === input.scopes ||
              ((("object" === typeof input.scopes &&
                null !== input.scopes &&
                false === Array.isArray(input.scopes)) ||
                $report(_exceptionable, {
                  path: _path + ".scopes",
                  expected: "(Record<string, string> | undefined)",
                  value: input.scopes,
                })) &&
                $vo22(
                  input.scopes,
                  _path + ".scopes",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".scopes",
                expected: "(Record<string, string> | undefined)",
                value: input.scopes,
              }),
          ].every((flag: boolean) => flag);
        const $vo22 = (
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
                    "string" === typeof value ||
                    $report(_exceptionable, {
                      path: _path + $join(key),
                      expected: "string",
                      value: value,
                    })
                  );
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo23 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.authorizationUrl ||
              "string" === typeof input.authorizationUrl ||
              $report(_exceptionable, {
                path: _path + ".authorizationUrl",
                expected: "(string | undefined)",
                value: input.authorizationUrl,
              }),
            undefined === input.refreshUrl ||
              "string" === typeof input.refreshUrl ||
              $report(_exceptionable, {
                path: _path + ".refreshUrl",
                expected: "(string | undefined)",
                value: input.refreshUrl,
              }),
            undefined === input.scopes ||
              ((("object" === typeof input.scopes &&
                null !== input.scopes &&
                false === Array.isArray(input.scopes)) ||
                $report(_exceptionable, {
                  path: _path + ".scopes",
                  expected: "(Record<string, string> | undefined)",
                  value: input.scopes,
                })) &&
                $vo22(
                  input.scopes,
                  _path + ".scopes",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".scopes",
                expected: "(Record<string, string> | undefined)",
                value: input.scopes,
              }),
          ].every((flag: boolean) => flag);
        const $vo24 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.tokenUrl ||
              "string" === typeof input.tokenUrl ||
              $report(_exceptionable, {
                path: _path + ".tokenUrl",
                expected: "(string | undefined)",
                value: input.tokenUrl,
              }),
            undefined === input.refreshUrl ||
              "string" === typeof input.refreshUrl ||
              $report(_exceptionable, {
                path: _path + ".refreshUrl",
                expected: "(string | undefined)",
                value: input.refreshUrl,
              }),
            undefined === input.scopes ||
              ((("object" === typeof input.scopes &&
                null !== input.scopes &&
                false === Array.isArray(input.scopes)) ||
                $report(_exceptionable, {
                  path: _path + ".scopes",
                  expected: "(Record<string, string> | undefined)",
                  value: input.scopes,
                })) &&
                $vo22(
                  input.scopes,
                  _path + ".scopes",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".scopes",
                expected: "(Record<string, string> | undefined)",
                value: input.scopes,
              }),
          ].every((flag: boolean) => flag);
        const $vo25 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "openIdConnect" === input.type ||
              $report(_exceptionable, {
                path: _path + ".type",
                expected: '"openIdConnect"',
                value: input.type,
              }),
            "string" === typeof input.openIdConnectUrl ||
              $report(_exceptionable, {
                path: _path + ".openIdConnectUrl",
                expected: "string",
                value: input.openIdConnectUrl,
              }),
            undefined === input.description ||
              "string" === typeof input.description ||
              $report(_exceptionable, {
                path: _path + ".description",
                expected: "(string | undefined)",
                value: input.description,
              }),
          ].every((flag: boolean) => flag);
        const $vu0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input["const"])
              return $vo3(input, _path, true && _exceptionable);
            else if ("boolean" === input.type)
              return $vo4(input, _path, true && _exceptionable);
            else if ("number" === input.type)
              return $vo6(input, _path, true && _exceptionable);
            else if ("integer" === input.type)
              return $vo5(input, _path, true && _exceptionable);
            else if ("string" === input.type)
              return $vo7(input, _path, true && _exceptionable);
            else if (undefined !== input.items)
              return $vo8(input, _path, true && _exceptionable);
            else if (undefined !== input.prefixItems)
              return $vo9(input, _path, true && _exceptionable);
            else if ("object" === input.type)
              return $vo10(input, _path, true && _exceptionable);
            else if (undefined !== input.$ref)
              return $vo11(input, _path, true && _exceptionable);
            else if (undefined !== input.oneOf)
              return $vo12(input, _path, true && _exceptionable);
            else if ("null" === input.type)
              return $vo13(input, _path, true && _exceptionable);
            else return $vo14(input, _path, true && _exceptionable);
          })();
        const $vu1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input["const"])
              return $vo3(input, _path, true && _exceptionable);
            else if ("boolean" === input.type)
              return $vo4(input, _path, true && _exceptionable);
            else if ("number" === input.type)
              return $vo6(input, _path, true && _exceptionable);
            else if ("integer" === input.type)
              return $vo5(input, _path, true && _exceptionable);
            else if ("string" === input.type)
              return $vo7(input, _path, true && _exceptionable);
            else if (undefined !== input.items)
              return $vo8(input, _path, true && _exceptionable);
            else if (undefined !== input.prefixItems)
              return $vo9(input, _path, true && _exceptionable);
            else if ("object" === input.type)
              return $vo10(input, _path, true && _exceptionable);
            else if (undefined !== input.$ref)
              return $vo11(input, _path, true && _exceptionable);
            else if ("null" === input.type)
              return $vo13(input, _path, true && _exceptionable);
            else return $vo14(input, _path, true && _exceptionable);
          })();
        const $vu2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if ("apiKey" === input.type)
              return $vo16(input, _path, true && _exceptionable);
            else if ("basic" === input.scheme)
              return $vo17(input, _path, true && _exceptionable);
            else if ("bearer" === input.scheme)
              return $vo18(input, _path, true && _exceptionable);
            else if ("oauth2" === input.type)
              return $vo19(input, _path, true && _exceptionable);
            else if ("openIdConnect" === input.type)
              return $vo25(input, _path, true && _exceptionable);
            else
              return $report(_exceptionable, {
                path: _path,
                expected:
                  "(OpenApi.ISecurityScheme.IApiKey | OpenApi.ISecurityScheme.IHttpBasic | OpenApi.ISecurityScheme.IHttpBearer | OpenApi.ISecurityScheme.IOAuth2 | OpenApi.ISecurityScheme.IOpenId)",
                value: input,
              });
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
                      expected: "IJsonApplication.IV3_1",
                      value: elem,
                    })) &&
                    $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                  $report(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "IJsonApplication.IV3_1",
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
  })(input),
);
