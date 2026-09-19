import {
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  OpenApiV3_2,
  SwaggerV2,
} from "@typia/interface";

import { OpenApiSchemaSanitizer } from "../utils/internal/OpenApiSchemaSanitizer";
import { OpenApiV3Downgrader } from "./internal/OpenApiV3Downgrader";
import { OpenApiV3Upgrader } from "./internal/OpenApiV3Upgrader";
import { OpenApiV3_1Downgrader } from "./internal/OpenApiV3_1Downgrader";
import { OpenApiV3_1Upgrader } from "./internal/OpenApiV3_1Upgrader";
import { OpenApiV3_2Upgrader } from "./internal/OpenApiV3_2Upgrader";
import { SwaggerV2Downgrader } from "./internal/SwaggerV2Downgrader";
import { SwaggerV2Upgrader } from "./internal/SwaggerV2Upgrader";

/**
 * OpenAPI version converter.
 *
 * `OpenApiConverter` converts between different OpenAPI specification versions:
 * Swagger v2.0, OpenAPI v3.0, OpenAPI v3.1, OpenAPI v3.2, and typia's emended
 * {@link OpenApi} format. Also converts individual components (schemas,
 * operations, paths).
 *
 * Upgrade path (to emended v3.2):
 *
 * - Swagger v2.0 → emended v3.2
 * - OpenAPI v3.0 → emended v3.2
 * - OpenAPI v3.1 → emended v3.2
 * - OpenAPI v3.2 → emended v3.2
 *
 * Downgrade path (from emended v3.2):
 *
 * - Emended v3.2 → Swagger v2.0
 * - Emended v3.2 → OpenAPI v3.0
 * - Emended v3.2 → OpenAPI v3.1
 *
 * The emended format normalizes ambiguous expressions: dereferences `$ref`,
 * merges `allOf`, converts `nullable` to union types, etc.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace OpenApiConverter {
  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
  /**
   * Upgrade document to typia's emended OpenAPI v3.2 format.
   *
   * A document already marked emended is normalized rather than converted: an
   * upgrader emits every emended shape exactly, but a document built by hand or
   * parsed from JSON may leave an array's `items` out, and every consumer reads
   * the emended type on its word.
   *
   * @param document Source document (Swagger v2.0, OpenAPI v3.0/v3.1/v3.2)
   * @returns Emended OpenAPI v3.2 document
   */
  export function upgradeDocument(
    document:
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument
      | OpenApiV3_2.IDocument
      | OpenApi.IDocument,
  ): OpenApi.IDocument {
    if (isUpgraded(document)) return normalizeDocument(document);
    else if (is_v32(document)) return OpenApiV3_2Upgrader.convert(document);
    else if (is_v31(document)) return OpenApiV3_1Upgrader.convert(document);
    else if (is_v30(document)) return OpenApiV3Upgrader.convert(document);
    else if (is_v20(document)) return SwaggerV2Upgrader.convert(document);
    document satisfies never;
    throw new Error("Invalid OpenAPI document");
  }

  /**
   * Downgrade document to Swagger v2.0 format.
   *
   * The document is normalized on entry, as {@link upgradeDocument} normalizes
   * an already-emended one.
   *
   * @param document Source emended OpenAPI document
   * @param version Target version "2.0"
   * @returns Swagger v2.0 document
   */
  export function downgradeDocument(
    document: OpenApi.IDocument,
    version: "2.0",
  ): SwaggerV2.IDocument;

  /**
   * Downgrade document to OpenAPI v3.0 format.
   *
   * @param document Source emended OpenAPI document
   * @param version Target version "3.0"
   * @returns OpenAPI v3.0 document
   */
  export function downgradeDocument(
    document: OpenApi.IDocument,
    version: "3.0",
  ): OpenApiV3.IDocument;

  export function downgradeDocument(
    document: OpenApi.IDocument,
    version: "3.1",
  ): OpenApiV3_1.IDocument;

  /** @internal */
  export function downgradeDocument(
    document: OpenApi.IDocument,
    version: "2.0" | "3.0" | "3.1",
  ): SwaggerV2.IDocument | OpenApiV3.IDocument | OpenApiV3_1.IDocument {
    // the document boundary in the other direction normalizes alike
    const input: OpenApi.IDocument = normalizeDocument(document);
    if (version === "2.0") return SwaggerV2Downgrader.downgrade(input);
    else if (version === "3.0") return OpenApiV3Downgrader.downgrade(input);
    else if (version === "3.1") return OpenApiV3_1Downgrader.downgrade(input);

    version satisfies never;
    throw new Error("Invalid OpenAPI version");
  }

  /* -----------------------------------------------------------
    COMPONENTS
  ----------------------------------------------------------- */
  /**
   * Upgrade components to typia's emended format.
   *
   * @param input Source components (Swagger v2.0, OpenAPI v3.0/v3.1/v3.2)
   * @returns Emended OpenAPI components
   */
  export function upgradeComponents(
    input:
      | OpenApiV3_2.IComponents
      | OpenApiV3_1.IComponents
      | OpenApiV3.IComponents
      | SwaggerV2.IDocument
      | OpenApi.IComponents,
  ): OpenApi.IComponents {
    if (is_v20(input)) return SwaggerV2Upgrader.convertComponents(input);
    // every 3.x components shape converts through the 3.1 upgrader, which also
    // normalizes an emended input; see upgradeDocument
    return normalizeComponents(
      OpenApiV3_1Upgrader.convertComponents(input as any),
    );
  }

  /**
   * Downgrade components to Swagger v2.0 definitions.
   *
   * @param input Source emended components, as `upgradeDocument()` or
   *   `upgradeComponents()` returns them
   * @param version Target version "2.0"
   * @returns Swagger v2.0 definitions record
   */
  export function downgradeComponents(
    input: OpenApi.IComponents,
    version: "2.0",
  ): Record<string, SwaggerV2.IJsonSchema>;

  /**
   * Downgrade components to OpenAPI v3.0 format.
   *
   * @param input Source emended components, as `upgradeDocument()` or
   *   `upgradeComponents()` returns them
   * @param version Target version "3.0"
   * @returns OpenAPI v3.0 components
   */
  export function downgradeComponents(
    input: OpenApi.IComponents,
    version: "3.0",
  ): OpenApiV3.IComponents;

  /**
   * Downgrade components to OpenAPI v3.1 format.
   *
   * @param input Source emended components, as `upgradeDocument()` or
   *   `upgradeComponents()` returns them
   * @param version Target version "3.1"
   * @returns OpenAPI v3.1 components
   */
  export function downgradeComponents(
    input: OpenApi.IComponents,
    version: "3.1",
  ): OpenApiV3_1.IComponents;

  /** @internal */
  export function downgradeComponents(
    input: OpenApi.IComponents,
    version: "2.0" | "3.0" | "3.1",
  ):
    | Record<string, SwaggerV2.IJsonSchema>
    | OpenApiV3.IComponents
    | OpenApiV3_1.IComponents {
    if (version === "2.0")
      return SwaggerV2Downgrader.downgradeComponents(input).downgraded;
    if (version === "3.1")
      return OpenApiV3_1Downgrader.downgradeComponents(input).downgraded;
    return OpenApiV3Downgrader.downgradeComponents(input).downgraded;
  }

  /* -----------------------------------------------------------
    SCHEMAS
  ----------------------------------------------------------- */
  /**
   * Upgrade Swagger v2.0 schema to emended format.
   *
   * @param props.definitions Swagger v2.0 definitions
   * @param props.schema Schema to upgrade
   * @returns Emended JSON schema
   */
  export function upgradeSchema(props: {
    definitions: Record<string, SwaggerV2.IJsonSchema>;
    schema: SwaggerV2.IJsonSchema;
  }): OpenApi.IJsonSchema;

  /**
   * Upgrade OpenAPI v3.0 schema to emended format.
   *
   * @param props.components OpenAPI v3.0 components
   * @param props.schema Schema to upgrade
   * @returns Emended JSON schema
   */
  export function upgradeSchema(props: {
    components: OpenApiV3.IComponents;
    schema: OpenApiV3.IJsonSchema;
  }): OpenApi.IJsonSchema;

  /**
   * Upgrade OpenAPI v3.1 schema to emended format.
   *
   * @param props.components OpenAPI v3.1 components
   * @param props.schema Schema to upgrade
   * @returns Emended JSON schema
   */
  export function upgradeSchema(props: {
    components: OpenApiV3_1.IComponents;
    schema: OpenApiV3_1.IJsonSchema;
  }): OpenApi.IJsonSchema;

  /**
   * Upgrade OpenAPI v3.2 schema to emended format.
   *
   * @param props.components OpenAPI v3.2 components
   * @param props.schema Schema to upgrade
   * @returns Emended JSON schema
   */
  export function upgradeSchema(props: {
    components: OpenApiV3_2.IComponents;
    schema: OpenApiV3_2.IJsonSchema;
  }): OpenApi.IJsonSchema;

  /** @internal */
  export function upgradeSchema(
    props:
      | {
          definitions: Record<string, SwaggerV2.IJsonSchema>;
          schema: SwaggerV2.IJsonSchema;
        }
      | {
          components: OpenApiV3.IComponents;
          schema: OpenApiV3.IJsonSchema;
        }
      | {
          components: OpenApiV3_1.IComponents;
          schema: OpenApiV3_1.IJsonSchema;
        }
      | {
          components: OpenApiV3_2.IComponents;
          schema: OpenApiV3_2.IJsonSchema;
        },
  ): OpenApi.IJsonSchema {
    if ("definitions" in props)
      return SwaggerV2Upgrader.convertSchema(props.definitions)(props.schema);
    return OpenApiV3_1Upgrader.convertSchema(props.components as any)(
      props.schema as any,
    );
  }

  /**
   * Downgrade schema to Swagger v2.0 format.
   *
   * @param props.components Source emended components, as `upgradeDocument()`
   *   or `upgradeComponents()` returns them
   * @param props.schema Schema to downgrade
   * @param props.version Target version "2.0"
   * @param props.downgraded Target definitions record (mutated)
   * @returns Swagger v2.0 schema
   */
  export function downgradeSchema(props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    version: "2.0";
    downgraded: Record<string, SwaggerV2.IJsonSchema>;
  }): SwaggerV2.IJsonSchema;

  /**
   * Downgrade schema to OpenAPI v3.0 format.
   *
   * @param props.components Source emended components, as `upgradeDocument()`
   *   or `upgradeComponents()` returns them
   * @param props.schema Schema to downgrade
   * @param props.version Target version "3.0"
   * @param props.downgraded Target components (mutated)
   * @returns OpenAPI v3.0 schema
   */
  export function downgradeSchema(props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    version: "3.0";
    downgraded: OpenApiV3.IComponents;
  }): OpenApiV3.IJsonSchema;

  /**
   * Downgrade schema to OpenAPI v3.1 format.
   *
   * @param props.components Source emended components, as `upgradeDocument()`
   *   or `upgradeComponents()` returns them
   * @param props.schema Schema to downgrade
   * @param props.version Target version "3.1"
   * @param props.downgraded Target components (mutated)
   * @returns OpenAPI v3.1 schema
   */
  export function downgradeSchema(props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    version: "3.1";
    downgraded: OpenApiV3_1.IComponents;
  }): OpenApiV3_1.IJsonSchema;

  /** @internal */
  export function downgradeSchema<
    Version extends "2.0" | "3.0" | "3.1",
  >(props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    version: Version;
    downgraded: Version extends "2.0"
      ? Record<string, SwaggerV2.IJsonSchema>
      : Version extends "3.1"
        ? OpenApiV3_1.IComponents
        : OpenApiV3.IComponents;
  }): OpenApiV3.IJsonSchema | OpenApiV3_1.IJsonSchema | SwaggerV2.IJsonSchema {
    if (props.version === "2.0")
      return SwaggerV2Downgrader.downgradeSchema({
        original: props.components,
        downgraded: props.downgraded as Record<string, SwaggerV2.IJsonSchema>,
      })(props.schema);
    if (props.version === "3.1")
      return OpenApiV3_1Downgrader.downgradeSchema({
        original: props.components,
        downgraded: props.downgraded as OpenApiV3_1.IComponents,
      })(props.schema);
    return OpenApiV3Downgrader.downgradeSchema({
      original: props.components,
      downgraded: props.downgraded as OpenApiV3.IComponents,
    })(props.schema);
  }
}

