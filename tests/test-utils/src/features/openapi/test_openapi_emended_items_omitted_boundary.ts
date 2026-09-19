import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import {
  HttpMigration,
  OpenApiConverter,
  OpenApiValidator,
} from "@typia/utils";

/**
 * Verifies an emended document is normalized once, on entry.
 *
 * The emended `IArray` type demands `items`, and the upgraders always emit it
 * (#2392). A document built by hand or parsed from JSON, however, reaches the
 * converters on its own claim of being emended, and every consumer reads the
 * type on its word: the downgraders collapsed an items-less array into `{}`
 * (#2404) and the validator accepted any value for it (#2407). Both were first
 * patched at every consumer's dispatch. The boundary owns the invariant now:
 * `upgradeDocument()` and `upgradeComponents()` normalize an already-emended
 * input, and no consumer checks for the shape (#2412).
 *
 * 1. Enter a hand-built emended document whose components, parameter, request
 *    body, response, and webhook each hold an items-less array.
 * 2. Assert every one of them gained `items: {}`, and a present `items` stayed.
 * 3. Assert the normalized document downgrades to every version with the open
 *    array intact, validates a non-array against it, and migrates.
 * 4. Assert `upgradeComponents()` normalizes emended components alike.
 */
export const test_openapi_emended_items_omitted_boundary = (): void => {
  const bare = { type: "array" } as unknown as OpenApi.IJsonSchema;
  const open: OpenApi.IJsonSchema = { type: "array", items: {} };
  const typed: OpenApi.IJsonSchema = {
    type: "array",
    items: { type: "string" },
  };
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument({
    openapi: "3.2.0",
    info: { title: "items omitted", version: "1.0.0" },
    components: {
      schemas: {
        ITags: {
          type: "object",
          properties: { tags: bare, names: typed },
          required: ["tags", "names"],
        },
      },
    },
    paths: {
      "/tags": {
        get: {
          parameters: [
            {
              name: "tags",
              in: "query",
              schema: bare,
              required: true,
              style: "pipeDelimited",
              explode: false,
            },
          ],
          responses: {
            200: {
              description: "ok",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ITags" },
                },
              },
            },
          },
        },
        post: {
          requestBody: { content: { "application/json": { schema: bare } } },
          responses: {
            200: {
              description: "ok",
              content: { "application/json": { schema: bare } },
            },
          },
        },
      },
    },
    webhooks: {
      w: {
        post: {
          requestBody: { content: { "application/json": { schema: bare } } },
          responses: {},
        },
      },
    },
    "x-typia-emended-v12": true,
  } as unknown as OpenApi.IDocument);

  const get = document.paths?.["/tags"]?.get;
  const post = document.paths?.["/tags"]?.post;
  TestEquality.equals(
    "entry normalization",
    {
      component: (
        document.components.schemas?.ITags as OpenApi.IJsonSchema.IObject
      ).properties,
      parameter: get?.parameters?.[0]?.schema,
      body: post?.requestBody?.content?.["application/json"]?.schema,
      response: post?.responses?.[200]?.content?.["application/json"]?.schema,
      webhook:
        document.webhooks?.w?.post?.requestBody?.content?.["application/json"]
          ?.schema,
    },
    {
      component: { tags: open, names: typed },
      parameter: open,
      body: open,
      response: open,
      webhook: open,
    },
  );

  const nested = (target: unknown): unknown =>
    (target as { properties?: Record<string, unknown> }).properties?.tags;
  TestEquality.equals(
    "downgrades keep the open array",
    {
      v20: nested(
        OpenApiConverter.downgradeDocument(document, "2.0").definitions?.ITags!,
      ),
      v30: nested(
        OpenApiConverter.downgradeDocument(document, "3.0").components?.schemas
          ?.ITags!,
      ),
      v31: nested(
        OpenApiConverter.downgradeDocument(document, "3.1").components?.schemas
          ?.ITags!,
      ),
    },
    { v20: open, v30: open, v31: open },
  );
  TestEquality.equals(
    "validator rejects a non-array",
    { success: false, paths: ["$input.tags"] },
    (() => {
      const result = OpenApiValidator.validate({
        components: document.components,
        schema: { $ref: "#/components/schemas/ITags" },
        value: { tags: "nope", names: [] },
        required: true,
      });
      return {
        success: result.success,
        paths: result.success ? [] : result.errors.map((e) => e.path),
      };
    })(),
  );
  const migrated = HttpMigration.application(document);
  TestEquality.equals(
    "pipeDelimited migration",
    { routes: 3, errors: [] as string[][] },
    {
      routes: migrated.routes.length,
      errors: migrated.errors.map((e) => e.messages),
    },
  );

  const components: OpenApi.IComponents = OpenApiConverter.upgradeComponents({
    schemas: { IBare: bare },
  } as OpenApi.IComponents);
  TestEquality.equals(
    "components normalization",
    components.schemas?.IBare,
    open,
  );
};
