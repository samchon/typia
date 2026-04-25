import typia, { OpenApi } from "typia";

export const isOpenApiJsonSchema = typia.createIs<OpenApi.IJsonSchema>();
