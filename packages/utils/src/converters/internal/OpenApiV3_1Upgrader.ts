import { IJsonSchemaAttribute, OpenApi, OpenApiV3_1 } from "@typia/interface";

import { OpenApiReferenceKey } from "../../utils/internal/OpenApiReferenceKey";
import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";
import { OpenApiV3_1TypeChecker } from "../../validators/OpenApiV3_1TypeChecker";
import { OpenApiDiscriminatorConverter } from "./OpenApiDiscriminatorConverter";
import { OpenApiExclusiveEmender } from "./OpenApiExclusiveEmender";

/**
 * Upgrades an OpenAPI 3.1 document to the emended OpenAPI 3.2 form.
 *
 * Besides the work shared with the 3.0 upgrader, it resolves webhook and
 * component references, turns `type` arrays and tuple spellings into the
 * emended union and tuple forms, and reads `contentEncoding: base64` as the
 * `byte` format. The 3.2 upgrader reuses its schema conversion.
 *
 * @evidence contracts/common.md#principled-implementation A 3.1 document is brought to the emended form with the 3.0 rewrites plus webhooks and path-item references, `type` arrays, `const`, both tuple spellings and base64 content encoding, with schema references rewritten to the components path.
 * @evidence contracts/common.md#clear-and-simple-design Private helpers per object kind; the schema conversion is exported because the 3.2 upgrader reuses it, and the document-level helpers duplicate the 3.0 ones, which is a limitation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The declared dialect decides every rewrite; no example document is special-cased.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment was added that lists the rewrites and the reuse by 3.2.
 */