const is_v20 = (input: unknown): input is SwaggerV2.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "swagger" in input &&
  typeof input.swagger === "string" &&
  input.swagger.startsWith("2.0");

const is_v30 = (input: unknown): input is OpenApiV3.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "openapi" in input &&
  typeof input.openapi === "string" &&
  input.openapi.startsWith("3.0");

const is_v31 = (input: unknown): input is OpenApiV3_1.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "openapi" in input &&
  typeof input.openapi === "string" &&
  input.openapi.startsWith("3.1");

const is_v32 = (input: unknown): input is OpenApiV3_2.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "openapi" in input &&
  typeof input.openapi === "string" &&
  input.openapi.startsWith("3.2");

const isUpgraded = (input: unknown): input is OpenApi.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "openapi" in input &&
  typeof input.openapi === "string" &&
  input.openapi.startsWith("3.2") &&
  (input as OpenApi.IDocument)["x-typia-emended-v12"] === true;

/**
 * Normalizes every schema an emended document holds; see the sanitizer.
 *
 * A holder the document leaves out stays out, so the normalized document has no
 * key the input did not have.
 */
const normalizeDocument = (document: OpenApi.IDocument): OpenApi.IDocument => ({
  ...document,
  components: normalizeComponents(document.components),
  ...(document.paths
    ? { paths: mapValues(document.paths, normalizePathItem) }
    : {}),
  ...(document.webhooks
    ? { webhooks: mapValues(document.webhooks, normalizePathItem) }
    : {}),
});

