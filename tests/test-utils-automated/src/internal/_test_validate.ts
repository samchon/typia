import { IValidation, OpenApi } from "@typia/interface";
import { Spoiler } from "@typia/template";
import { OpenApiTypeChecker, OpenApiValidator } from "@typia/utils";

/**
 * Verifies OpenAPI validation against independent template spoiler oracles.
 *
 * Template spoilers define invalid paths independently of the schema validator.
 * Predictable branches retain their leaf paths, while both sides canonicalize
 * an ambiguous oneOf failure to its union owner. Enforcing the whole sorted
 * canonical path set prevents omissions from hiding behind a failed result.
 *
 * 1. Validate a generated success value and preserve its identity.
 * 2. Apply every fixture spoiler and compare the exact sorted failure paths.
 */
export const _test_validate = <T>(props: {
  schema: OpenApi.IJsonSchema;
  components: OpenApi.IComponents;
  factory: {
    generate: () => T;
    SPOILERS?: Spoiler<T>[];
  };
  name: string;
}): void => {
  const input: T = props.factory.generate();
  const validate = OpenApiValidator.create({
    components: props.components,
    schema: props.schema,
    required: true,
  });
  const result: IValidation<unknown> = validate(input);

  if (result.success === false) {
    console.log("errors", result.data, result.errors);
    throw new Error(
      `Bug on OpenApiValidator.validate(): failed to understand the ${props.name} type.`,
    );
  } else if (result.data !== input)
    throw new Error(
      "Bug on OpenApiValidator.validate(): failed to archive the input value.",
    );

  const wrong: ISpoiled[] = [];
  for (const spoil of props.factory.SPOILERS ?? []) {
    const elem: T = props.factory.generate();
    const expected: string[] = normalizePaths({
      components: props.components,
      schema: props.schema,
      value: elem,
      paths: spoil(elem),
    });
    const valid: IValidation<unknown> = validate(elem);

    if (valid.success === true) {
      console.log(expected);
      throw new Error(
        `Bug on OpenApiValidator.validate(): failed to detect error on the ${props.name} type.`,
      );
    }

    const actual: string[] = normalizePaths({
      components: props.components,
      schema: props.schema,
      value: elem,
      paths: valid.errors.map((error) => error.path),
    });

    if (
      actual.length !== expected.length ||
      actual.every((path, i) => path === expected[i]) === false
    )
      wrong.push({
        expected,
        actual,
      });
  }
  if (wrong.length !== 0) {
    console.log(wrong);
    throw new Error(
      `Bug on OpenApiValidator.validate(): failed to detect error on the ${props.name} type.`,
    );
  }
};

interface ISpoiled {
  expected: string[];
  actual: string[];
}

const normalizePaths = (props: {
  components: OpenApi.IComponents;
  schema: OpenApi.IJsonSchema;
  value: unknown;
  paths: string[];
}): string[] =>
  [
    ...new Set(
      props.paths.map((path) =>
        normalizePath({
          ...props,
          path,
        }),
      ),
    ),
  ].sort();

const normalizePath = (props: {
  components: OpenApi.IComponents;
  schema: OpenApi.IJsonSchema;
  value: unknown;
  path: string;
}): string => {
  const segments: IPathSegment[] = parsePath(props.path);
  let schema: OpenApi.IJsonSchema = props.schema;
  let value: unknown = props.value;
  let path = "$input";
  for (const segment of segments) {
    schema = resolve(props.components, schema);
    if (OpenApiTypeChecker.isOneOf(schema)) {
      const selected: OpenApi.IJsonSchema | undefined = selectOneOf({
        components: props.components,
        schema,
        value,
      });
      if (selected === undefined) return path;
      schema = resolve(props.components, selected);
    }
    if (OpenApiTypeChecker.isObject(schema) && typeof segment.key === "string")
      schema =
        schema.properties?.[segment.key] ??
        (typeof schema.additionalProperties === "object"
          ? schema.additionalProperties
          : {});
    else if (
      OpenApiTypeChecker.isTuple(schema) &&
      typeof segment.key === "number"
    )
      schema =
        schema.prefixItems[segment.key] ??
        (typeof schema.additionalItems === "object"
          ? schema.additionalItems
          : {});
    else if (
      OpenApiTypeChecker.isArray(schema) &&
      typeof segment.key === "number"
    )
      schema = schema.items;
    else return props.path;
    value =
      typeof value === "object" && value !== null
        ? (value as Record<PropertyKey, unknown>)[segment.key]
        : undefined;
    path += segment.accessor;
  }
  return path;
};

