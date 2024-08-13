import { OpenApi } from "@samchon/openapi";

import { MetadataConstant } from "../../schemas/metadata/MetadataConstant";

import { application_description } from "./application_description";
import { application_plugin } from "./application_plugin";
import { application_title } from "./application_title";

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
          const:
            typeof value.value === "bigint"
              ? Number(value.value)
              : (value.value as boolean | number | string),
          title: application_title(value),
          description: application_description(value),
        } satisfies OpenApi.IJsonSchema.IConstant,
        value.tags ?? [],
      ),
    )
    .flat();
