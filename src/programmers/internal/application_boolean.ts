import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { IJsonSchema } from "../../module";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_boolean =
  (options: JsonApplicationProgrammer.IOptions) =>
  (atomic: MetadataAtomic) =>
  (attribute: IJsonSchema.IAttribute): IJsonSchema.IBoolean[] => {
    const base: IJsonSchema.IBoolean = {
      default: application_default(attribute)(
        (alias) => alias === "true" || alias === "false",
      )((str) => Boolean(str)),
      type: "boolean",
    };
    const defaultTags: IMetadataTypeTag[] = atomic.tags
      .filter((row) =>
        row.some((tag) => tag.kind === "default" || tag.schema !== undefined),
      )
      .map((row) =>
        row.filter((tag) => tag.kind === "default" || tag.schema !== undefined),
      )
      .flat();
    if (defaultTags.length === 0) return [base];
    return defaultTags.map((tag) => ({
      ...base,
      ...(tag.kind === "default"
        ? {
            default: tag.value,
          }
        : {}),
      ...(options.surplus
        ? {
            "x-typia-typeTags": defaultTags,
          }
        : {}),
      ...tag.schema,
    }));
  };
