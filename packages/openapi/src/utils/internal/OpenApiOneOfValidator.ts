import { OpenApi } from "../../OpenApi";
import { MapUtil } from "../MapUtil";
import { OpenApiTypeChecker } from "../OpenApiTypeChecker";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

export namespace OpenApiOneOfValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IOneOf>,
  ): boolean => {
    const discriminator: IDiscriminator = getDiscriminator(ctx);
    for (const item of discriminator.branches)
      if (item.predicator(ctx.value))
        return OpenApiStationValidator.validate({
          ...ctx,
          schema: item.schema,
        });
    if (discriminator.branches.length !== 0)
      return validate({
        ...ctx,
        schema: {
          oneOf: discriminator.remainders,
        },
      });
    const matched: OpenApi.IJsonSchema | undefined =
      discriminator.remainders.find(
        (schema) =>
          OpenApiStationValidator.validate({
            ...ctx,
            schema,
            exceptionable: false,
            equals: false,
          }) === true,
      );
    if (matched === undefined) return ctx.report(ctx);
    return ctx.equals === true
      ? OpenApiStationValidator.validate({
          ...ctx,
          schema: matched,
        })
      : true;
  };

  const getDiscriminator = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IOneOf>,
  ): IDiscriminator => {
    const resolvedList: IFlatSchema[] = ctx.schema.oneOf.map((schema) =>
      getFlattened({
        components: ctx.components,
        schema,
        visited: new Set(),
      }),
    );

    // FIND ANY TYPE
    const anything: IFlatSchema | undefined = resolvedList.find((resolved) =>
      OpenApiTypeChecker.isUnknown(resolved.escaped),
    );
    if (anything)
      return {
        branches: [],
        remainders: [anything.schema],
      };

    // CHECK NULLABLES
    const nullables: IFlatSchema<OpenApi.IJsonSchema.INull>[] =
      resolvedList.filter(
        (resolved): resolved is IFlatSchema<OpenApi.IJsonSchema.INull> =>
          OpenApiTypeChecker.isNull(resolved.schema),
      );
    const significant: IFlatSchema<OpenApi.IJsonSchema>[] = resolvedList.filter(
      (resolved) => false === OpenApiTypeChecker.isNull(resolved.escaped),
    );
    if (significant.length === 1)
      return {
        branches: [
          {
            schema: significant[0].schema,
            predicator: (value) => value !== null,
          },
        ],
        remainders: nullables.map((nullable) => nullable.schema),
      };

    // DISCRIMINATIONS
    const tuples = significant.filter((flat) =>
      OpenApiTypeChecker.isTuple(flat.escaped),
    );
    const arrays = significant.filter(
      (flat): flat is IFlatSchema<OpenApi.IJsonSchema.IArray> =>
        OpenApiTypeChecker.isArray(flat.escaped),
    );
    const branches: IDiscriminatorBranch[] = [
      ...(tuples.length === 0 && arrays.length !== 0
        ? discriminateArrays(
            ctx,
            significant.filter(
              (flat): flat is IFlatSchema<OpenApi.IJsonSchema.IArray> =>
                OpenApiTypeChecker.isArray(flat.schema),
            ),
          )
        : []),
      ...discriminateObjects(
        ctx,
        significant.filter(
          (flat): flat is IFlatSchema<OpenApi.IJsonSchema.IObject> =>
            OpenApiTypeChecker.isObject(flat.escaped),
        ),
        tuples.length + arrays.length === 0,
      ),
    ];
    return {
      branches,
      remainders: ctx.schema.oneOf.filter(
        (x) => branches.some((y) => y.schema === x) === false,
      ),
    };
  };

  const discriminateArrays = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IOneOf>,
    arraySchemas: IFlatSchema<OpenApi.IJsonSchema.IArray>[],
  ): IDiscriminatorBranch[] => {
    if (arraySchemas.length === 1)
      return [
        {
          schema: arraySchemas[0].schema,
          predicator: (value) => Array.isArray(value),
        },
      ];
    return arraySchemas
      .filter((flat, i, array) =>
        array.every(
          (item, j) =>
            i === j ||
            OpenApiTypeChecker.covers({
              components: ctx.components,
              x: item.escaped.items,
              y: flat.escaped.items,
            }) === false,
        ),
      )
      .map(
        (flat) =>
          ({
            schema: flat.schema,
            predicator: (value) =>
              Array.isArray(value) &&
              (value.length === 0 ||
                OpenApiStationValidator.validate({
                  ...ctx,
                  schema: (flat.escaped as OpenApi.IJsonSchema.IArray).items,
                  value: value[0]!,
                  path: `${ctx.path}[0]`,
                  exceptionable: false,
                  equals: false,
                })),
          }) satisfies IDiscriminatorBranch,
      );
  };

  const discriminateObjects = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IOneOf>,
    objectSchemas: IFlatSchema<OpenApi.IJsonSchema.IObject>[],
    noArray: boolean,
  ): IDiscriminatorBranch[] => {
    if (objectSchemas.length === 1)
      return [
        {
          schema: objectSchemas[0].schema,
          predicator: noArray
            ? (value) => typeof value === "object" && value !== null
            : (value) =>
                typeof value === "object" &&
                value !== null &&
                Array.isArray(value) === false,
        },
      ];

    // KEEP ONLY REQUIRED PROPERTIES
    objectSchemas = objectSchemas
      .filter(
        (flat) =>
          flat.escaped.properties !== undefined &&
          flat.escaped.required !== undefined,
      )
      .map(
        (flat) =>
          ({
            ...flat,
            escaped: {
              ...flat.escaped,
              properties: Object.fromEntries(
                Object.entries(flat.escaped.properties ?? {}).map(
                  ([key, value]) => [
                    key,
                    getFlattened({
                      components: ctx.components,
                      schema: value,
                      visited: new Set(),
                    }).escaped,
                  ],
                ),
              ),
            },
          }) satisfies IFlatSchema<OpenApi.IJsonSchema.IObject>,
      );

    // PROPERTY MATRIX
    const matrix: Map<string, Array<OpenApi.IJsonSchema | null>> = new Map();
    objectSchemas.forEach((obj, i) => {
      for (const [key, value] of Object.entries(obj.escaped.properties ?? {})) {
        if (!!obj.escaped.required?.includes(key) === false) continue;
        MapUtil.take(matrix)(key)(() =>
          new Array(objectSchemas.length).fill(null),
        )[i] = value;
      }
    });

    // THE BRANCHES
    return objectSchemas
      .map((obj, i) => {
        const candidates: string[] = [];
        for (const [key, value] of Object.entries(
          obj.escaped.properties ?? {},
        )) {
          if (!!obj.escaped.required?.includes(key) === false) continue;

          const neighbors: OpenApi.IJsonSchema[] = matrix
            .get(key)!
            .filter((_oppo, j) => i !== j)
            .filter((oppo) => oppo !== null);
          const unique: boolean = OpenApiTypeChecker.isConstant(value)
            ? neighbors.every(
                (oppo) =>
                  OpenApiTypeChecker.isConstant(oppo) &&
                  value.const !== oppo.const,
              )
            : neighbors.length === 0;
          if (unique) candidates.push(key);
        }
        if (candidates.length === 0) return null;
        const top: string =
          candidates.find((key) =>
            OpenApiTypeChecker.isConstant(obj.escaped.properties![key]),
          ) ?? candidates[0];
        const target: OpenApi.IJsonSchema = obj.escaped.properties![top];
        return {
          schema: obj.schema,
          predicator: OpenApiTypeChecker.isConstant(target)
            ? (value) =>
                typeof value === "object" &&
                value !== null &&
                (value as any)[top] === target.const
            : (value) =>
                typeof value === "object" &&
                value !== null &&
                (value as any)[top] !== undefined,
        } satisfies IDiscriminatorBranch;
      })
      .filter((b) => b !== null);
  };
}

const getFlattened = (props: {
  components: OpenApi.IComponents;
  schema: OpenApi.IJsonSchema;
  visited: Set<string>;
}): IFlatSchema => {
  if (OpenApiTypeChecker.isReference(props.schema)) {
    const key: string = props.schema.$ref.split("/").pop() ?? "";
    if (props.visited.has(key))
      return {
        schema: props.schema,
        escaped: {},
      };
    props.visited.add(key);
    return {
      ...getFlattened({
        components: props.components,
        schema: props.components.schemas?.[key] ?? {},
        visited: props.visited,
      }),
      schema: props.schema,
    };
  }
  return {
    schema: props.schema,
    escaped: props.schema,
  };
};

interface IDiscriminator {
  branches: IDiscriminatorBranch[];
  remainders: OpenApi.IJsonSchema[];
}

interface IDiscriminatorBranch {
  schema: OpenApi.IJsonSchema;
  predicator: (value: unknown) => boolean;
}

interface IFlatSchema<
  Schema extends OpenApi.IJsonSchema = OpenApi.IJsonSchema,
> {
  schema: OpenApi.IJsonSchema;
  escaped: Schema;
}
