import { OpenApi, OpenApiV3, OpenApiV3_1, SwaggerV2 } from "@typia/interface";

import { OpenApiV3Downgrader } from "./internal/OpenApiV3Downgrader";
import { OpenApiV3Upgrader } from "./internal/OpenApiV3Upgrader";
import { OpenApiV3_1Upgrader } from "./internal/OpenApiV3_1Upgrader";
import { SwaggerV2Downgrader } from "./internal/SwaggerV2Downgrader";
import { SwaggerV2Upgrader } from "./internal/SwaggerV2Upgrader";

export namespace OpenApiConverter {
  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
  export function upgradeDocument(
    document:
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument
      | OpenApi.IDocument,
  ): OpenApi.IDocument {
    if (isUpgraded(document)) return document;
    else if (is_v31(document)) return OpenApiV3_1Upgrader.convert(document);
    else if (is_v30(document)) return OpenApiV3Upgrader.convert(document);
    else if (is_v20(document)) return SwaggerV2Upgrader.convert(document);
    document satisfies never;
    throw new Error("Invalid OpenAPI document");
  }

  export function downgradeDocument(
    document: OpenApi.IDocument,
    version: "2.0",
  ): SwaggerV2.IDocument;

  export function downgradeDocument(
    document: OpenApi.IDocument,
    version: "3.0",
  ): OpenApiV3.IDocument;

  /** @internal */
  export function downgradeDocument(
    document: OpenApi.IDocument,
    version: "2.0" | "3.0",
  ): SwaggerV2.IDocument | OpenApiV3.IDocument {
    if (version === "2.0") return SwaggerV2Downgrader.downgrade(document);
    else if (version === "3.0") return OpenApiV3Downgrader.downgrade(document);
    version satisfies never;
    throw new Error("Invalid OpenAPI version");
  }

  /* -----------------------------------------------------------
    COMPONENTS
  ----------------------------------------------------------- */
  export function upgradeComponents(
    input:
      | OpenApiV3_1.IComponents
      | OpenApiV3.IComponents
      | SwaggerV2.IDocument,
  ): OpenApi.IComponents {
    if (is_v20(input)) return SwaggerV2Upgrader.convertComponents(input);
    return OpenApiV3_1Upgrader.convertComponents(input);
  }

  export function downgradeComponents(
    input: OpenApi.IComponents,
    version: "2.0",
  ): Record<string, SwaggerV2.IJsonSchema>;

  export function downgradeComponents(
    input: OpenApi.IComponents,
    version: "3.0",
  ): OpenApiV3.IComponents;

  /** @internal */
  export function downgradeComponents(
    input: OpenApi.IComponents,
    version: "2.0" | "3.0",
  ): Record<string, SwaggerV2.IJsonSchema> | OpenApiV3.IComponents {
    if (version === "2.0")
      return SwaggerV2Downgrader.downgradeComponents(input).downgraded;
    return OpenApiV3Downgrader.downgradeComponents(input).downgraded;
  }

  /* -----------------------------------------------------------
    SCHEMAS
  ----------------------------------------------------------- */
  export function upgradeSchema(props: {
    definitions: Record<string, SwaggerV2.IJsonSchema>;
    schema: SwaggerV2.IJsonSchema;
  }): OpenApi.IJsonSchema;

  export function upgradeSchema(props: {
    components: OpenApiV3.IComponents;
    schema: OpenApiV3.IJsonSchema;
  }): OpenApi.IJsonSchema;

  export function upgradeSchema(props: {
    components: OpenApiV3_1.IComponents;
    schema: OpenApiV3_1.IJsonSchema;
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
        },
  ): OpenApi.IJsonSchema {
    if ("definitions" in props)
      return SwaggerV2Upgrader.convertSchema(props.definitions)(props.schema);
    return OpenApiV3_1Upgrader.convertSchema(props.components)(props.schema);
  }

  export function downgradeSchema(props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    version: "2.0";
    downgraded: Record<string, SwaggerV2.IJsonSchema>;
  }): SwaggerV2.IJsonSchema;

  export function downgradeSchema(props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    version: "3.0";
    downgraded: OpenApiV3.IComponents;
  }): OpenApiV3.IJsonSchema;

  /** @internal */
  export function downgradeSchema<Version extends "2.0" | "3.0">(props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    version: Version;
    downgraded: Version extends "2.0"
      ? Record<string, SwaggerV2.IJsonSchema>
      : OpenApiV3.IComponents;
  }): OpenApiV3.IJsonSchema | SwaggerV2.IJsonSchema {
    if (props.version === "2.0")
      return SwaggerV2Downgrader.downgradeSchema({
        original: props.components,
        downgraded: props.downgraded as Record<string, SwaggerV2.IJsonSchema>,
      })(props.schema);
    return OpenApiV3Downgrader.downgradeSchema({
      original: props.components,
      downgraded: props.downgraded,
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

const isUpgraded = (input: unknown): input is OpenApi.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "openapi" in input &&
  typeof input.openapi === "string" &&
  input.openapi.startsWith("3.1") &&
  (input as OpenApi.IDocument)["x-samchon-emended-v4"] === true;
