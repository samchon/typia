import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_boolean =
  (atomic: MetadataAtomic) =>
  (attribute: IJsonSchema.IAttribute): IJsonSchema.IBoolean[] => {
    const base: IJsonSchema.IBoolean = {
      ...attribute,
      default: application_default(attribute)(
        (alias) => alias === "true" || alias === "false",
      )((str) => Boolean(str)),
      type: "boolean",
    };
    const defaultTags: IMetadataTypeTag[] = atomic.tags
      .filter((row) => row.some((tag) => tag.kind === "default"))
      .map((row) => row.filter((tag) => tag.kind === "default"))
      .flat();
    if (defaultTags.length === 0) return [base];
    return defaultTags.map((tag) => ({
      ...base,
      default: tag.value,
      "x-typia-typeTags": defaultTags,
    }));
  };
