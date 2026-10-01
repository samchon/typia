import { OpenApi, OpenApiV3 } from "@typia/interface";

import { ObjectDictionary } from "../../utils/internal/ObjectDictionary";
import { OpenApiReferenceKey } from "../../utils/internal/OpenApiReferenceKey";
import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";
import { OpenApiDiscriminatorConverter } from "./OpenApiDiscriminatorConverter";

/**
 * Downgrades the emended OpenAPI document to OpenAPI 3.0.
 *
 * Numeric exclusive bounds become the boolean 3.0 form, `null` members become
 * `nullable` on the other members, tuples become bounded arrays of the union of
 * their elements, constants become enums and `examples` are dropped, because
 * 3.0 does not define them. A nullable reference gets a generated `.Nullable`
 * component.
 *
 * @evidence contracts/common.md#principled-implementation The emended document is rewritten to 3.0 by turning numeric exclusive bounds into the draft-04 boolean form, `null` members into `nullable`, constants into enums, tuples into bounded arrays and by dropping `examples`; a nullable reference gets a generated `.Nullable` component so `nullable` can be expressed on a reference.
 * @evidence contracts/common.md#clear-and-simple-design Per-object helpers in one namespace; the rewrites that only 3.0 needs are private to it.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The generated component name suffix is a documented, collision-checked convention; nothing is faked to satisfy a consumer.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment lists the rewrites.
 */
export namespace OpenApiV3Downgrader {
  /**
   * Pair of the original emended components and the 3.0 components being built.
   *
   * @evidence contracts/common.md#principled-implementation A pair of the original and downgraded components lets nullable references consult the source schemas while the target is being built.
   * @evidence contracts/common.md#clear-and-simple-design Two fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states the role.
   */
  export interface IComponentsCollection {
    original: OpenApi.IComponents;
    downgraded: OpenApiV3.IComponents;
  }

  /**
   * Downgrade a whole emended document to 3.0.
   *
   * @param input Emended document
   *
   * @returns OpenAPI 3.0 document
   *
   * @evidence contracts/common.md#principled-implementation The components are downgraded first and then paths are rewritten against the collection; `query` and additional operations have no 3.0 form and are carried to `x-additionalOperations`, while webhooks, which 3.0 has no place for, are not carried and are lost.
   * @evidence contracts/common.md#clear-and-simple-design One function over the shared helpers.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Extension fields are documented ones.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameter and result.
   */
  export const downgrade = (input: OpenApi.IDocument): OpenApiV3.IDocument => {
    const collection: IComponentsCollection = downgradeComponents(
      input.components,
    );
    return {
      openapi: "3.0.0",
      servers: input.servers,
      info: input.info,
      components: collection.downgraded,
      paths: input.paths
        ? Object.fromEntries(
            Object.entries(input.paths)
              .filter(([_, v]) => v !== undefined)
              .map(
                ([key, value]) =>
                  [key, downgradePathItem(collection)(value)] as const,
              ),
          )
        : undefined,
      security: input.security,
      tags: input.tags,
    };
  };

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const downgradePathItem =
    (collection: IComponentsCollection) =>
    (pathItem: OpenApi.IPath): OpenApiV3.IPath => {
      // Collect non-standard operations for x-additionalOperations
      const xAdditionalOperations: Record<string, OpenApiV3.IOperation> = {};

      // query method goes to x-additionalOperations
      if (pathItem.query) {
        xAdditionalOperations["query"] = downgradeOperation(collection)(
          pathItem.query,
        );
      }

      // additionalOperations also go to x-additionalOperations
      if (pathItem.additionalOperations) {
        for (const [key, value] of Object.entries(
          pathItem.additionalOperations,
        )) {
          if (value !== undefined) {
            xAdditionalOperations[key] = downgradeOperation(collection)(value);
          }
        }
      }

      return {
        ...(pathItem as any),
        ...(pathItem.get
          ? { get: downgradeOperation(collection)(pathItem.get) }
          : undefined),
        ...(pathItem.put
          ? { put: downgradeOperation(collection)(pathItem.put) }
          : undefined),
        ...(pathItem.post
          ? { post: downgradeOperation(collection)(pathItem.post) }
          : undefined),
        ...(pathItem.delete
          ? { delete: downgradeOperation(collection)(pathItem.delete) }
          : undefined),
        ...(pathItem.options
          ? { options: downgradeOperation(collection)(pathItem.options) }
          : undefined),
        ...(pathItem.head
          ? { head: downgradeOperation(collection)(pathItem.head) }
          : undefined),
        ...(pathItem.patch
          ? { patch: downgradeOperation(collection)(pathItem.patch) }
          : undefined),
        ...(pathItem.trace
          ? { trace: downgradeOperation(collection)(pathItem.trace) }
          : undefined),
        ...(Object.keys(xAdditionalOperations).length > 0
          ? { "x-additionalOperations": xAdditionalOperations }
          : undefined),
        // Remove v3.2-only properties from spread
        query: undefined,
        additionalOperations: undefined,
      };
    };

