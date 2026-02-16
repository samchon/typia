import { OpenApi, OpenApiV3, OpenApiV3_1, SwaggerV2 } from "@typia/interface";

import { OpenApiV3Downgrader } from "./internal/OpenApiV3Downgrader";
import { OpenApiV3Upgrader } from "./internal/OpenApiV3Upgrader";
import { OpenApiV3_1Emender } from "./internal/OpenApiV3_1Emender";
import { SwaggerV2Downgrader } from "./internal/SwaggerV2Downgrader";
import { SwaggerV2Upgrader } from "./internal/SwaggerV2Upgrader";

export namespace OpenApiConverter {
  export function upgrade(
    document: SwaggerV2.IDocument | OpenApiV3.IDocument | OpenApiV3_1.IDocument,
  ): OpenApi.IDocument {
    if (isV2(document)) return SwaggerV2Upgrader.convert(document);
    else if (isV3(document)) return OpenApiV3Upgrader.convert(document);
    else if (isV3_1(document)) return OpenApiV3_1Emender.convert(document);
    document satisfies never;
    throw new Error("Invalid OpenAPI document");
  }

  export function downgrade(
    document: OpenApi.IDocument,
    version: "2.0",
  ): SwaggerV2.IDocument;

  export function downgrade(
    document: OpenApi.IDocument,
    version: "3.0",
  ): OpenApiV3.IDocument;

  export function downgrade(
    document: OpenApi.IDocument,
    version: "2.0" | "3.0",
  ): SwaggerV2.IDocument | OpenApiV3.IDocument {
    if (version === "2.0") return SwaggerV2Downgrader.downgrade(document);
    else if (version === "3.0") return OpenApiV3Downgrader.downgrade(document);
    version satisfies never;
    throw new Error("Invalid OpenAPI version");
  }
}

const isV2 = (input: unknown): input is SwaggerV2.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "swagger" in input &&
  typeof input.swagger === "string" &&
  input.swagger.startsWith("2.0");

const isV3 = (input: unknown): input is OpenApiV3.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "openapi" in input &&
  typeof input.openapi === "string" &&
  input.openapi.startsWith("3.0");

const isV3_1 = (input: unknown): input is OpenApiV3_1.IDocument =>
  typeof input === "object" &&
  input !== null &&
  "openapi" in input &&
  typeof input.openapi === "string" &&
  input.openapi.startsWith("3.1");
