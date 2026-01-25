import { OpenApi } from "../OpenApi";
import { IJsonSchemaAttribute } from "../structures/IJsonSchemaAttribute";
import { ILlmFunction } from "../structures/ILlmFunction";
import { ILlmSchema } from "../structures/ILlmSchema";
import { IOpenApiSchemaError } from "../structures/IOpenApiSchemaError";
import { IResult } from "../structures/IResult";
import { LlmTypeChecker } from "../utils/LlmTypeChecker";
import { NamingConvention } from "../utils/NamingConvention";
import { OpenApiConstraintShifter } from "../utils/OpenApiConstraintShifter";
import { OpenApiTypeChecker } from "../utils/OpenApiTypeChecker";
import { OpenApiValidator } from "../utils/OpenApiValidator";
import { JsonDescriptionUtil } from "../utils/internal/JsonDescriptionUtil";
import { LlmDescriptionInverter } from "./LlmDescriptionInverter";
import { LlmParametersFinder } from "./LlmParametersComposer";

export namespace LlmSchemaComposer {
  /* -----------------------------------------------------------
    CONVERTERS
  ----------------------------------------------------------- */
  export const parameters = (props: {
    config?: Partial<ILlmSchema.IConfig>;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference;
    accessor?: string;
    refAccessor?: string;
  }): IResult<ILlmSchema.IParameters, IOpenApiSchemaError> => {
    const config: ILlmSchema.IConfig = getConfig(props.config);
    const entity: IResult<OpenApi.IJsonSchema.IObject, IOpenApiSchemaError> =
      LlmParametersFinder.parameters({
        ...props,
        method: "LlmSchemaComposer.parameters",
      });
    if (entity.success === false) return entity;

    const $defs: Record<string, ILlmSchema> = {};
    const result: IResult<ILlmSchema, IOpenApiSchemaError> = transform({
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
          ? JsonDescriptionUtil.cascade({
              prefix: "#/components/schemas/",
              components: props.components,
              schema: {
                ...props.schema,
                description: result.value.description,
              },
              escape: true,
            })
          : result.value.description,
      } satisfies ILlmSchema.IParameters,
    };
  };