const normalizeComponents = (
  components: OpenApi.IComponents,
): OpenApi.IComponents => ({
  ...components,
  ...(components.schemas
    ? {
        schemas: mapValues(
          components.schemas,
          OpenApiSchemaSanitizer.fillOpenArrayDeep,
        ),
      }
    : {}),
});

const normalizePathItem = (item: OpenApi.IPath): OpenApi.IPath => {
  const output: OpenApi.IPath = { ...item };
  for (const method of METHODS) {
    const operation: OpenApi.IOperation | undefined = item[method];
    if (operation !== undefined) output[method] = normalizeOperation(operation);
  }
  if (item.additionalOperations)
    output.additionalOperations = mapValues(
      item.additionalOperations,
      normalizeOperation,
    );
  return output;
};

const normalizeOperation = (
  operation: OpenApi.IOperation,
): OpenApi.IOperation => ({
  ...operation,
  ...(operation.parameters
    ? { parameters: operation.parameters.map(normalizeParameter) }
    : {}),
  ...(operation.requestBody
    ? { requestBody: normalizeBody(operation.requestBody) }
    : {}),
  ...(operation.responses
    ? { responses: mapValues(operation.responses, normalizeResponse) }
    : {}),
});

const normalizeParameter = (
  parameter: OpenApi.IOperation.IParameter,
): OpenApi.IOperation.IParameter => ({
  ...parameter,
  schema: OpenApiSchemaSanitizer.fillOpenArrayDeep(parameter.schema),
});

