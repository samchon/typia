import { TestValidator } from "@nestia/e2e";
import { OpenApiV3, OpenApiV3_1, OpenApiV3_2 } from "@typia/interface";
import { HttpMigration } from "@typia/utils";

/**
 * Verifies path placeholders join OpenAPI parameters by name.
 *
 * Positional association silently cross-wired schemas when a valid OpenAPI
 * operation declared path parameters in a different order than its template.
 *
 * 1. Compose ordered, reversed, missing, duplicate, and wrong-name declarations.
 * 2. Compare the resulting placeholder schemas and synthesized parameter.
 * 3. Require deterministic errors for duplicate and incompatible name sets.
 */
export const test_http_migrate_path_parameter_names = (): void => {
  const ordered = HttpMigration.application(createDocument("ordered"));
  const reversed = HttpMigration.application(createDocument("reversed"));
  TestValidator.equals(
    "reversed route schemas",
    ordered.routes[0]!.parameters.map((parameter) => ({
      name: parameter.name,
      schema: parameter.schema,
      description: parameter.parameter().description,
    })),
    reversed.routes[0]!.parameters.map((parameter) => ({
      name: parameter.name,
      schema: parameter.schema,
      description: parameter.parameter().description,
    })),
  );

  const missing = HttpMigration.application(createDocument("missing"));
  TestValidator.equals(
    "missing path synthesized",
    ["userId", "postId"],
    missing.routes[0]!.parameters.map((parameter) => parameter.name),
  );
  TestValidator.equals(
    "synthesized schema",
    { type: "string" },
    missing.routes[0]!.parameters[1]!.schema as { type: string },
  );

  const repeated = HttpMigration.application(createDocument("repeated"));
  TestValidator.equals(
    "repeated placeholder shares one argument",
    ["userId"],
    repeated.routes[0]!.parameters.map((parameter) => parameter.name),
  );

  const wrong = HttpMigration.application(createDocument("wrong"));
  TestValidator.equals("wrong route omitted", 0, wrong.routes.length);
  TestValidator.equals("wrong error", true, wrong.errors.length === 1);

  const duplicate = createDocument("duplicate");
  const duplicateVersions = [
    { ...duplicate, openapi: "3.0.3" } as OpenApiV3.IDocument,
    duplicate,
    { ...duplicate, openapi: "3.2.0" } as OpenApiV3_2.IDocument,
  ];
  duplicateVersions.forEach((document) => {
    const app = HttpMigration.application(document);
    TestValidator.equals(
      `${document.openapi} duplicate route omitted`,
      0,
      app.routes.length,
    );
    TestValidator.equals(
      `${document.openapi} duplicate diagnostic`,
      ["path parameter names must be unique: userId"],
      app.errors[0]?.messages,
    );
  });
};

const createDocument = (
  mode: "ordered" | "reversed" | "missing" | "duplicate" | "wrong" | "repeated",
): OpenApiV3_1.IDocument => {
  const user: OpenApiV3_1.IOperation.IParameter = {
    name: "userId",
    in: "path",
    required: true,
    description: "USER ID",
    schema: { type: "string" },
  };
  const post: OpenApiV3_1.IOperation.IParameter = {
    name: mode === "wrong" ? "articleId" : "postId",
    in: "path",
    required: true,
    description: "POST ID",
    schema: { type: "integer" },
  };
  const parameters =
    mode === "ordered"
      ? [user, post]
      : mode === "reversed"
        ? [post, user]
        : mode === "missing" || mode === "repeated"
          ? [user]
          : mode === "duplicate"
            ? [user, { ...user }]
            : [user, post];
  const path =
    mode === "repeated"
      ? "/users/{userId}/friends/{userId}"
      : "/users/{userId}/posts/{postId}";
  return {
    openapi: "3.1.0",
    info: { title: "Path parameters", version: "1.0.0" },
    components: { schemas: {} },
    paths: {
      [path]: {
        get: { parameters, responses: { "200": { description: "OK" } } },
      },
    },
  };
};
