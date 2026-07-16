import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi, OpenApiV3 } from "@typia/interface";
import {
  HttpLlm,
  HttpMigration,
  LlmSchemaConverter,
  OpenApiConverter,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import typia from "typia";

type RecursiveObject<T extends string> = {
  value: T;
  children: RecursiveObject<T>[];
};

type RecursiveArray<T extends string> = Array<T | RecursiveArray<T>>;
type AliasValue<T extends string> = T | number;

interface CaféVariant {
  kind: "café";
  payload: RecursiveObject<"A/B">;
}

interface 한글Variant {
  kind: "hangul";
  payload: RecursiveObject<"T~N">;
}

interface $Named {
  value: "$Named";
  child?: $Named;
}

interface Named {
  value: "Named";
  child?: Named;
}

namespace Qualified {
  export interface Member {
    value: string;
    child?: Member;
  }
}

interface IForward {
  qualified: Qualified.Member;
  plain: RecursiveObject<"Plain">;
  dot: RecursiveObject<"A.B">;
  dash: RecursiveObject<"A-B">;
  underscore: RecursiveObject<"A_B">;
  slash: RecursiveObject<"A/B">;
  escapedSlash: RecursiveObject<"A_x2F_B">;
  tilde: RecursiveObject<"T~N">;
  percent: RecursiveObject<"C%D">;
  hash: RecursiveObject<"A#B">;
  unicode: RecursiveObject<"Café">;
  punctuation: RecursiveObject<"/~%#">;
  empty: RecursiveObject<"">;
  space: RecursiveObject<"A B">;
  colon: RecursiveObject<"A:B">;
  compact: RecursiveObject<"AB">;
  alias: AliasValue<"A/B">;
  array: RecursiveArray<"A/B">;
  variant: CaféVariant | 한글Variant;
  dollarNamed: $Named;
  plainNamed: Named;
  createdAt: Date;
}

interface IReverse {
  createdAt: Date;
  plainNamed: Named;
  dollarNamed: $Named;
  variant: 한글Variant | CaféVariant;
  array: RecursiveArray<"A/B">;
  alias: AliasValue<"A/B">;
  compact: RecursiveObject<"AB">;
  colon: RecursiveObject<"A:B">;
  space: RecursiveObject<"A B">;
  empty: RecursiveObject<"">;
  punctuation: RecursiveObject<"/~%#">;
  unicode: RecursiveObject<"Café">;
  hash: RecursiveObject<"A#B">;
  percent: RecursiveObject<"C%D">;
  tilde: RecursiveObject<"T~N">;
  escapedSlash: RecursiveObject<"A_x2F_B">;
  slash: RecursiveObject<"A/B">;
  underscore: RecursiveObject<"A_B">;
  dash: RecursiveObject<"A-B">;
  dot: RecursiveObject<"A.B">;
  plain: RecursiveObject<"Plain">;
  qualified: Qualified.Member;
}

interface IApplication {
  exchange(input: IForward): Promise<IReverse>;
}

/**
 * Verifies every generated OpenAPI component name is legal and resolvable.
 *
 * Metadata names feed component keys, recursive references, and discriminator
 * mappings across all three public JSON generators. The same allocator must
 * preserve legal controls, separate normalization collisions independently of
 * discovery order, and keep typia's validators aligned with an RFC oracle.
 *
 * 1. Generate schema, schemas, and application output for OAS 3.0 and 3.1.
 * 2. Check legal/illegal names, recursive alias/array/object refs, and mappings.
 * 3. Reorder discovery and validate the generated graph through public utils.
 */
export const test_json_schema_openapi_component_names = (): void => {
  const forward30 = typia.json.schema<IForward, "3.0">();
  const forward31 = typia.json.schema<IForward, "3.1">();
  const reverse30 = typia.json.schema<IReverse, "3.0">();
  const reverse31 = typia.json.schema<IReverse, "3.1">();
  const schemas30 = typia.json.schemas<[IForward, IReverse], "3.0">();
  const schemas31 = typia.json.schemas<[IForward, IReverse], "3.1">();
  const application30 = typia.json.application<IApplication, "3.0">();
  const application31 = typia.json.application<IApplication, "3.1">();

  const units: IUnit[] = [
    unit("schema 3.0", forward30.components, [forward30.schema]),
    unit("schema 3.1", forward31.components, [forward31.schema]),
    unit("reverse schema 3.0", reverse30.components, [reverse30.schema]),
    unit("reverse schema 3.1", reverse31.components, [reverse31.schema]),
    unit("schemas 3.0", schemas30.components, schemas30.schemas),
    unit("schemas 3.1", schemas31.components, schemas31.schemas),
    applicationUnit("application 3.0", application30),
    applicationUnit("application 3.1", application31),
  ];
  for (const output of units) verifyUnit(output);

  const names = componentNamesByValue(forward31.components.schemas ?? {});
  TestValidator.equals("ordinary control", names.Plain, "RecursiveObjectPlain");
  TestValidator.equals("dot control", names["A.B"], "RecursiveObjectA.B");
  TestValidator.equals("hyphen control", names["A-B"], "RecursiveObjectA-B");
  TestValidator.equals("underscore control", names.A_B, "RecursiveObjectA_B");
  TestValidator.equals(
    "escape-shaped legal control",
    names.A_x2F_B,
    "RecursiveObjectA_x2F_B",
  );
  TestValidator.notEquals(
    "forbidden input does not alias escape-shaped legal input",
    names["A/B"],
    names.A_x2F_B,
  );
  TestValidator.notEquals(
    "dollar identifier does not alias its normalized peer",
    names.$Named,
    names.Named,
  );
  TestValidator.predicate(
    "qualified control",
    Object.prototype.hasOwnProperty.call(
      forward31.components.schemas ?? {},
      "Qualified.Member",
    ),
  );
  TestValidator.equals(
    "discovery-order independent names 3.0",
    componentNamesByValue(forward30.components.schemas ?? {}),
    componentNamesByValue(reverse30.components.schemas ?? {}),
  );
  TestValidator.equals(
    "discovery-order independent names 3.1",
    names,
    componentNamesByValue(reverse31.components.schemas ?? {}),
  );
  TestValidator.equals(
    "discovery-order independent component set 3.0",
    Object.keys(forward30.components.schemas ?? {})
      .filter((key) => key !== "IForward")
      .sort(),
    Object.keys(reverse30.components.schemas ?? {})
      .filter((key) => key !== "IReverse")
      .sort(),
  );
  TestValidator.equals(
    "discovery-order independent component set 3.1",
    Object.keys(forward31.components.schemas ?? {})
      .filter((key) => key !== "IForward")
      .sort(),
    Object.keys(reverse31.components.schemas ?? {})
      .filter((key) => key !== "IReverse")
      .sort(),
  );

  const slashReference = {
    $ref: `#/components/schemas/${names["A/B"]}`,
  } as const;
  TestValidator.predicate(
    "OpenApiValidator resolves generated names",
    OpenApiValidator.validate({
      components: forward31.components,
      schema: slashReference,
      value: sample.slash,
      required: true,
    }).success,
  );
  TestValidator.predicate(
    "OpenApiTypeChecker resolves generated names",
    OpenApiTypeChecker.escape({
      components: forward31.components,
      schema: slashReference,
      recursive: 2,
    }).success,
  );

  const $defs: Record<string, ILlmSchema> = {};
  const llmSchema = LlmSchemaConverter.schema({
    components: forward31.components,
    $defs,
    schema: forward31.schema,
  });
  TestValidator.predicate(
    "LlmSchemaConverter resolves generated names",
    llmSchema.success,
  );
  TestValidator.predicate(
    "LlmSchemaConverter emits legal definition names",
    Object.keys($defs).every((key) => /^[a-zA-Z0-9.\-_]+$/.test(key)),
  );

  const document30: OpenApiV3.IDocument = {
    openapi: "3.0.4",
    info: { title: "component names", version: "1.0.0" },
    components: forward30.components,
    paths: {
      "/component": {
        post: {
          operationId: "inspectComponent",
          requestBody: {
            content: {
              "application/json": { schema: forward30.schema },
            },
          },
          responses: {
            200: {
              description: "success",
              content: {
                "application/json": { schema: forward30.schema },
              },
            },
          },
        },
      },
    },
  };
  const emended31: OpenApi.IDocument = {
    openapi: "3.2.0",
    info: { title: "component names", version: "1.0.0" },
    components: forward31.components,
    paths: {
      "/component": {
        post: {
          operationId: "inspectComponent",
          requestBody: {
            content: {
              "application/json": { schema: forward31.schema },
            },
          },
          responses: {
            200: {
              description: "success",
              content: {
                "application/json": { schema: forward31.schema },
              },
            },
          },
        },
      },
    },
    "x-typia-emended-v12": true,
  };
  const document31 = OpenApiConverter.downgradeDocument(emended31, "3.1");
  for (const [label, document] of [
    ["3.0", document30],
    ["3.1", document31],
  ] as const) {
    const converted: OpenApi.IDocument =
      OpenApiConverter.upgradeDocument(document);
    TestValidator.predicate(
      `OpenApiConverter ${label}`,
      Object.keys(converted.components.schemas ?? {}).every((key) =>
        /^[a-zA-Z0-9.\-_]+$/.test(key),
      ),
    );
    const migration = HttpMigration.application(document);
    TestValidator.equals(`HttpMigration errors ${label}`, migration.errors, []);
    TestValidator.equals(
      `HttpMigration routes ${label}`,
      migration.routes.length,
      1,
    );
    const httpLlm = HttpLlm.application({ document });
    TestValidator.equals(`HttpLlm errors ${label}`, httpLlm.errors, []);
    TestValidator.equals(
      `HttpLlm functions ${label}`,
      httpLlm.functions.length,
      1,
    );
  }
};

interface IUnit {
  label: string;
  schemas: Record<string, unknown>;
  roots: unknown[];
}

const unit = (
  label: string,
  components: { schemas?: Record<string, unknown> },
  roots: readonly unknown[],
): IUnit => ({
  label,
  schemas: components.schemas ?? {},
  roots: [...roots],
});

const applicationUnit = (
  label: string,
  application: {
    components: { schemas?: Record<string, unknown> };
    functions: Array<{
      parameters: Array<{ schema: unknown }>;
      output?: { schema: unknown };
    }>;
  },
): IUnit =>
  unit(
    label,
    application.components,
    application.functions.flatMap((func) => [
      ...func.parameters.map((parameter) => parameter.schema),
      ...(func.output === undefined ? [] : [func.output.schema]),
    ]),
  );

const verifyUnit = (unit: IUnit): void => {
  const grammar = /^[a-zA-Z0-9.\-_]+$/;
  const keys = Object.keys(unit.schemas);
  TestValidator.predicate(
    `${unit.label}: legal component keys`,
    keys.length !== 0 && keys.every((key) => grammar.test(key)),
  );

  const refs = collectReferences([
    ...unit.roots,
    ...Object.values(unit.schemas),
  ]);
  TestValidator.predicate(
    `${unit.label}: references emitted`,
    refs.length !== 0,
  );
  TestValidator.predicate(
    `${unit.label}: references resolve`,
    refs.every((ref) => resolveLocalReference(ref, unit.schemas)),
  );
  TestValidator.predicate(
    `${unit.label}: discriminator mappings emitted`,
    collectDiscriminatorMappings([
      ...unit.roots,
      ...Object.values(unit.schemas),
    ]).length !== 0,
  );
};

const collectReferences = (input: unknown): string[] => {
  const output: string[] = [];
  const visit = (value: unknown): void => {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (value === null || typeof value !== "object") return;
    const record = value as Record<string, unknown>;
    if (typeof record.$ref === "string") output.push(record.$ref);
    const discriminator = record.discriminator as
      | { mapping?: Record<string, string> }
      | undefined;
    if (discriminator?.mapping !== undefined)
      output.push(...Object.values(discriminator.mapping));
    Object.values(record).forEach(visit);
  };
  visit(input);
  return [...new Set(output)].sort();
};

const collectDiscriminatorMappings = (input: unknown): string[] => {
  const output: string[] = [];
  const visit = (value: unknown): void => {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (value === null || typeof value !== "object") return;
    const record = value as Record<string, unknown>;
    const discriminator = record.discriminator as
      | { mapping?: Record<string, string> }
      | undefined;
    if (discriminator?.mapping !== undefined)
      output.push(...Object.values(discriminator.mapping));
    Object.values(record).forEach(visit);
  };
  visit(input);
  return [...new Set(output)].sort();
};

const resolveLocalReference = (
  ref: string,
  schemas: Record<string, unknown>,
): boolean => {
  if (ref.startsWith("#/") === false || ref.indexOf("#", 1) !== -1)
    return false;
  let pointer: string;
  try {
    pointer = decodeURIComponent(ref.slice(1));
  } catch {
    return false;
  }
  const rawTokens = pointer.split("/");
  if (rawTokens[0] !== "" || rawTokens.length !== 4) return false;
  const tokens = rawTokens.slice(1).map(decodePointerToken);
  return (
    tokens.every((token) => token !== null) &&
    tokens[0] === "components" &&
    tokens[1] === "schemas" &&
    Object.prototype.hasOwnProperty.call(schemas, tokens[2]!)
  );
};

const decodePointerToken = (token: string): string | null =>
  /~(?:[^01]|$)/.test(token)
    ? null
    : token.replace(/~1/g, "/").replace(/~0/g, "~");

const componentNamesByValue = (
  schemas: Record<string, unknown>,
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(schemas).flatMap(([key, schema]) => {
      if (schema === null || typeof schema !== "object") return [];
      const properties = (schema as { properties?: Record<string, unknown> })
        .properties;
      const value = properties?.value;
      return value !== null &&
        typeof value === "object" &&
        Object.prototype.hasOwnProperty.call(value, "const")
        ? [[String((value as { const: unknown }).const), key]]
        : [];
    }),
  );

const sample: IForward = {
  qualified: { value: "qualified" },
  plain: { value: "Plain", children: [] },
  dot: { value: "A.B", children: [] },
  dash: { value: "A-B", children: [] },
  underscore: { value: "A_B", children: [] },
  slash: { value: "A/B", children: [] },
  escapedSlash: { value: "A_x2F_B", children: [] },
  tilde: { value: "T~N", children: [] },
  percent: { value: "C%D", children: [] },
  hash: { value: "A#B", children: [] },
  unicode: { value: "Café", children: [] },
  punctuation: { value: "/~%#", children: [] },
  empty: { value: "", children: [] },
  space: { value: "A B", children: [] },
  colon: { value: "A:B", children: [] },
  compact: { value: "AB", children: [] },
  alias: "A/B",
  array: ["A/B", ["A/B"]],
  variant: {
    kind: "café",
    payload: { value: "A/B", children: [] },
  },
  dollarNamed: { value: "$Named" },
  plainNamed: { value: "Named" },
  createdAt: "2026-07-16T00:00:00.000Z" as unknown as Date,
};