export namespace OpenApiV3_1Upgrader {
  /**
   * Upgrade a whole 3.1 document; a document that is already emended is
   * returned as it is.
   *
   * @param input OpenAPI 3.1 document
   *
   * @returns Emended document marked with `x-typia-emended-v12`
   *
   * @evidence contracts/common.md#principled-implementation An emended input is returned unchanged, otherwise the version and marker are set and components, paths and webhooks are converted.
   * @evidence contracts/common.md#clear-and-simple-design One function.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The marker is the contract marker.
   * @evidence contracts/common.md#meaningful-documentation A doc was added that states the pass-through of an emended document.
   */
  export const convert = (input: OpenApiV3_1.IDocument): OpenApi.IDocument => {
    if ((input as unknown as OpenApi.IDocument)["x-typia-emended-v12"] === true)
      return input as unknown as OpenApi.IDocument;
    return {
      ...input,
      openapi: "3.2.0",
      components: convertComponents(input.components ?? {}),
      paths: input.paths
        ? Object.fromEntries(
            Object.entries(input.paths)
              .filter(([_, v]) => v !== undefined)
              .map(
                ([key, value]) => [key, convertPathItem(input)(value)] as const,
              ),
          )
        : undefined,
      webhooks: input.webhooks
        ? Object.fromEntries(
            Object.entries(input.webhooks)
              .filter(([_, v]) => v !== undefined)
              .map(
                ([key, value]) =>
                  [key, convertWebhooks(input)(value)!] as const,
              )
              .filter(([_, value]) => value !== undefined),
          )
        : undefined,
      "x-typia-emended-v12": true,
    };
  };

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const convertWebhooks =
    (doc: OpenApiV3_1.IDocument) =>
    (
      webhook:
        | OpenApiV3_1.IPath
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/pathItems/${string}`>,
    ): OpenApi.IPath | undefined => {
      if (!OpenApiV3_1TypeChecker.isReference(webhook))
        return convertPathItem(doc)(webhook);
      const found: OpenApiV3_1.IPath | undefined = OpenApiReferenceKey.get(
        doc.components?.pathItems,
        webhook.$ref,
      );
      return found ? convertPathItem(doc)(found) : undefined;
    };

  const convertPathItem =
    (doc: OpenApiV3_1.IDocument) =>
    (pathItem: OpenApiV3_1.IPath): OpenApi.IPath => {
      // Convert x-additionalOperations to additionalOperations
      // Promote "query" to standard method (it's a v3.2 standard method)
      const xAdditional = pathItem["x-additionalOperations"];
      const queryOp = xAdditional?.["query"];
      const additionalOperations = xAdditional
        ? Object.fromEntries(
            Object.entries(xAdditional)
              .filter(([key, v]) => key !== "query" && v !== undefined)
              .map(([key, value]) => [
                key,
                convertOperation(doc)(pathItem)(value),
              ]),
          )
        : undefined;
      const { parameters: _parameters, ...rest } = pathItem as any;

      return {
        ...rest,
        ...(pathItem.get
          ? { get: convertOperation(doc)(pathItem)(pathItem.get) }
          : undefined),
        ...(pathItem.put
          ? { put: convertOperation(doc)(pathItem)(pathItem.put) }
          : undefined),
        ...(pathItem.post
          ? { post: convertOperation(doc)(pathItem)(pathItem.post) }
          : undefined),
        ...(pathItem.delete
          ? { delete: convertOperation(doc)(pathItem)(pathItem.delete) }
          : undefined),
        ...(pathItem.options
          ? { options: convertOperation(doc)(pathItem)(pathItem.options) }
          : undefined),
        ...(pathItem.head
          ? { head: convertOperation(doc)(pathItem)(pathItem.head) }
          : undefined),
        ...(pathItem.patch
          ? { patch: convertOperation(doc)(pathItem)(pathItem.patch) }
          : undefined),
        ...(pathItem.trace
          ? { trace: convertOperation(doc)(pathItem)(pathItem.trace) }
          : undefined),
        ...(queryOp
          ? { query: convertOperation(doc)(pathItem)(queryOp) }
          : undefined),
        ...(additionalOperations && Object.keys(additionalOperations).length > 0
          ? { additionalOperations }
          : undefined),
        "x-additionalOperations": undefined,
      };
    };

  const convertOperation =
    (doc: OpenApiV3_1.IDocument) =>
    (pathItem: OpenApiV3_1.IPath) =>
    (input: OpenApiV3_1.IOperation): OpenApi.IOperation => {
      const components: OpenApiV3_1.IComponents = doc.components ?? {};
      const pathParameters: OpenApiV3_1.IOperation.IParameter[] = (
        pathItem.parameters ?? []
      )
        .map(resolveParameter(components))
        .filter((p): p is OpenApiV3_1.IOperation.IParameter => p !== undefined);
      const operationParameters: OpenApiV3_1.IOperation.IParameter[] = (
        input.parameters ?? []
      )
        .map(resolveParameter(components))
        .filter((p): p is OpenApiV3_1.IOperation.IParameter => p !== undefined);
      return {
        ...input,
        parameters:
          pathItem.parameters !== undefined || input.parameters !== undefined
            ? mergeParameters(pathParameters, operationParameters).map(
                convertParameter(components),
              )
            : undefined,
        requestBody: input.requestBody
          ? convertRequestBody(doc)(input.requestBody)
          : undefined,
        responses: input.responses
          ? Object.fromEntries(
              Object.entries(input.responses)
                .filter(([_, v]) => v !== undefined)
                .map(
                  ([key, value]) =>
                    [key, convertResponse(doc)(value)!] as const,
                )
                .filter(([_, value]) => value !== undefined),
            )
          : undefined,
      };
    };

  const resolveParameter =
    (components: OpenApiV3_1.IComponents) =>
    (
      input:
        | OpenApiV3_1.IOperation.IParameter
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/headers/${string}`>
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/parameters/${string}`>,
    ): OpenApiV3_1.IOperation.IParameter | undefined => {
      if (!("$ref" in input)) return input;
      const key: string | undefined = OpenApiReferenceKey.read(input.$ref);
      if (key === undefined) return undefined;
      if (input.$ref.startsWith("#/components/headers/")) {
        const header:
          | Omit<OpenApiV3_1.IOperation.IParameter, "in">
          | undefined = OpenApiReferenceKey.get(components.headers, input.$ref);
        if (header === undefined) return undefined;
        const { name, ...rest } = header;
        return { ...rest, name: name ?? key, in: "header" };
      }
      return OpenApiReferenceKey.get(components.parameters, input.$ref);
    };

  const mergeParameters = (
    pathParameters: OpenApiV3_1.IOperation.IParameter[],
    operationParameters: OpenApiV3_1.IOperation.IParameter[],
  ): OpenApiV3_1.IOperation.IParameter[] => {
    const map: Map<string, OpenApiV3_1.IOperation.IParameter> = new Map();
    const duplicates = (
      parameters: OpenApiV3_1.IOperation.IParameter[],
    ): OpenApiV3_1.IOperation.IParameter[] => {
      const seen: Set<string> = new Set();
      return parameters.filter((parameter) => {
        const key: string = `${parameter.in}:${parameter.name}`;
        if (seen.has(key)) return true;
        seen.add(key);
        return false;
      });
    };
    const emplace = (parameter: OpenApiV3_1.IOperation.IParameter): void => {
      map.set(`${parameter.in}:${parameter.name}`, parameter);
    };
    pathParameters.forEach(emplace);
    operationParameters.forEach(emplace);
    return [
      ...map.values(),
      ...duplicates(pathParameters),
      ...duplicates(operationParameters),
    ];
  };

  const convertParameter =
    (components: OpenApiV3_1.IComponents) =>
    (
      input: OpenApiV3_1.IOperation.IParameter,
    ): OpenApi.IOperation.IParameter => {
      const { required: inputRequired, ...rest } = input;
      const required: boolean | undefined =
        input.in === "path" ? true : inputRequired;
      return {
        ...rest,
        ...(required !== undefined ? { required } : {}),
        schema: convertSchema(components)(input.schema),
        examples: input.examples
          ? Object.fromEntries(
              Object.entries(input.examples)
                .map(([key, value]) => [
                  key,
                  OpenApiV3_1TypeChecker.isReference(value)
                    ? OpenApiReferenceKey.get(components.examples, value.$ref)
                    : value,
                ])
                .filter(([_, v]) => v !== undefined),
            )
          : undefined,
      };
    };

  const convertRequestBody =
    (doc: OpenApiV3_1.IDocument) =>
    (
      input:
        | OpenApiV3_1.IOperation.IRequestBody
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/requestBodies/${string}`>,
    ): OpenApi.IOperation.IRequestBody | undefined => {
      if ("$ref" in input) {
        const found: OpenApiV3_1.IOperation.IRequestBody | undefined =
          OpenApiReferenceKey.get(doc.components?.requestBodies, input.$ref);
        if (found === undefined) return undefined;
        input = found;
      }
      return {
        ...input,
        content: input.content
          ? convertContent(doc.components ?? {})(input.content)
          : undefined,
      };
    };

