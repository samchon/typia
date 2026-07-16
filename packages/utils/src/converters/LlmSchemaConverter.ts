import {
  IJsonSchemaAttribute,
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";

import { JsonDescriptor } from "../utils/internal/JsonDescriptor";
import { LlmReference } from "../utils/internal/LlmReference";
import { ObjectDictionary } from "../utils/internal/ObjectDictionary";
import { OpenApiComponentName } from "../utils/internal/OpenApiComponentName";
import { OpenApiSchemaSanitizer } from "../utils/internal/OpenApiSchemaSanitizer";
import { LlmTypeChecker } from "../validators/LlmTypeChecker";
import { OpenApiTypeChecker } from "../validators/OpenApiTypeChecker";
import { LlmDescriptionInverter } from "./internal/LlmDescriptionInverter";
import { LlmParametersFinder } from "./internal/LlmParametersComposer";
import { OpenApiConstraintShifter } from "./internal/OpenApiConstraintShifter";

/**
 * OpenAPI to LLM schema converter.
 *
 * `LlmSchemaConverter` converts OpenAPI JSON schemas to LLM-compatible
 * {@link ILlmSchema} format. LLMs don't fully support JSON Schema, so this
 * simplifies schemas by removing unsupported features (tuples, `const`, mixed
 * unions).
 *
 * Main functions:
 *
 * - {@link parameters}: Convert object schema to {@link ILlmSchema.IParameters}
 * - {@link schema}: Convert any schema to {@link ILlmSchema}
 * - {@link invert}: Extract constraints from description back to schema
 *
 * Configuration options ({@link ILlmSchema.IConfig}):
 *
 * - `strict`: OpenAI structured output mode (all properties required)
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace LlmSchemaConverter {
  /**
   * Get configuration with defaults applied.
   *
   * @param config Partial configuration
   * @returns Full configuration with defaults
   */
  export const getConfig = (
    config?: Partial<ILlmSchema.IConfig> | undefined,
  ): ILlmSchema.IConfig => ({
    strict: config?.strict ?? false,
  });

  /* -----------------------------------------------------------
    CONVERTERS
  ----------------------------------------------------------- */
  /**
   * Convert OpenAPI object schema to LLM parameters schema.
   *
   * @param props.config Conversion configuration
   * @param props.components OpenAPI components for reference resolution
   * @param props.schema Object or reference schema to convert
   * @param props.accessor Error path accessor
   * @param props.refAccessor Reference path accessor
   * @returns Converted parameters or error
   */
  export const parameters = (props: {
    config?: Partial<ILlmSchema.IConfig>;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference;
    accessor?: string;
    refAccessor?: string;
  }): IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> => {
    const config: ILlmSchema.IConfig = getConfig(props.config);
    const entity: IResult<
      OpenApi.IJsonSchema.IObject,
      IJsonSchemaTransformError
    > = LlmParametersFinder.parameters({
      ...props,
      method: "LlmSchemaConverter.parameters",
    });
    if (entity.success === false) return entity;

    const $defs: Record<string, ILlmSchema> = {};
    const result: IResult<ILlmSchema, IJsonSchemaTransformError> = transform({
      ...props,
      config,
      $defs,
      schema: entity.value,
    });
    if (result.success === false) return result;
    return {
      success: true,
      value: {
        ...(result.value as ILlmSchema.IObject),
        additionalProperties: false,
        $defs,
        description: OpenApiTypeChecker.isReference(props.schema)
          ? JsonDescriptor.cascade({
              prefix: "#/components/schemas/",
              components: props.components,
              schema: {
                ...props.schema,
                description: result.value.description,
              },
              escape: true,
              key: LlmReference.readOpenApi(props.schema.$ref)!,
            })
          : result.value.description,
      } satisfies ILlmSchema.IParameters,
    };
  };

  /**
   * Convert OpenAPI schema to LLM schema.
   *
   * @param props.config Conversion configuration
   * @param props.components OpenAPI components for reference resolution
   * @param props.$defs Definition store (mutated with referenced types)
   * @param props.schema Schema to convert
   * @param props.accessor Error path accessor
   * @param props.refAccessor Reference path accessor
   * @returns Converted schema or error
   */
  export const schema = (props: {
    config?: Partial<ILlmSchema.IConfig>;
    components: OpenApi.IComponents;
    $defs: Record<string, ILlmSchema>;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): IResult<ILlmSchema, IJsonSchemaTransformError> =>
    transform({
      config: getConfig(props.config),
      components: props.components,
      $defs: props.$defs,
      schema: props.schema,
      accessor: props.accessor,
      refAccessor: props.refAccessor,
    });

  const transform = (props: {
    config: ILlmSchema.IConfig;
    components: OpenApi.IComponents;
    $defs: Record<string, ILlmSchema>;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): IResult<ILlmSchema, IJsonSchemaTransformError> => {
    // PREPARE ASSETS
    const union: Array<ILlmSchema> = [];
    const attribute: IJsonSchemaAttribute = {
      title: props.schema.title,
      description: props.schema.description,
      deprecated: props.schema.deprecated,
      readOnly: props.schema.readOnly,
      writeOnly: props.schema.writeOnly,
      example: props.schema.example,
      examples: props.schema.examples,
      ...Object.fromEntries(
        Object.entries(props.schema).filter(
          ([key, value]) => key.startsWith("x-") && value !== undefined,
        ),
      ),
    };

    // VALIDADTE SCHEMA
    const reasons: IJsonSchemaTransformError.IReason[] = [];
    const validateReference = (
      schema: OpenApi.IJsonSchema,
      reference: string,
      accessor: string,
    ): string | undefined => {
      const key: string | undefined = LlmReference.readOpenApi(reference);
      if (key === undefined) {
        reasons.push({
          schema,
          accessor,
          message: `invalid local schema reference ${JSON.stringify(reference)}.`,
        });
        return undefined;
      } else if (
        ObjectDictionary.get(props.components.schemas, key) === undefined
      ) {
        reasons.push({
          schema,
          accessor,
          message: `unable to find reference type ${JSON.stringify(key)}.`,
        });
        return undefined;
      }
      return key;
    };
    const visited: Set<string> = new Set();
    const validate = (next: OpenApi.IJsonSchema, accessor: string): void => {
      if (props.config.strict === true)
        reasons.push(...validateStrict(next, accessor));
      if (OpenApiTypeChecker.isReference(next)) {
        const key: string | undefined = validateReference(
          next,
          next.$ref,
          accessor,
        );
        if (key === undefined || visited.has(key)) return;
        visited.add(key);
        validate(
          ObjectDictionary.get(props.components.schemas, key)!,
          `${props.refAccessor ?? "$input.components.schemas"}[${JSON.stringify(key)}]`,
        );
      } else if (OpenApiTypeChecker.isOneOf(next)) {
        if (next.discriminator?.mapping !== undefined)
          for (const [key, reference] of Object.entries(
            next.discriminator.mapping,
          ))
            validateReference(
              next,
              reference,
              `${accessor}.discriminator.mapping[${JSON.stringify(key)}]`,
            );
        next.oneOf.forEach((schema, index) =>
          validate(schema, `${accessor}.oneOf[${index}]`),
        );
      } else if (OpenApiTypeChecker.isObject(next)) {
        for (const [key, schema] of Object.entries(next.properties ?? {}))
          validate(schema, `${accessor}.properties[${JSON.stringify(key)}]`);
        if (
          typeof next.additionalProperties === "object" &&
          next.additionalProperties !== null
        )
          validate(
            next.additionalProperties,
            `${accessor}.additionalProperties`,
          );
      } else if (OpenApiTypeChecker.isArray(next))
        validate(next.items, `${accessor}.items`);
      else if (OpenApiTypeChecker.isTuple(next)) {
        reasons.push({
          accessor,
          schema: next,
          message: `LLM does not allow tuple type.`,
        });
        (next.prefixItems ?? []).forEach((schema, index) =>
          validate(schema, `${accessor}.prefixItems[${index}]`),
        );
        if (
          typeof next.additionalItems === "object" &&
          next.additionalItems !== null
        )
          validate(next.additionalItems, `${accessor}.additionalItems`);
      }
    };
    validate(props.schema, props.accessor ?? "$input.schema");
    if (reasons.length > 0)
      return {
        success: false,
        error: {
          method: "LlmSchemaConverter.schema",
          message: "Failed to compose LLM schema",
          reasons,
        },
      };

    const visitConstant = (input: OpenApi.IJsonSchema): void => {
      const insert = (value: any): void => {
        const matched:
          | ILlmSchema.IString
          | ILlmSchema.INumber
          | ILlmSchema.IBoolean
          | undefined = union.find(
          (u) =>
            (u as (IJsonSchemaAttribute & { type: string }) | undefined)
              ?.type === typeof value,
        ) as ILlmSchema.IString | undefined;
        if (matched !== undefined) {
          matched.enum ??= [];
          matched.enum.push(value);
        } else
          union.push({
            type: typeof value as "number",
            enum: [value],
          });
      };
      if (OpenApiTypeChecker.isConstant(input)) insert(input.const);
      else if (OpenApiTypeChecker.isOneOf(input))
        input.oneOf.forEach(visitConstant);
    };
    const visit = (input: OpenApi.IJsonSchema, accessor: string): void => {
      if (OpenApiTypeChecker.isOneOf(input)) {
        // UNION TYPE
        input.oneOf.forEach((s, i) => visit(s, `${accessor}.oneOf[${i}]`));
      } else if (OpenApiTypeChecker.isReference(input)) {
        // REFERENCE TYPE
        const key: string | undefined = LlmReference.readOpenApi(input.$ref);
        if (key === undefined) return; // unreachable after validation
        const target: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
          props.components.schemas,
          key,
        );
        if (target === undefined) return;
        else {
          // KEEP THE REFERENCE TYPE
          const out = () => {
            union.push({
              ...input,
              $ref: LlmReference.write(key),
            });
          };
          if (ObjectDictionary.has(props.$defs, key)) return out();

          ObjectDictionary.set(props.$defs, key, {});
          const converted: IResult<ILlmSchema, IJsonSchemaTransformError> =
            transform({
              config: props.config,
              components: props.components,
              $defs: props.$defs,
              schema: target,
              refAccessor: props.refAccessor,
              accessor: `${props.refAccessor ?? "$def"}[${JSON.stringify(key)}]`,
            });
          if (converted.success === false) return; // UNREACHABLE
          ObjectDictionary.set(props.$defs, key, converted.value);
          return out();
        }
      } else if (OpenApiTypeChecker.isObject(input)) {
        // OBJECT TYPE
        const properties: Record<string, ILlmSchema> = Object.fromEntries(
          Object.entries(input.properties ?? {})
            .map(([key, value]) => {
              const converted: IResult<ILlmSchema, IJsonSchemaTransformError> =
                transform({
                  config: props.config,
                  components: props.components,
                  $defs: props.$defs,
                  schema: value,
                  refAccessor: props.refAccessor,
                  accessor: `${props.accessor ?? "$input.schema"}.properties[${JSON.stringify(key)}]`,
                });
              if (converted.success === false) {
                reasons.push(...converted.error.reasons);
                return [key, null];
              }
              return [key, converted.value];
            })
            .filter(([, value]) => value !== null),
        );
        if (Object.values(properties).some((v) => v === null)) return;

        const additionalProperties: ILlmSchema | boolean | undefined | null =
          (() => {
            if (
              typeof input.additionalProperties === "object" &&
              input.additionalProperties !== null
            ) {
              const converted: IResult<ILlmSchema, IJsonSchemaTransformError> =
                transform({
                  config: props.config,
                  components: props.components,
                  $defs: props.$defs,
                  schema: input.additionalProperties,
                  refAccessor: props.refAccessor,
                  accessor: `${accessor}.additionalProperties`,
                });
              if (converted.success === false) {
                reasons.push(...converted.error.reasons);
                return null;
              }
              return converted.value;
            }
            return props.config.strict === true
              ? false
              : input.additionalProperties;
          })();
        if (additionalProperties === null) return;
        union.push({
          ...input,
          properties,
          additionalProperties,
          required: input.required ?? [],
          description:
            props.config.strict === true
              ? JsonDescriptor.take(input)
              : input.description,
        });
      } else if (OpenApiTypeChecker.isArray(input)) {
        // ARRAY TYPE
        const items: IResult<ILlmSchema, IJsonSchemaTransformError> = transform(
          {
            config: props.config,
            components: props.components,
            $defs: props.$defs,
            schema: input.items,
            refAccessor: props.refAccessor,
            accessor: `${accessor}.items`,
          },
        );
        if (items.success === false) {
          reasons.push(...items.error.reasons);
          return;
        }
        union.push(
          props.config.strict === true
            ? OpenApiConstraintShifter.shiftArray({
                ...input,
                items: items.value,
              })
            : {
                ...input,
                items: items.value,
              },
        );
      } else if (OpenApiTypeChecker.isString(input))
        union.push(
          props.config.strict === true
            ? OpenApiConstraintShifter.shiftString({ ...input })
            : input,
        );
      else if (
        OpenApiTypeChecker.isNumber(input) ||
        OpenApiTypeChecker.isInteger(input)
      )
        union.push(
          props.config.strict === true
            ? OpenApiConstraintShifter.shiftNumeric({ ...input })
            : input,
        );
      else if (OpenApiTypeChecker.isTuple(input))
        return; // UNREACHABLE
      else if (OpenApiTypeChecker.isConstant(input) === false)
        union.push({ ...input });
    };

    visitConstant(props.schema);
    visit(props.schema, props.accessor ?? "$input.schema");

    if (reasons.length > 0)
      return {
        success: false,
        error: {
          method: "LlmSchemaConverter.schema",
          message: "Failed to compose LLM schema",
          reasons,
        },
      };
    else if (union.length === 0)
      return {
        // unknown type
        success: true,
        value: {
          ...attribute,
          type: undefined,
        },
      };
    else if (union.length === 1)
      return {
        // single type
        success: true,
        value: {
          ...attribute,
          ...union[0],
          description:
            props.config.strict === true &&
            LlmTypeChecker.isReference(union[0]!)
              ? undefined
              : (union[0]!.description ?? attribute.description),
        },
      };
    return {
      success: true,
      value: {
        ...attribute,
        anyOf: union.map((u) => ({
          ...u,
          description:
            props.config.strict === true && LlmTypeChecker.isReference(u)
              ? undefined
              : u.description,
        })),
        "x-discriminator":
          OpenApiTypeChecker.isOneOf(props.schema) &&
          props.schema.discriminator !== undefined &&
          props.schema.oneOf.length === union.length &&
          union.every(
            (e) => LlmTypeChecker.isReference(e) || LlmTypeChecker.isNull(e),
          )
            ? {
                propertyName: props.schema.discriminator.propertyName,
                mapping:
                  props.schema.discriminator.mapping !== undefined
                    ? convertDiscriminatorMapping(
                        props.schema.discriminator.mapping,
                      )
                    : undefined,
              }
            : undefined,
      },
    };
  };

  /* -----------------------------------------------------------
    INVERTERS
  ----------------------------------------------------------- */
  /**
   * Convert LLM schema back to OpenAPI schema.
   *
   * Restores constraint information from description tags and converts `$defs`
   * references to `#/components/schemas`.
   *
   * @param props.components Target components (mutated with definitions)
   * @param props.schema LLM schema to invert
   * @param props.$defs LLM schema definitions
   * @returns OpenAPI JSON schema
   */
  export const invert = (props: {
    components: OpenApi.IComponents;
    schema: ILlmSchema;
    $defs: Record<string, ILlmSchema>;
  }): OpenApi.IJsonSchema =>
    invertInternal({
      ...props,
      // One allocation per conversion, seeded with the component names the
      // caller already owns. Recursive inversion reuses it instead of
      // recomputing, so a reference and its stored component never disagree.
      //
      // Seed with getOwnPropertyNames, not keys: LlmReference.resolve finds a
      // definition through ObjectDictionary.get, which keys off
      // hasOwnProperty. Seeding with the enumerable-only view would let an own
      // non-enumerable definition resolve without ever being allocated.
      allocation: OpenApiComponentName.allocate({
        keys: Object.getOwnPropertyNames(props.$defs ?? {}),
        reserved: Object.getOwnPropertyNames(props.components.schemas ?? {}),
      }),
      emitted: new Set(),
    });

  const invertInternal = (props: {
    components: OpenApi.IComponents;
    schema: ILlmSchema;
    $defs: Record<string, ILlmSchema>;
    allocation: Map<string, string>;
    emitted: Set<string>;
  }): OpenApi.IJsonSchema => {
    const union: OpenApi.IJsonSchema[] = [];
    const attribute: IJsonSchemaAttribute = {
      title: props.schema.title,
      description: props.schema.description,
      deprecated: props.schema.deprecated,
      readOnly: props.schema.readOnly,
      writeOnly: props.schema.writeOnly,
      example: props.schema.example,
      examples: props.schema.examples,
      ...Object.fromEntries(
        Object.entries(props.schema).filter(
          ([key, value]) => key.startsWith("x-") && value !== undefined,
        ),
      ),
    };

    const next = (schema: ILlmSchema): OpenApi.IJsonSchema =>
      invertInternal({
        components: props.components,
        $defs: props.$defs,
        schema,
        allocation: props.allocation,
        emitted: props.emitted,
      });
    const visit = (schema: ILlmSchema): void => {
      if (LlmTypeChecker.isArray(schema))
        union.push({
          ...schema,
          ...LlmDescriptionInverter.array(schema.description),
          items: next(schema.items),
        });
      else if (LlmTypeChecker.isObject(schema))
        union.push(
          OpenApiSchemaSanitizer.omitEmptyRequired({
            ...schema,
            properties: Object.fromEntries(
              Object.entries(schema.properties ?? {}).map(([key, value]) => [
                key,
                next(value),
              ]),
            ),
            additionalProperties:
              typeof schema.additionalProperties === "object" &&
              schema.additionalProperties !== null
                ? next(schema.additionalProperties)
                : schema.additionalProperties,
          }),
        );
      else if (LlmTypeChecker.isAnyOf(schema)) schema.anyOf.forEach(visit);
      else if (LlmTypeChecker.isReference(schema)) {
        const resolved: LlmReference.IResolved | undefined =
          LlmReference.resolve(props.$defs, schema.$ref);
        if (resolved === undefined) {
          union.push({ oneOf: [] });
          return;
        }
        // The allocation seeds from the same own-property view that resolve
        // uses, so a resolved key is always allocated. Escape rather than fall
        // back to the raw key regardless: the grammar invariant must hold even
        // if the two views ever diverge again.
        const componentKey: string =
          props.allocation.get(resolved.key) ??
          OpenApiComponentName.escape(resolved.key);
        // Gate on what this conversion has emitted, not on what the components
        // already contain. A caller's pre-existing component of the same name
        // is an allocation input, not a cache hit: treating it as one would
        // silently drop this definition and alias it to an unrelated schema.
        if (props.emitted.has(componentKey) === false) {
          props.emitted.add(componentKey);
          props.components.schemas ??= {};
          ObjectDictionary.set(props.components.schemas, componentKey, {});
          ObjectDictionary.set(
            props.components.schemas,
            componentKey,
            next(resolved.schema),
          );
        }
        union.push({
          ...schema,
          $ref: LlmReference.writeOpenApi(componentKey),
        });
      } else if (LlmTypeChecker.isBoolean(schema))
        if (!!schema.enum?.length)
          schema.enum.forEach((v) =>
            union.push({
              const: v,
            }),
          );
        else union.push(schema);
      else if (
        LlmTypeChecker.isInteger(schema) ||
        LlmTypeChecker.isNumber(schema)
      )
        if (!!schema.enum?.length)
          schema.enum.forEach((v) =>
            union.push({
              const: v,
            }),
          );
        else
          union.push({
            ...schema,
            ...LlmDescriptionInverter.numeric(schema.description),
            ...{ enum: undefined },
          });
      else if (LlmTypeChecker.isString(schema))
        if (!!schema.enum?.length)
          schema.enum.forEach((v) =>
            union.push({
              const: v,
            }),
          );
        else
          union.push({
            ...schema,
            ...LlmDescriptionInverter.string(schema.description),
            ...{ enum: undefined },
          });
      else
        union.push({
          ...schema,
        });
    };
    visit(props.schema);

    return {
      ...attribute,
      ...(union.length === 0
        ? { type: undefined }
        : union.length === 1
          ? { ...union[0] }
          : {
              oneOf: union.map((u) => ({ ...u, nullable: undefined })),
              discriminator:
                LlmTypeChecker.isAnyOf(props.schema) &&
                props.schema["x-discriminator"] !== undefined
                  ? {
                      propertyName:
                        props.schema["x-discriminator"].propertyName,
                      mapping:
                        props.schema["x-discriminator"].mapping !== undefined
                          ? invertDiscriminatorMapping(
                              props.$defs,
                              props.schema["x-discriminator"].mapping,
                              props.allocation,
                            )
                          : undefined,
                    }
                  : undefined,
            }),
    } satisfies OpenApi.IJsonSchema;
  };
}

const convertDiscriminatorMapping = (
  mapping: Record<string, string>,
): Record<string, string> | undefined => {
  const entries: [string, string][] = [];
  for (const [discriminator, reference] of Object.entries(mapping)) {
    const key: string | undefined = LlmReference.readOpenApi(reference);
    if (key === undefined) return undefined;
    entries.push([discriminator, LlmReference.write(key)]);
  }
  return Object.fromEntries(entries);
};

const invertDiscriminatorMapping = (
  $defs: Record<string, ILlmSchema>,
  mapping: Record<string, string>,
  allocation: Map<string, string>,
): Record<string, string> | undefined => {
  const entries: [string, string][] = [];
  for (const [discriminator, reference] of Object.entries(mapping)) {
    const resolved: LlmReference.IResolved | undefined = LlmReference.resolve(
      $defs,
      reference,
    );
    if (resolved === undefined) return undefined;
    entries.push([
      discriminator,
      LlmReference.writeOpenApi(
        allocation.get(resolved.key) ??
          OpenApiComponentName.escape(resolved.key),
      ),
    ]);
  }
  return Object.fromEntries(entries);
};

const validateStrict = (
  schema: OpenApi.IJsonSchema,
  accessor: string,
): IJsonSchemaTransformError.IReason[] => {
  const reasons: IJsonSchemaTransformError.IReason[] = [];
  if (OpenApiTypeChecker.isObject(schema)) {
    if (!!schema.additionalProperties)
      reasons.push({
        schema: schema,
        accessor: `${accessor}.additionalProperties`,
        message:
          "LLM does not allow additionalProperties in strict mode, the dynamic key typed object.",
      });
    for (const key of Object.keys(schema.properties ?? {}))
      if (schema.required?.includes(key) !== true)
        reasons.push({
          schema: schema,
          accessor: `${accessor}.properties.${key}`,
          message: "LLM does not allow optional properties in strict mode.",
        });
  }
  return reasons;
};