const normalizeResponse = (
  response: OpenApi.IOperation.IResponse,
): OpenApi.IOperation.IResponse => ({
  ...normalizeBody(response),
  ...(response.headers
    ? { headers: mapValues(response.headers, normalizeParameter) }
    : {}),
});

const normalizeBody = <
  Body extends { content?: OpenApi.IOperation.IContent | undefined },
>(
  body: Body,
): Body =>
  body.content
    ? {
        ...body,
        content: mapValues(body.content, normalizeMediaType),
      }
    : body;

const normalizeMediaType = (
  media: OpenApi.IOperation.IMediaType,
): OpenApi.IOperation.IMediaType => ({
  ...media,
  ...(media.schema
    ? { schema: OpenApiSchemaSanitizer.fillOpenArrayDeep(media.schema) }
    : {}),
  ...(media.itemSchema
    ? { itemSchema: OpenApiSchemaSanitizer.fillOpenArrayDeep(media.itemSchema) }
    : {}),
});

/**
 * A copy of the record with `map` applied to every value.
 *
 * A document may hold an absent value where the type promises one; it is left
 * for the reader to judge, as the sanitizer leaves an absent schema.
 */
const mapValues = <Record_ extends Record<string, unknown>>(
  record: Record_,
  map: (
    value: Exclude<Record_[keyof Record_], undefined>,
  ) => Exclude<Record_[keyof Record_], undefined>,
): Record_ =>
  Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      value === undefined
        ? value
        : map(value as Exclude<Record_[keyof Record_], undefined>),
    ]),
  ) as Record_;

const METHODS = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "options",
  "head",
  "trace",
  "query",
] as const;