const selectOneOf = (props: {
  components: OpenApi.IComponents;
  schema: OpenApi.IJsonSchema.IOneOf;
  value: unknown;
}): OpenApi.IJsonSchema | undefined => {
  const branches = props.schema.oneOf.map((schema) => ({
    original: schema,
    resolved: resolve(props.components, schema),
  }));
  const compatible = branches.filter(({ resolved }) =>
    compatibleWith(resolved, props.value),
  );
  if (compatible.length === 1) return compatible[0]!.original;
  if (
    typeof props.value !== "object" ||
    props.value === null ||
    Array.isArray(props.value)
  )
    return undefined;

  const objects = compatible.filter(
    (
      branch,
    ): branch is {
      original: OpenApi.IJsonSchema;
      resolved: OpenApi.IJsonSchema.IObject;
    } => OpenApiTypeChecker.isObject(branch.resolved),
  );
  for (const branch of objects) {
    const candidates: string[] = [];
    for (const key of branch.resolved.required ?? []) {
      const target = branch.resolved.properties?.[key];
      if (target === undefined) continue;
      const neighbors = objects
        .filter((other) => other !== branch)
        .map(({ resolved }) => resolved.properties?.[key])
        .filter((schema) => schema !== undefined);
      const unique = OpenApiTypeChecker.isConstant(target)
        ? neighbors.every(
            (schema) =>
              OpenApiTypeChecker.isConstant(schema) &&
              schema.const !== target.const,
          )
        : neighbors.length === 0;
      if (unique) candidates.push(key);
    }
    const key =
      candidates.find((candidate) =>
        OpenApiTypeChecker.isConstant(
          branch.resolved.properties?.[candidate] ?? {},
        ),
      ) ?? candidates[0];
    if (key === undefined) continue;
    const target = branch.resolved.properties?.[key];
    const matched =
      target !== undefined && OpenApiTypeChecker.isConstant(target)
        ? (props.value as Record<string, unknown>)[key] === target.const
        : (props.value as Record<string, unknown>)[key] !== undefined;
    if (matched) return branch.original;
  }
  return undefined;
};

const compatibleWith = (
  schema: OpenApi.IJsonSchema,
  value: unknown,
): boolean => {
  if (OpenApiTypeChecker.isUnknown(schema)) return true;
  if (OpenApiTypeChecker.isConstant(schema)) return schema.const === value;
  if (OpenApiTypeChecker.isNull(schema)) return value === null;
  if (OpenApiTypeChecker.isBoolean(schema)) return typeof value === "boolean";
  if (OpenApiTypeChecker.isInteger(schema))
    return typeof value === "number" && Number.isInteger(value);
  if (OpenApiTypeChecker.isNumber(schema)) return typeof value === "number";
  if (OpenApiTypeChecker.isString(schema)) return typeof value === "string";
  if (OpenApiTypeChecker.isArray(schema) || OpenApiTypeChecker.isTuple(schema))
    return Array.isArray(value);
  if (OpenApiTypeChecker.isObject(schema))
    return typeof value === "object" && value !== null && !Array.isArray(value);
  return false;
};

const resolve = (
  components: OpenApi.IComponents,
  input: OpenApi.IJsonSchema,
): OpenApi.IJsonSchema => {
  let schema: OpenApi.IJsonSchema = input;
  const visited = new Set<string>();
  while (OpenApiTypeChecker.isReference(schema)) {
    const key = schema.$ref.split("/").pop() ?? "";
    if (visited.has(key)) return {};
    visited.add(key);
    schema = components.schemas?.[key] ?? {};
  }
  return schema;
};

const parsePath = (path: string): IPathSegment[] => {
  if (path.startsWith("$input") === false)
    throw new Error(`Invalid spoiler path: ${path}`);
  const output: IPathSegment[] = [];
  let index = "$input".length;
  while (index < path.length) {
    const start = index;
    if (path[index] === ".") {
      index++;
      const keyStart = index;
      while (index < path.length && path[index] !== "." && path[index] !== "[")
        index++;
      output.push({
        key: path.slice(keyStart, index),
        accessor: path.slice(start, index),
      });
    } else if (path[index] === "[") {
      const close = findBracketClose(path, index);
      const token = path.slice(index + 1, close);
      output.push({
        key: token.startsWith('"') ? JSON.parse(token) : Number(token),
        accessor: path.slice(start, close + 1),
      });
      index = close + 1;
    } else throw new Error(`Invalid spoiler path: ${path}`);
  }
  return output;
};

const findBracketClose = (path: string, start: number): number => {
  let quoted = false;
  let escaped = false;
  for (let index = start + 1; index < path.length; index++) {
    const char = path[index]!;
    if (escaped) escaped = false;
    else if (char === "\\" && quoted) escaped = true;
    else if (char === '"') quoted = !quoted;
    else if (char === "]" && quoted === false) return index;
  }
  throw new Error(`Invalid spoiler path: ${path}`);
};

interface IPathSegment {
  key: string | number;
  accessor: string;
}
