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
export const test_http_migrate_path_parameter_names =
  async (): Promise<void> => {
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

    const embedded = HttpMigration.application(embeddedDocument);
    TestValidator.equals("embedded errors", 0, embedded.errors.length);
    TestValidator.equals(
      "embedded parameter names",
      [["name", "ext"], ["id"], ["coords!"]],
      embedded.routes.map((route) =>
        route.parameters.map((parameter) => parameter.name),
      ),
    );
    TestValidator.equals(
      "embedded emended paths",
      ["/files/:name.:ext", "/prefix-:id", "/matrix/:coords!"],
      embedded.routes.map((route) => route.emendedPath),
    );
    TestValidator.equals(
      "embedded accessors",
      [
        ["files", "getByNameAndExt"],
        ["prefix_", "getById"],
        ["matrix", "getByCoords_"],
      ],
      embedded.routes.map((route) => route.accessor),
    );

    const requests: URL[] = [];
    const connection = {
      host: "https://example.com",
      fetch: (async (input: string | URL | Request) => {
        requests.push(new URL(String(input)));
        return new Response(null, { status: 204 });
      }) as typeof fetch,
    };
    await HttpMigration.execute({
      connection,
      route: embedded.routes[0]!,
      parameters: { name: "report!", ext: "json" },
    });
    await HttpMigration.execute({
      connection,
      route: embedded.routes[1]!,
      parameters: { id: 7 },
    });
    const matrix = embedded.routes[2]!;
    TestValidator.equals(
      "special parameter key",
      "coords_",
      matrix.parameters[0]?.key,
    );
    await HttpMigration.execute({
      connection,
      route: matrix,
      parameters: { [matrix.parameters[0]!.key]: "a!" },
    });
    TestValidator.equals(
      "embedded request paths",
      ["/files/report%21.json", "/prefix-7", "/matrix/;coords%21=a%21"],
      requests.map((url) => url.pathname),
    );
  };

const embeddedDocument: OpenApiV3_1.IDocument = {
  openapi: "3.1.0",
  info: { title: "Embedded path parameters", version: "1.0.0" },
  components: { schemas: {} },
  paths: {
    "/files/{name}.{ext}": {
      get: {
        parameters: [
          {
            name: "ext",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "name",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/prefix-{id}": {
      get: {
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
    "/matrix/{coords!}": {
      get: {
        parameters: [
          {
            name: "coords!",
            in: "path",
            required: true,
            style: "matrix",
            schema: { type: "string" },
          },
        ],
        responses: { "204": { description: "No Content" } },
      },
    },
  },
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