  export const schema = (props: {
    config?: Partial<ILlmSchema.IConfig>;
    components: OpenApi.IComponents;
    $defs: Record<string, ILlmSchema>;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): IResult<ILlmSchema, IOpenApiSchemaError> =>
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
  }): IResult<ILlmSchema, IOpenApiSchemaError> => {
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
    const reasons: IOpenApiSchemaError.IReason[] = [];
    OpenApiTypeChecker.visit({
      closure: (next, accessor) => {
        if (props.config.strict === true) {
          // STRICT MODE VALIDATION
          reasons.push(...validateStrict(next, accessor));
        }
        if (OpenApiTypeChecker.isTuple(next))
          reasons.push({
            accessor,
            schema: next,
            message: `LLM does not allow tuple type.`,
          });
        else if (OpenApiTypeChecker.isReference(next)) {
          // UNABLE TO FIND MATCHED REFERENCE
          const key: string =
            next.$ref.split("#/components/schemas/")[1] ??
            next.$ref.split("/").at(-1)!;
          if (props.components.schemas?.[key] === undefined)
            reasons.push({
              schema: next,
              accessor: accessor,
              message: `unable to find reference type ${JSON.stringify(key)}.`,
            });
        }
      },
      components: props.components,
      schema: props.schema,
      accessor: props.accessor,
      refAccessor: props.refAccessor,
    });
    if (reasons.length > 0)
      return {
        success: false,
        error: {
          method: "LlmSchemaComposer.schema",
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
        const key: string =
          input.$ref.split("#/components/schemas/")[1] ??
          input.$ref.split("/").at(-1)!;
        const target: OpenApi.IJsonSchema | undefined =
          props.components.schemas?.[key];
        if (target === undefined) return;
        else if (
          // KEEP THE REFERENCE TYPE
          props.config.reference === true ||
          OpenApiTypeChecker.isRecursiveReference({
            components: props.components,
            schema: input,
          })
        ) {
          const out = () => {
            union.push({
              ...input,
              $ref: `#/$defs/${key}`,
            });
          };
          if (props.$defs[key] !== undefined) return out();

          props.$defs[key] = {};
          const converted: IResult<ILlmSchema, IOpenApiSchemaError> = transform(
            {
              config: props.config,
              components: props.components,
              $defs: props.$defs,
              schema: target,
              refAccessor: props.refAccessor,
              accessor: `${props.refAccessor ?? "$def"}[${JSON.stringify(key)}]`,
            },
          );
          if (converted.success === false) return; // UNREACHABLE
          props.$defs[key] = converted.value;
          return out();
        } else {
          // DISCARD THE REFERENCE TYPE
          const length: number = union.length;
          visit(target, accessor);
          visitConstant(target);
          if (length === union.length - 1)
            union[union.length - 1] = {
              ...union[union.length - 1]!,
              description: JsonDescriptionUtil.cascade({
                prefix: "#/components/schemas/",
                components: props.components,
                schema: input,
                escape: true,
              }),
            };
          else
            attribute.description = JsonDescriptionUtil.cascade({
              prefix: "#/components/schemas/",
              components: props.components,
              schema: input,
              escape: true,
            });
        }
      } else if (OpenApiTypeChecker.isObject(input)) {
        // OBJECT TYPE
        const properties: Record<string, ILlmSchema> = Object.fromEntries(
          Object.entries(input.properties ?? {})
            .map(([key, value]) => {
              const converted: IResult<ILlmSchema, IOpenApiSchemaError> =
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
              const converted: IResult<ILlmSchema, IOpenApiSchemaError> =
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
              ? JsonDescriptionUtil.take(input)
              : input.description,
        });
      } else if (OpenApiTypeChecker.isArray(input)) {
        // ARRAY TYPE
        const items: IResult<ILlmSchema, IOpenApiSchemaError> = transform({
          config: props.config,
          components: props.components,
          $defs: props.$defs,
          schema: input.items,
          refAccessor: props.refAccessor,
          accessor: `${accessor}.items`,
        });
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
          method: "LlmSchemaComposer.schema",
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
                    ? Object.fromEntries(
                        Object.entries(props.schema.discriminator.mapping).map(
                          ([key, value]) => [
                            key,
                            `#/$defs/${value.split("/").at(-1)}`,
                          ],
                        ),
                      )
                    : undefined,
              }
            : undefined,
      },
    };
  };

  /* -----------------------------------------------------------
    SEPARATORS
  ----------------------------------------------------------- */
  export const separate = (props: {
    parameters: ILlmSchema.IParameters;
    predicate: (schema: ILlmSchema) => boolean;
    convention?: (key: string, type: "llm" | "human") => string;
    equals?: boolean;
  }): ILlmFunction.ISeparated => {
    const convention =
      props.convention ??
      ((key, type) => `${key}.${NamingConvention.capitalize(type)}`);
    const [llm, human] = separateObject({
      predicate: props.predicate,
      convention,
      $defs: props.parameters.$defs,
      schema: props.parameters,
    });
    if (llm === null || human === null)
      return {
        llm: (llm as ILlmSchema.IParameters | null) ?? {
          type: "object",
          properties: {} as Record<string, ILlmSchema>,
          required: [],
          additionalProperties: false,
          $defs: {},
        },
        human: human as ILlmSchema.IParameters | null,
      };
    const output: ILlmFunction.ISeparated = {
      llm: {
        ...llm,
        $defs: Object.fromEntries(
          Object.entries(props.parameters.$defs).filter(([key]) =>
            key.endsWith(".Llm"),
          ),
        ),
        additionalProperties: false,
      },
      human: {
        ...human,
        $defs: Object.fromEntries(
          Object.entries(props.parameters.$defs).filter(([key]) =>
            key.endsWith(".Human"),
          ),
        ),
        additionalProperties: false,
      },
    };
    for (const key of Object.keys(props.parameters.$defs))
      if (key.endsWith(".Llm") === false && key.endsWith(".Human") === false)
        delete props.parameters.$defs[key];
    if (Object.keys(output.llm.properties).length !== 0) {
      const components: OpenApi.IComponents = {};
      output.validate = OpenApiValidator.create({
        components,
        schema: invert({
          components,
          schema: output.llm,
          $defs: output.llm.$defs,
        }),
        required: true,
        equals: props.equals,
      });
    }
    return output;
  };

  const separateStation = (props: {
    predicate: (schema: ILlmSchema) => boolean;
    convention: (key: string, type: "llm" | "human") => string;
    $defs: Record<string, ILlmSchema>;
    schema: ILlmSchema;
  }): [ILlmSchema | null, ILlmSchema | null] => {
    if (props.predicate(props.schema) === true) return [null, props.schema];
    else if (
      LlmTypeChecker.isUnknown(props.schema) ||
      LlmTypeChecker.isAnyOf(props.schema)
    )
      return [props.schema, null];
    else if (LlmTypeChecker.isObject(props.schema))
      return separateObject({
        predicate: props.predicate,
        convention: props.convention,
        $defs: props.$defs,
        schema: props.schema,
      });
    else if (LlmTypeChecker.isArray(props.schema))
      return separateArray({
        predicate: props.predicate,
        convention: props.convention,
        $defs: props.$defs,
        schema: props.schema,
      });
    else if (LlmTypeChecker.isReference(props.schema))
      return separateReference({
        predicate: props.predicate,
        convention: props.convention,
        $defs: props.$defs,
        schema: props.schema,
      });
    return [props.schema, null];
  };

  const separateArray = (props: {
    predicate: (schema: ILlmSchema) => boolean;
    convention: (key: string, type: "llm" | "human") => string;
    $defs: Record<string, ILlmSchema>;
    schema: ILlmSchema.IArray;
  }): [ILlmSchema.IArray | null, ILlmSchema.IArray | null] => {
    const [x, y] = separateStation({
      predicate: props.predicate,
      convention: props.convention,
      $defs: props.$defs,
      schema: props.schema.items,
    });
    return [
      x !== null
        ? {
            ...props.schema,
            items: x,
          }
        : null,
      y !== null
        ? {
            ...props.schema,
            items: y,
          }
        : null,
    ];
  };

  const separateObject = (props: {
    $defs: Record<string, ILlmSchema>;
    predicate: (schema: ILlmSchema) => boolean;
    convention: (key: string, type: "llm" | "human") => string;
    schema: ILlmSchema.IObject;
  }): [ILlmSchema.IObject | null, ILlmSchema.IObject | null] => {
    // EMPTY OBJECT
    if (
      Object.keys(props.schema.properties ?? {}).length === 0 &&
      !!props.schema.additionalProperties === false
    )
      return [props.schema, null];

    const llm = {
      ...props.schema,
      properties: {} as Record<string, ILlmSchema>,
      additionalProperties: props.schema.additionalProperties,
    } satisfies ILlmSchema.IObject;
    const human = {
      ...props.schema,
      properties: {} as Record<string, ILlmSchema>,
    } satisfies ILlmSchema.IObject;

    for (const [key, value] of Object.entries(props.schema.properties ?? {})) {
      const [x, y] = separateStation({
        predicate: props.predicate,
        convention: props.convention,
        $defs: props.$defs,
        schema: value,
      });
      if (x !== null) llm.properties[key] = x;
      if (y !== null) human.properties[key] = y;
    }
    if (
      typeof props.schema.additionalProperties === "object" &&
      props.schema.additionalProperties !== null
    ) {
      const [dx, dy] = separateStation({
        predicate: props.predicate,
        convention: props.convention,
        $defs: props.$defs,
        schema: props.schema.additionalProperties,
      });
      llm.additionalProperties = dx ?? false;
      human.additionalProperties = dy ?? false;
    }
    return [
      !!Object.keys(llm.properties).length || !!llm.additionalProperties
        ? shrinkRequired(llm)
        : null,
      !!Object.keys(human.properties).length || human.additionalProperties
        ? shrinkRequired(human)
        : null,
    ];
  };

  const separateReference = (props: {
    predicate: (schema: ILlmSchema) => boolean;
    convention: (key: string, type: "llm" | "human") => string;
    $defs: Record<string, ILlmSchema>;
    schema: ILlmSchema.IReference;
  }): [ILlmSchema.IReference | null, ILlmSchema.IReference | null] => {
    const key: string =
      props.schema.$ref.split("#/$defs/")[1] ??
      props.schema.$ref.split("/").at(-1)!;
    const humanKey: string = props.convention(key, "human");
    const llmKey: string = props.convention(key, "llm");

    // FIND EXISTING
    if (props.$defs?.[humanKey] || props.$defs?.[llmKey])
      return [
        props.$defs?.[llmKey]
          ? {
              ...props.schema,
              $ref: `#/$defs/${llmKey}`,
            }
          : null,
        props.$defs?.[humanKey]
          ? {
              ...props.schema,
              $ref: `#/$defs/${humanKey}`,
            }
          : null,
      ];

    // PRE-ASSIGNMENT
    props.$defs![llmKey] = {};
    props.$defs![humanKey] = {};

    // DO COMPOSE
    const schema: ILlmSchema = props.$defs?.[key]!;
    const [llm, human] = separateStation({
      predicate: props.predicate,
      convention: props.convention,
      $defs: props.$defs,
      schema,
    });
    if (llm !== null) Object.assign(props.$defs[llmKey], llm);
    if (human !== null) Object.assign(props.$defs[humanKey], human);

    // ONLY ONE
    if (llm === null || human === null) {
      delete props.$defs[llmKey];
      delete props.$defs[humanKey];
      return llm === null ? [null, props.schema] : [props.schema, null];
    }

    // BOTH OF THEM
    return [
      llm !== null
        ? {
            ...props.schema,
            $ref: `#/$defs/${llmKey}`,
          }
        : null,
      human !== null
        ? {
            ...props.schema,
            $ref: `#/$defs/${humanKey}`,
          }
        : null,
    ];
  };

  const shrinkRequired = (s: ILlmSchema.IObject): ILlmSchema.IObject => {
    s.required = s.required.filter((key) => s.properties?.[key] !== undefined);
    return s;
  };

  /* -----------------------------------------------------------
    INVERTERS
  ----------------------------------------------------------- */
  export const invert = (props: {
    components: OpenApi.IComponents;
    schema: ILlmSchema;
    $defs: Record<string, ILlmSchema>;
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
      invert({
        components: props.components,
        $defs: props.$defs,
        schema,
      });
    const visit = (schema: ILlmSchema): void => {
      if (LlmTypeChecker.isArray(schema))
        union.push({
          ...schema,
          ...LlmDescriptionInverter.array(schema.description),
          items: next(schema.items),
        });
      else if (LlmTypeChecker.isObject(schema))
        union.push({
          ...schema,
          properties: Object.fromEntries(
            Object.entries(schema.properties).map(([key, value]) => [
              key,
              next(value),
            ]),
          ),
          additionalProperties:
            typeof schema.additionalProperties === "object" &&
            schema.additionalProperties !== null
              ? next(schema.additionalProperties)
              : schema.additionalProperties,
        });
      else if (LlmTypeChecker.isAnyOf(schema)) schema.anyOf.forEach(visit);
      else if (LlmTypeChecker.isReference(schema)) {
        const key: string =
          schema.$ref.split("#/$defs/")[1] ?? schema.$ref.split("/").at(-1)!;
        if (props.components.schemas?.[key] === undefined) {
          props.components.schemas ??= {};
          props.components.schemas[key] = {};
          props.components.schemas[key] = next(props.$defs[key] ?? {});
        }
        union.push({
          ...schema,
          $ref: `#/components/schemas/${key}`,
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
                          ? Object.fromEntries(
                              Object.entries(
                                props.schema["x-discriminator"].mapping,
                              ).map(([key, value]) => [
                                key,
                                `#/components/schemas/${value.split("/").at(-1)}`,
                              ]),
                            )
                          : undefined,
                    }
                  : undefined,
            }),
    } satisfies OpenApi.IJsonSchema;
  };

  export const getConfig = (
    config?: Partial<ILlmSchema.IConfig> | undefined,
  ): ILlmSchema.IConfig => ({
    reference: config?.reference ?? true,
    strict: config?.strict ?? false,
  });
}

const validateStrict = (
  schema: OpenApi.IJsonSchema,
  accessor: string,
): IOpenApiSchemaError.IReason[] => {
  const reasons: IOpenApiSchemaError.IReason[] = [];
  if (OpenApiTypeChecker.isObject(schema)) {
    if (!!schema.additionalProperties)
      reasons.push({
        schema: schema,
        accessor: `${accessor}.additionalProperties`,
        message:
          "LLM does not allow additionalProperties in strict mode, the dynamic key typed object.",
      });
    for (const key of Object.keys(schema.properties ?? {}))
      if (schema.required?.includes(key) === false)
        reasons.push({
          schema: schema,
          accessor: `${accessor}.properties.${key}`,
          message: "LLM does not allow optional properties in strict mode.",
        });
  }
  return reasons;
};
