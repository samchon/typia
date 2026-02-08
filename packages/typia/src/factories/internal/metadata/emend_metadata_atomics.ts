import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../../schemas/metadata/MetadataAtomic";

import { ArrayUtil } from "../../../utils/ArrayUtil";

export const emend_metadata_atomics = (meta: Metadata) => {
  // ATOMICS
  for (const a of meta.atomics) {
    if (is_not_pure(a)) continue;
    const index: number = meta.constants.findIndex((c) => c.type === a.type);
    if (index !== -1) meta.constants.splice(index, 1);
  }

  // BOOLEAN
  {
    const index: number = meta.constants.findIndex((c) => c.type === "boolean");
    if (index !== -1 && meta.constants[index]!.values.length === 2) {
      const temp = meta.constants.splice(index, 1)[0]!;
      ArrayUtil.take(
        meta.atomics,
        (a) => a.type === "boolean",
        () =>
          MetadataAtomic.create({
            type: "boolean" as const,
            tags: temp.values[0]!.tags ?? [],
          }),
      );
    }
  }

  // TEMPLATE
  if (meta.templates.length) {
    const atomic: MetadataAtomic | undefined = meta.atomics.find(
      (a) => a.type === "string",
    );
    if (atomic !== undefined && false === is_not_pure(atomic))
      meta.templates.splice(0, meta.templates.length);
  }
};

const is_not_pure = (atomic: MetadataAtomic): boolean =>
  atomic.tags.length !== 0 &&
  atomic.tags.every(
    (row) => row.length !== 0 && row.every((c) => !!c.validate?.length),
  );
