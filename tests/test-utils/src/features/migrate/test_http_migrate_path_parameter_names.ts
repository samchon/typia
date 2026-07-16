import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
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
  TestValidator.equals("missing path synthesized", [
    "userId",
    "postId",
  ], missing.routes[0]!.parameters.map((parameter) => parameter.name));
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

  for (const mode of ["duplicate", "wrong"] as const) {
    const app = HttpMigration.application(createDocument(mode));
    TestValidator.equals(`${mode} route omitted`, 0, app.routes.length);
    TestValidator.equals(`${mode} error`, true, app.errors.length === 1);
  }
};

const createDocument = (
  mode: "ordered" | "reversed" | "missing" | "duplicate" | "wrong" | "repeated",
): OpenApi.IDocument => {
  const user: OpenApi.IOperation.IParameter = {
    name: "userId",
    in: "path",
    required: true,
    description: "USER ID",
    schema: { type: "string" },
  };
  const post: OpenApi.IOperation.IParameter = {
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
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    info: { title: "Path parameters", version: "1.0.0" },
    components: { schemas: {} },
    paths: {
      [path]: {
        get: { parameters, responses: { "200": { description: "OK" } } },
      },
    },
  };
};