  const convertResponse =
    (doc: OpenApiV3_1.IDocument) =>
    (
      input:
        | OpenApiV3_1.IOperation.IResponse
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/responses/${string}`>,
    ): OpenApi.IOperation.IResponse | undefined => {
      if ("$ref" in input) {
        const found: OpenApiV3_1.IOperation.IResponse | undefined =
          OpenApiReferenceKey.get(doc.components?.responses, input.$ref);
        if (found === undefined) return undefined;
        input = found;
      }
      return {
        ...input,
        content: input.content
          ? convertContent(doc.components ?? {})(input.content)
          : undefined,
        headers: input.headers
          ? Object.fromEntries(
              Object.entries(input.headers)
                .filter(([_, v]) => v !== undefined)
                .map(([key, value]) => [
                  key,
                  convertHeader(doc.components ?? {})(key, value),
                ])
                .filter(([_, v]) => v !== undefined),
            )
          : undefined,
      };
    };

  const convertHeader =
    (components: OpenApiV3_1.IComponents) =>
    (
      key: string,
      input:
        | Omit<OpenApiV3_1.IOperation.IParameter, "in">
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/headers/${string}`>,
    ): OpenApi.IOperation.IParameter | undefined => {
      if ("$ref" in input) {
        const found: Omit<OpenApiV3_1.IOperation.IParameter, "in"> | undefined =
          input.$ref.startsWith("#/components/headers/")
            ? OpenApiReferenceKey.get(components.headers, input.$ref)
            : undefined;
        if (found === undefined) return undefined;
        input = found;
      }
      const { name: _name, ...rest } = input;
      return convertParameter(components)({
        ...rest,
        name: key,
        in: "header",
      });
    };

