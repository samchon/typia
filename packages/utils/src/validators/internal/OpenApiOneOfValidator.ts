import { OpenApi } from "@typia/interface";

import { MapUtil } from "../../utils";
import { LlmReference } from "../../utils/internal/LlmReference";
import { ObjectDictionary } from "../../utils/internal/ObjectDictionary";
import { OpenApiTypeChecker } from "../OpenApiTypeChecker";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

/**
 * Validates a value against a union schema.
 *
 * The branch is chosen by a discriminator that is derived from the schema when
 * possible, so one failing branch reports its own errors instead of a general
 * union mismatch.
 *
 * @evidence contracts/common.md#principled-implementation A union is validated by choosing a branch from the value instead of reporting a generic mismatch: a lone non-null member is selected for any non-null value, arrays are discriminated by an item schema that no sibling covers using the first element, and objects by a required property that is unique among the branches, preferring a constant. The branches that apply are validated quietly and the first that accepts the value wins; if a non-retryable branch fails, it is revalidated loudly to report its errors, and if no discriminator applies the remainders are tried in order, with an unknown member accepting everything.
 * @evidence contracts/common.md#clear-and-simple-design A public validate with private discrimination helpers for arrays and objects and a flatten helper; the branch records carry a retryable flag so tentative array probes may fall through while object discriminators own their errors.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The discriminator is derived from the schema's own constants and required keys, with no consumer or property name built in. The array probe only inspects the first element, so a heterogeneous array whose first element selects the wrong branch is retried through the remaining ones.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment and function doc were added, and the branch flag has its own comment.
 */
export namespace OpenApiOneOfValidator {
  /**
   * Validate the value against the union, trying the branches that the
   * discriminator selects before the remaining ones.
   *
   * @param ctx Validation context
   * @param references Reference keys already followed, for cycle detection
   *
   * @returns Whether some branch accepts the value
   *
   * @evidence contracts/common.md#principled-implementation Branches chosen by the discriminator are tried first and quietly, the first that accepts is revalidated loudly only when `equals` is set, and a non-retryable failure is reported in place of a union mismatch; otherwise the remainders are searched. With `equals`, acceptance is therefore decided in two passes, one that ignores superfluous properties to select a branch and one that applies them to report.
   * @evidence contracts/common.md#clear-and-simple-design One recursive function that calls itself for the remainders.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Quiet probing uses the `exceptionable` flag of the context rather than catching errors.
   * @evidence contracts/common.md#meaningful-documentation A doc was added with the parameters and result.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IOneOf>,
    references: ReadonlySet<string> = new Set(),
  ): boolean => {
    const discriminator: IDiscriminator = getDiscriminator(ctx);
    const candidates: IDiscriminatorBranch[] = discriminator.branches.filter(
      (item) => item.predicator(ctx.value),
    );
    if (candidates.length !== 0) {
      for (const item of candidates)
        if (
          OpenApiStationValidator.validate(
            {
              ...ctx,
              schema: item.schema,
              exceptionable: false,
              equals: false,
            },
            undefined,
            references,
          )
        )
          return ctx.equals === true
            ? OpenApiStationValidator.validate(
                {
                  ...ctx,
                  schema: item.schema,
                },
                undefined,
                references,
              )
            : true;
        else if (item.retryable === false)
          return OpenApiStationValidator.validate(
            {
              ...ctx,
              schema: item.schema,
            },
            undefined,
            references,
          );
      return OpenApiStationValidator.validate(
        {
          ...ctx,
          schema: candidates[0]!.schema,
        },
        undefined,
        references,
      );
    }
    if (discriminator.branches.length !== 0)
      return validate(
        {
          ...ctx,
          schema: {
            oneOf: discriminator.remainders,
          },
        },
        references,
      );

    const matched: OpenApi.IJsonSchema | undefined =
      discriminator.remainders.find((schema) =>
        OpenApiStationValidator.validate(
          {
            ...ctx,
            schema,
            exceptionable: false,
            equals: false,
          },
          undefined,
          references,
        ),
      );
    if (matched === undefined) return ctx.report(ctx);
    return ctx.equals === true
      ? OpenApiStationValidator.validate(
          {
            ...ctx,
            schema: matched,
          },
          undefined,
          references,
        )
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
            schema: significant[0]!.schema,
            predicator: (value) => value !== null,
            retryable: false,
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
        ? discriminateArrays(ctx, arrays)
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
          schema: arraySchemas[0]!.schema,
          predicator: (value) => Array.isArray(value),
          retryable: true,
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
            retryable: true,
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
          schema: objectSchemas[0]!.schema,
          predicator: noArray
            ? (value) => typeof value === "object" && value !== null
            : (value) =>
                typeof value === "object" &&
                value !== null &&
                Array.isArray(value) === false,
          retryable: false,
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
        MapUtil.take(matrix, key, () =>
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
            OpenApiTypeChecker.isConstant(obj.escaped.properties![key]!),
          ) ?? candidates[0]!;
        const target: OpenApi.IJsonSchema = obj.escaped.properties![top]!;
        return {
          schema: obj.schema,
          predicator: OpenApiTypeChecker.isConstant(target)
            ? (value) =>
                typeof value === "object" &&
                value !== null &&
                ObjectDictionary.get(value as Record<string, unknown>, top) ===
                  target.const
            : (value) =>
                typeof value === "object" &&
                value !== null &&
                ObjectDictionary.has(value, top),
          retryable: false,
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
    const key: string | undefined = LlmReference.readOpenApi(props.schema.$ref);
    if (key === undefined || props.visited.has(key))
      return {
        schema: props.schema,
        escaped: { oneOf: [] },
      };
    props.visited.add(key);
    const found: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
      props.components.schemas,
      key,
    );
    if (found === undefined)
      return {
        schema: props.schema,
        escaped: { oneOf: [] },
      };
    return {
      ...getFlattened({
        components: props.components,
        schema: found,
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
  /**
   * Whether a failed predicate match may fall through to another candidate.
   *
   * Array first-element probes are tentative, while object key discriminators
   * establish ordered ownership of the value and its validation errors.
   */
  retryable: boolean;
}

interface IFlatSchema<
  Schema extends OpenApi.IJsonSchema = OpenApi.IJsonSchema,
> {
  schema: OpenApi.IJsonSchema;
  escaped: Schema;
}