  const downgradeOperation =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation): OpenApiV3.IOperation => ({
      ...input,
      parameters: input.parameters
        ? input.parameters.map(downgradeParameter(collection))
        : undefined,
      requestBody: input.requestBody
        ? downgradeRequestBody(collection)(input.requestBody)
        : undefined,
      responses: input.responses
        ? Object.fromEntries(
            Object.entries(input.responses)
              .filter(([_, v]) => v !== undefined)
              .map(([key, value]) => [
                key,
                downgradeResponse(collection)(value),
              ]),
          )
        : undefined,
    });

  const downgradeParameter =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation.IParameter): OpenApiV3.IOperation.IParameter => {
      const { style, content: _content, ...rest } = input;
      return {
        ...rest,
        in: input.in === "querystring" ? "query" : input.in,
        style: style === "cookie" ? "form" : style,
        schema: downgradeSchema(collection)(input.schema),
      };
    };

  const downgradeRequestBody =
    (collection: IComponentsCollection) =>
    (
      input: OpenApi.IOperation.IRequestBody,
    ): OpenApiV3.IOperation.IRequestBody => ({
      ...input,
      content: input.content
        ? downgradeContent(collection)(input.content)
        : undefined,
    });

  const downgradeResponse =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation.IResponse): OpenApiV3.IOperation.IResponse => ({
      ...input,
      content: input.content
        ? downgradeContent(collection)(input.content)
        : undefined,
      headers: input.headers
        ? Object.fromEntries(
            Object.entries(input.headers)
              .filter(([_, v]) => v !== undefined)
              .map(([key, value]) => {
                const { name: _name, in: _in, style, ...rest } = value;
                return [
                  key,
                  {
                    ...rest,
                    style: style === "cookie" ? "form" : style,
                    schema: downgradeSchema(collection)(value.schema),
                  },
                ];
              }),
          )
        : undefined,
    });

  const downgradeContent =
    (collection: IComponentsCollection) =>
    (
      record: OpenApi.IOperation.IContent,
    ): Record<string, OpenApiV3.IOperation.IMediaType> =>
      Object.fromEntries(
        Object.entries(record)
          .filter(([_, v]) => v !== undefined)
          .map(
            ([key, value]) =>
              [
                key,
                {
                  ...value,
                  schema: value?.schema
                    ? downgradeSchema(collection)(value.schema)
                    : undefined,
                },
              ] as const,
          ),
      );

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  /**
   * Downgrade every component schema and carry the security schemes over.
   *
   * @param input Emended components
   *
   * @returns Collection holding the original and the downgraded components
   *
   * @evidence contracts/common.md#principled-implementation Every schema is downgraded into a new store keyed by the same names, while the security schemes are carried over unchanged.
   * @evidence contracts/common.md#clear-and-simple-design One function.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data transformation with no hidden state.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameter and result.
   */
  export const downgradeComponents = (
    input: OpenApi.IComponents,
  ): IComponentsCollection => {
    const collection: IComponentsCollection = {
      original: input,
      downgraded: {
        securitySchemes: input.securitySchemes,
      },
    };
    if (input.schemas) {
      collection.downgraded.schemas = {};
      for (const [key, value] of Object.entries(input.schemas))
        if (value !== undefined)
          ObjectDictionary.set(
            collection.downgraded.schemas,
            key,
            downgradeSchema(collection)(value),
          );
    }
    return collection;
  };

  /**
   * Downgrade one emended schema to 3.0.
   *
   * @param collection Original and downgraded components
   *
   * @returns Function that converts an emended schema to a 3.0 schema
   *
   * @evidence contracts/common.md#principled-implementation A nullable schema, found by following `oneOf` and references, gets `nullable` on each member, constants merge into enums per type, tuples bound their length and exclusive bounds are rewritten, so the 3.0 reading of each keyword matches its emended meaning.
   * @evidence contracts/common.md#clear-and-simple-design One recursive function with helpers for nullable references, example removal and bounds.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Rewrites follow the 3.0 dialect and the bound rewrite cites its issue.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameter and result; helpers have comments.
   */
  export const downgradeSchema =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IJsonSchema): OpenApiV3.IJsonSchema => {
      const nullable: boolean = isNullable(new Set())(collection.original)(
        input,
      );
      const union: OpenApiV3.IJsonSchema[] = [];
      const discriminator:
        | OpenApiV3.IJsonSchema.IOneOf.IDiscriminator
        | undefined =
        OpenApiTypeChecker.isOneOf(input) && input.discriminator !== undefined
          ? OpenApiDiscriminatorConverter.clone(input.discriminator)
          : undefined;
      let preserveDiscriminator: boolean =
        discriminator !== undefined && nullable === false;
      const attribute: OpenApiV3.IJsonSchema.__IAttribute = {
        title: input.title,
        description: input.description,
        deprecated: input.deprecated,
        readOnly: input.readOnly,
        writeOnly: input.writeOnly,
        example: input.example,
        ...Object.fromEntries(
          Object.entries(input).filter(
            ([key, value]) => key.startsWith("x-") && value !== undefined,
          ),
        ),
      };
      const visit = (schema: OpenApi.IJsonSchema): void => {
        if (OpenApiTypeChecker.isString(schema)) {
          const {
            contentEncoding,
            contentMediaType: _contentMediaType,
            ...rest
          } = schema;
          union.push(
            omitSchemaExamples({
              ...rest,
              format:
                rest.format ??
                (contentEncoding === "base64" ? "byte" : undefined),
            }),
          );
        } else if (
          // A boolean carries its declared keywords (at minimum `default`,
          // plus every attribute OpenApiV3.IJsonSchema.IBoolean allows) through
          // the downgrade like the other primitives. Rebuilding it as a bare
          // `{ type: "boolean" }` dropped them; `omitSchemaExamples` keeps the
          // legal 3.0 keys and strips only `examples`, which 3.0 does not define.
          OpenApiTypeChecker.isBoolean(schema) ||
          OpenApiTypeChecker.isInteger(schema) ||
          OpenApiTypeChecker.isNumber(schema) ||
          OpenApiTypeChecker.isReference(schema)
        )
          union.push(omitSchemaExamples(schema));
        else if (OpenApiTypeChecker.isArray(schema)) {
          const next = omitSchemaExamples(schema);
          union.push({
            ...next,
            items: downgradeSchema(collection)(schema.items),
          });
        } else if (OpenApiTypeChecker.isTuple(schema)) {
          const next = omitSchemaExamples(schema);
          union.push({
            ...next,
            items: ((): OpenApiV3.IJsonSchema => {
              if (schema.additionalItems === true) return {};
              const elements = [
                ...schema.prefixItems,
                ...(typeof schema.additionalItems === "object"
                  ? [downgradeSchema(collection)(schema.additionalItems)]
                  : []),
              ];
              if (elements.length === 0) return {};
              return {
                oneOf: elements.map(downgradeSchema(collection) as any),
              };
            })(),
            minItems: schema.prefixItems.length,
            maxItems:
              !!schema.additionalItems === true
                ? undefined
                : schema.prefixItems.length,
            ...{
              prefixItems: undefined,
              additionalItems: undefined,
            },
          });
        } else if (OpenApiTypeChecker.isObject(schema)) {
          const next = omitSchemaExamples(schema);
          union.push({
            ...next,
            properties:
              schema.properties === undefined
                ? undefined
                : Object.fromEntries(
                    Object.entries(schema.properties)
                      .filter(([_, v]) => v !== undefined)
                      .map(([key, value]) => [
                        key,
                        downgradeSchema(collection)(value),
                      ]),
                  ),
            additionalProperties:
              schema.additionalProperties === undefined
                ? undefined
                : typeof schema.additionalProperties === "object"
                  ? downgradeSchema(collection)(schema.additionalProperties)
                  : schema.additionalProperties,
            required: schema.required,
          });
        } else if (OpenApiTypeChecker.isOneOf(schema)) {
          const tracked: boolean =
            schema === input && discriminator !== undefined;
          for (const branch of schema.oneOf) {
            const previous: number = union.length;
            visit(branch);
            if (tracked && union.length !== previous + 1)
              preserveDiscriminator = false;
          }
        }
      };
      const visitConstant = (schema: OpenApi.IJsonSchema): void => {
        const insert = (value: any): void => {
          const matched: OpenApiV3.IJsonSchema.INumber | undefined = union.find(
            (u) => (u as OpenApiV3.IJsonSchema.INumber).type === typeof value,
          ) as OpenApiV3.IJsonSchema.INumber | undefined;
          if (matched !== undefined) {
            matched.enum ??= [];
            matched.enum.push(value);
          } else union.push({ type: typeof value as "number", enum: [value] });
        };
        if (OpenApiTypeChecker.isConstant(schema)) insert(schema.const);
        else if (OpenApiTypeChecker.isOneOf(schema))
          for (const u of schema.oneOf)
            if (OpenApiTypeChecker.isConstant(u)) insert(u.const);
      };

      visit(input);
      visitConstant(input);
      if (nullable === true)
        for (const u of union)
          if (OpenApiTypeChecker.isReference(u as any))
            downgradeNullableReference(new Set())(collection)(u as any);
          else (u as OpenApiV3.IJsonSchema.IArray).nullable = true;
      if (nullable === true && union.length === 0)
        return { type: "null", ...attribute };
      return {
        ...(union.length === 0
          ? { type: undefined }
          : union.length === 1
            ? { ...union[0] }
            : {
                oneOf: union,
                ...(preserveDiscriminator && discriminator !== undefined
                  ? { discriminator }
                  : {}),
              }),
        ...attribute,
      };
    };

  const downgradeNullableReference =
    (visited: Set<string>) =>
    (collection: IComponentsCollection) =>
    (schema: OpenApiV3.IJsonSchema.IReference): void => {
      if (OpenApiReferenceKey.read(schema.$ref)?.endsWith(".Nullable")) return;

      const entry = OpenApiReferenceKey.find(
        collection.original.schemas,
        schema.$ref,
      );
      if (entry === undefined) return;
      const { key, value: found } = entry;
      if (isNullable(visited)(collection.original)(found) === true) return;
      else if (
        ObjectDictionary.get(
          collection.downgraded.schemas,
          `${key}.Nullable`,
        ) === undefined
      ) {
        collection.downgraded.schemas ??= {};
        ObjectDictionary.set(
          collection.downgraded.schemas,
          `${key}.Nullable`,
          {},
        );
        ObjectDictionary.set(
          collection.downgraded.schemas,
          `${key}.Nullable`,
          downgradeSchema(collection)(
            OpenApiTypeChecker.isOneOf(found)
              ? {
                  ...found,
                  oneOf: [...found.oneOf, { type: "null" }],
                }
              : {
                  oneOf: [found, { type: "null" }],
                  title: found.title,
                  description: found.description,
                  example: found.example,
                  examples: found.examples,
                  ...Object.fromEntries(
                    Object.entries(found).filter(
                      ([key, value]) =>
                        key.startsWith("x-") && value !== undefined,
                    ),
                  ),
                },
          ),
        );
      }
      schema.$ref += ".Nullable";
    };

  const omitSchemaExamples = <Schema extends OpenApi.IJsonSchema>(
    schema: Schema,
  ): Omit<Schema, "examples"> => {
    const { examples: _examples, ...rest } = schema;
    return exclusiveBounds(rest);
  };

  /**
   * Rewrites an exclusive numeric bound into the form the 3.0 dialect defines.
   *
   * 3.0's Schema Object descends from JSON Schema draft-04, where
   * `exclusiveMinimum` and `exclusiveMaximum` are booleans qualifying `minimum`
   * and `maximum`; the numeric spelling belongs to 3.1. Carrying the number
   * through left a document that declares itself 3.0 with a 3.1 keyword, and a
   * 3.0 reader taking the value as the boolean its dialect declares finds no
   * `minimum` beside it and drops the bound entirely (#2300).
   *
   * {@link OpenApiV3Upgrader} already performs the inverse, so this makes the
   * pair a round trip.
   */
  const exclusiveBounds = <Schema extends object>(schema: Schema): Schema => {
    const target = schema as Record<string, unknown>;
    for (const [exclusive, inclusive] of [
      ["exclusiveMinimum", "minimum"],
      ["exclusiveMaximum", "maximum"],
    ] as const) {
      const value: unknown = target[exclusive];
      if (typeof value !== "number") continue;
      target[inclusive] = value;
      target[exclusive] = true;
    }
    return schema;
  };

  const isNullable =
    (visited: Set<string>) =>
    (components: OpenApi.IComponents) =>
    (schema: OpenApi.IJsonSchema): boolean => {
      if (OpenApiTypeChecker.isNull(schema)) return true;
      else if (OpenApiTypeChecker.isReference(schema)) {
        if (visited.has(schema.$ref)) return false;
        visited.add(schema.$ref);
        const next: OpenApi.IJsonSchema | undefined = OpenApiReferenceKey.get(
          components.schemas,
          schema.$ref,
        );
        return next ? isNullable(visited)(components)(next) : false;
      }
      return (
        OpenApiTypeChecker.isOneOf(schema) &&
        schema.oneOf.some(isNullable(visited)(components))
      );
    };
}