  const convertContent =
    (components: OpenApiV3_1.IComponents) =>
    (
      record: Record<string, OpenApiV3_1.IOperation.IMediaType>,
    ): Record<string, OpenApi.IOperation.IMediaType> =>
      Object.fromEntries(
        Object.entries(record)
          .filter(([_, v]) => v !== undefined)
          .map(
            ([key, value]) =>
              [
                key,
                {
                  ...value,
                  schema: value.schema
                    ? convertSchema(components)(value.schema)
                    : undefined,
                  examples: value.examples
                    ? Object.fromEntries(
                        Object.entries(value.examples)
                          .map(([key, value]) => [
                            key,
                            OpenApiV3_1TypeChecker.isReference(value)
                              ? OpenApiReferenceKey.get(
                                  components.examples,
                                  value.$ref,
                                )
                              : value,
                          ])
                          .filter(([_, v]) => v !== undefined),
                      )
                    : undefined,
                },
              ] as const,
          ),
      );

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  /**
   * Upgrade the components of a 3.1 or 3.2 document; only schemas and security
   * schemes are kept.
   *
   * @param input OpenAPI 3.1 components
   *
   * @returns Emended components
   *
   * @evidence contracts/common.md#principled-implementation Component schemas are converted and security schemes kept; other component kinds are not needed once references are inlined.
   * @evidence contracts/common.md#clear-and-simple-design One function, also used for 3.2 and for the component entry of OpenApiConverter.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No unreachable component is retained.
   * @evidence contracts/common.md#meaningful-documentation A doc was added that states what is kept.
   */
  export const convertComponents = (
    input: OpenApiV3_1.IComponents,
  ): OpenApi.IComponents => ({
    schemas: Object.fromEntries(
      Object.entries(input.schemas ?? {})
        .filter(([_, v]) => v !== undefined)
        .map(([key, value]) => [key, convertSchema(input)(value)] as const),
    ),
    securitySchemes: input.securitySchemes,
  });

