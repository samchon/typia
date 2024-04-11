import { OpenApi } from "@samchon/openapi";

import { MetadataConstant } from "../../schemas/metadata/MetadataConstant";

import { application_plugin } from "./application_plugin";

/**
 * @internal
 */
export const application_v31_constant = (
  constant: MetadataConstant,
): OpenApi.IJsonSchema.IConstant[] =>
  constant.values
    .map((value) =>
      application_plugin(
        {
          const: value.value as boolean | number | string,
        } satisfies OpenApi.IJsonSchema.IConstant,
        value.tags ?? [],
      ),
    )
    .flat();