  /**
   * Upgrade one 3.1 schema, as the 3.2 upgrader does too.
   *
   * A `type` array becomes a union with one member per listed type. A non-empty
   * `enum` restricts every listed type to its own values, and a type that none
   * of them has is not a member. A tuple in either spelling becomes
   * `prefixItems` with its rest schema.
   *
   * @param components Components used to resolve references
   *
   * @returns Function that converts a 3.1 schema to the emended schema
   *
   * @evidence contracts/common.md#principled-implementation A type array is expanded to one visit per listed type, so each member is a normal single-type schema, and a non-empty enum restricts each listed type to its own values; this replaces the earlier test that was true for every non-empty enum and kept a member for a type with no enum value. Remaining rules follow the 3.0 conversion plus tuple, recursive reference and base64 handling.
   * @evidence contracts/common.md#clear-and-simple-design One recursive function with a mixed-type branch that reuses the single-type branches.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The enum restriction follows JSON Schema's simultaneous type and enum constraint, and the corrected condition is the principled form, not a patch for one input.
   * @evidence contracts/common.md#meaningful-documentation A doc was added that states the type array, enum and tuple rules.
   */
  export const convertSchema =
    (components: OpenApiV3_1.IComponents) =>
    (input: OpenApiV3_1.IJsonSchema): OpenApi.IJsonSchema => {
      const union: OpenApi.IJsonSchema[] = [];
      const discriminator:
        | OpenApi.IJsonSchema.IOneOf.IDiscriminator
        | undefined =
        OpenApiV3_1TypeChecker.isMixed(input) === false &&
        OpenApiV3_1TypeChecker.isOneOf(input) &&
        input.discriminator !== undefined
          ? OpenApiDiscriminatorConverter.clone(input.discriminator)
          : undefined;
      let preserveDiscriminator: boolean = discriminator !== undefined;
      const attribute: IJsonSchemaAttribute = {
        title: input.title,
        description: input.description,
        deprecated: input.deprecated,
        readOnly: input.readOnly,
        writeOnly: input.writeOnly,
        example: input.example,
        examples: Array.isArray(input.examples)
          ? Object.fromEntries(input.examples.map((v, i) => [`v${i}`, v]))
          : input.examples,
        ...Object.fromEntries(
          Object.entries(input).filter(
            ([key, value]) => key.startsWith("x-") && value !== undefined,
          ),
        ),
      };
      const nullable: { value: boolean; default?: null } = {
        value: false,
        default: undefined,
      };

      const visit = (schema: OpenApiV3_1.IJsonSchema): void => {
        // NULLABLE PROPERTY
        if ((schema as OpenApiV3_1.IJsonSchema.INumber).nullable === true) {
          nullable.value ||= true;
          if ((schema as OpenApiV3_1.IJsonSchema.INumber).default === null)
            nullable.default = null;
        }
        if (
          Array.isArray((schema as OpenApiV3_1.IJsonSchema.INumber).enum) &&
          (schema as OpenApiV3_1.IJsonSchema.INumber).enum?.length &&
          (schema as OpenApiV3_1.IJsonSchema.INumber).enum?.some(
            (e) => e === null,
          )
        )
          nullable.value ||= true;

        // MIXED TYPE CASE
        if (OpenApiV3_1TypeChecker.isMixed(schema)) {
          if (schema.const !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                oneOf: undefined,
                anyOf: undefined,
                allOf: undefined,
                $ref: undefined,
              },
            });
          if (schema.oneOf !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                anyOf: undefined,
                allOf: undefined,
                $ref: undefined,
              },
            });
          if (schema.anyOf !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                oneOf: undefined,
                allOf: undefined,
                $ref: undefined,
              },
            });
          if (schema.allOf !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                oneOf: undefined,
                anyOf: undefined,
                $ref: undefined,
              },
            });
          // A non-empty enum restricts every listed type to the values of that
          // type; a type none of them has is not a member.
          const enumerated: boolean =
            schema.enum !== undefined && schema.enum.length !== 0;
          for (const type of schema.type) {
            const values: unknown[] | undefined = !enumerated
              ? undefined
              : type === "boolean" || type === "number" || type === "string"
                ? schema.enum!.filter((x) => typeof x === type)
                : type === "integer"
                  ? schema.enum!.filter(
                      (x) => typeof x === "number" && Number.isInteger(x),
                    )
                  : type === "null"
                    ? schema.enum!.filter((x) => x === null)
                    : undefined;
            if (values !== undefined && values.length === 0) continue;
            visit({
              ...schema,
              ...(type === "null"
                ? { enum: undefined }
                : type === "boolean" ||
                    type === "number" ||
                    type === "string" ||
                    type === "integer"
                  ? { enum: values as any }
                  : {}),
              type: type as any,
            });
          }
        }
        // UNION TYPE CASE
        else if (OpenApiV3_1TypeChecker.isOneOf(schema)) {
          const tracked: boolean =
            schema === input && discriminator !== undefined;
          if (tracked && nullable.value) preserveDiscriminator = false;
          for (const branch of schema.oneOf) {
            const previous: number = union.length;
            const previousNullable: boolean = nullable.value;
            visit(branch);
            if (
              tracked &&
              (union.length !== previous + 1 ||
                nullable.value !== previousNullable)
            )
              preserveDiscriminator = false;
          }
        } else if (OpenApiV3_1TypeChecker.isAnyOf(schema))
          schema.anyOf.forEach(visit);
        else if (OpenApiV3_1TypeChecker.isAllOf(schema))
          if (schema.allOf.length === 1) visit(schema.allOf[0]!);
          else union.push(convertAllOfSchema(components)(schema));
        // ATOMIC TYPE CASE (CONSIDER ENUM VALUES)
        else if (OpenApiV3_1TypeChecker.isBoolean(schema))
          if (
            schema.enum?.length &&
            schema.enum.filter((e) => e !== null).length
          )
            for (const value of schema.enum.filter((e) => e !== null))
              union.push({
                const: value,
                ...({
                  ...schema,
                  type: undefined as any,
                  enum: undefined,
                  default: undefined,
                } satisfies OpenApiV3_1.IJsonSchema.IBoolean as any),
              } satisfies OpenApi.IJsonSchema.IConstant);
          else
            union.push({
              ...schema,
              default: schema.default ?? undefined,
              ...{
                enum: undefined,
              },
            });
        else if (
          OpenApiV3_1TypeChecker.isInteger(schema) ||
          OpenApiV3_1TypeChecker.isNumber(schema)
        )
          if (schema.enum?.length && schema.enum.filter((e) => e !== null))
            for (const value of schema.enum.filter((e) => e !== null))
              union.push({
                const: value,
                ...({
                  ...schema,
                  type: undefined as any,
                  enum: undefined,
                  default: undefined,
                  minimum: undefined,
                  maximum: undefined,
                  exclusiveMinimum: undefined,
                  exclusiveMaximum: undefined,
                  multipleOf: undefined,
                } satisfies OpenApiV3_1.IJsonSchema.IInteger as any),
              } satisfies OpenApi.IJsonSchema.IConstant);
          else
            union.push(
              OpenApiExclusiveEmender.emend({
                ...schema,
                default: schema.default ?? undefined,
                ...{
                  enum: undefined,
                },
                exclusiveMinimum:
                  typeof schema.exclusiveMinimum === "boolean"
                    ? schema.exclusiveMinimum === true
                      ? schema.minimum
                      : undefined
                    : schema.exclusiveMinimum,
                exclusiveMaximum:
                  typeof schema.exclusiveMaximum === "boolean"
                    ? schema.exclusiveMaximum === true
                      ? schema.maximum
                      : undefined
                    : schema.exclusiveMaximum,
                minimum:
                  schema.exclusiveMinimum === true ? undefined : schema.minimum,
                maximum:
                  schema.exclusiveMaximum === true ? undefined : schema.maximum,
              }),
            );
        else if (OpenApiV3_1TypeChecker.isString(schema)) {
          const normalized: OpenApiV3_1.IJsonSchema.IString =
            normalizeStringSchema(schema);
          if (
            normalized.enum?.length &&
            normalized.enum.filter((e) => e !== null).length
          )
            for (const value of normalized.enum.filter((e) => e !== null))
              union.push({
                const: value,
                ...({
                  ...normalized,
                  type: undefined as any,
                  enum: undefined,
                  default: undefined,
                } satisfies OpenApiV3_1.IJsonSchema.IString as any),
              } satisfies OpenApi.IJsonSchema.IConstant);
          else
            union.push({
              ...normalized,
              default: normalized.default ?? undefined,
              ...{
                enum: undefined,
              },
            });
        }
        // ARRAY TYPE CASE (CONSIDER TUPLE)
        else if (OpenApiV3_1TypeChecker.isArray(schema)) {
          if (Array.isArray(schema.items))
            union.push({
              ...schema,
              ...{
                items: undefined!,
                prefixItems: schema.items.map(convertSchema(components)),
                additionalItems:
                  typeof schema.additionalItems === "object" &&
                  schema.additionalItems !== null
                    ? convertSchema(components)(schema.additionalItems)
                    : schema.additionalItems,
              },
            } satisfies OpenApi.IJsonSchema.ITuple);
          else if (Array.isArray(schema.prefixItems))
            union.push({
              ...schema,
              ...{
                items: undefined!,
                prefixItems: schema.prefixItems.map(convertSchema(components)),
                minItems: schema.minItems ?? 0,
                additionalItems:
                  typeof schema.items === "object" && schema.items !== null
                    ? convertSchema(components)(schema.items)
                    : (schema.items ?? true),
              },
            });
          else if (schema.items === undefined)
            // JSON SCHEMA 2020-12 TREATS OMITTED `items` AS AN OPEN `any[]`
            union.push({
              ...schema,
              ...{
                items: {},
                prefixItems: undefined,
                additionalItems: undefined,
              },
            });
          else
            union.push({
              ...schema,
              ...{
                items: convertSchema(components)(schema.items),
                prefixItems: undefined,
                additionalItems: undefined,
              },
            });
        }
        // OBJECT TYPE CASE
        else if (OpenApiV3_1TypeChecker.isObject(schema)) {
          union.push({
            ...schema,
            properties:
              schema.properties === undefined
                ? undefined
                : Object.fromEntries(
                    Object.entries(schema.properties)
                      .filter(([_, v]) => v !== undefined)
                      .map(
                        ([key, value]) =>
                          [key, convertSchema(components)(value)] as const,
                      ),
                  ),
            additionalProperties:
              schema.additionalProperties === undefined
                ? undefined
                : typeof schema.additionalProperties === "object" &&
                    schema.additionalProperties !== null
                  ? convertSchema(components)(schema.additionalProperties)
                  : schema.additionalProperties,
            required: schema.required,
          });
        } else if (OpenApiV3_1TypeChecker.isReference(schema))
          union.push({
            ...schema,
            ...{
              $ref: `#/components/schemas/${schema.$ref.split("/").pop()}`,
            },
          });
        else if (OpenApiV3_1TypeChecker.isRecursiveReference(schema))
          union.push({
            ...schema,
            ...{
              $ref: `#/components/schemas/${schema.$recursiveRef.split("/").pop()}`,
              $recursiveRef: undefined,
            },
          });
        // THE OTHERS
        else union.push(schema);
      };

      visit(input);
      if (
        nullable.value === true &&
        !union.some((e) => (e as OpenApi.IJsonSchema.INull).type === "null")
      )
        union.push({
          type: "null",
          default: nullable.default,
        });
      if (
        union.length === 2 &&
        union.filter((x) => OpenApiTypeChecker.isNull(x)).length === 1
      ) {
        const type: OpenApi.IJsonSchema = union.filter(
          (x) => OpenApiTypeChecker.isNull(x) === false,
        )[0]!;
        for (const key of [
          "title",
          "description",
          "deprecated",
          "readOnly",
          "writeOnly",
          "example",
          "examples",
        ] as const)
          if (type[key] !== undefined) delete type[key];
      }
      return {
        ...(union.length === 0
          ? {
              type: undefined,
            }
          : union.length === 1
            ? {
                ...union[0],
              }
            : {
                oneOf: union.map((u) => ({
                  ...u,
                  nullable: undefined,
                  $defs: undefined,
                })),
                ...(preserveDiscriminator && discriminator !== undefined
                  ? { discriminator }
                  : {}),
              }),
        ...attribute,
        ...{
          nullable: undefined,
          $defs: undefined,
        },
      };
    };

  const convertAllOfSchema =
    (components: OpenApiV3_1.IComponents) =>
    (input: OpenApiV3_1.IJsonSchema.IAllOf): OpenApi.IJsonSchema => {
      const objects: Array<OpenApiV3_1.IJsonSchema.IObject | null> =
        input.allOf.map((schema) => retrieveObject(components)(schema));
      if (objects.some((obj) => obj === null))
        return {
          type: undefined,
          ...{
            allOf: undefined,
          },
        };
      return {
        ...input,
        type: "object" as const,
        properties: Object.fromEntries(
          objects
            .map((o) => Object.entries(o?.properties ?? {}))
            .flat()
            .map(
              ([key, value]) =>
                [key, convertSchema(components)(value)] as const,
            ),
        ),
        additionalProperties: objects.every(
          (o) => o?.additionalProperties === false,
        )
          ? false
          : undefined,
        ...{
          allOf: undefined,
          required: [...new Set(objects.map((o) => o?.required ?? []).flat())],
        },
      };
    };

  const retrieveObject =
    (components: OpenApiV3_1.IComponents) =>
    (
      input: OpenApiV3_1.IJsonSchema,
      visited: Set<OpenApiV3_1.IJsonSchema> = new Set(),
    ): OpenApiV3_1.IJsonSchema.IObject | null => {
      if (OpenApiV3_1TypeChecker.isObject(input))
        return input.properties !== undefined && !input.additionalProperties
          ? input
          : null;
      else if (visited.has(input)) return null;
      else visited.add(input);

      if (OpenApiV3_1TypeChecker.isReference(input))
        return retrieveObject(components)(
          OpenApiReferenceKey.get(components.schemas, input.$ref) ?? {},
          visited,
        );
      else if (OpenApiV3_1TypeChecker.isRecursiveReference(input))
        return retrieveObject(components)(
          OpenApiReferenceKey.get(components.schemas, input.$recursiveRef) ??
            {},
          visited,
        );
      return null;
    };

  const normalizeStringSchema = (
    schema: OpenApiV3_1.IJsonSchema.IString,
  ): OpenApiV3_1.IJsonSchema.IString => {
    if (
      schema.contentEncoding !== "base64" ||
      (schema.format !== undefined && schema.format !== "byte")
    )
      return schema;
    const { contentEncoding: _contentEncoding, ...rest } = schema;
    return {
      ...rest,
      format: "byte",
    };
  };
}
