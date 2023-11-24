import { z } from "zod";

import { ArrayRecursiveUnionExplicit } from "../../structures/pure/ArrayRecursiveUnionExplicit";

const ImageFile = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  size: z.number(),
  type: z.literal("file"),
  extension: z.literal("jpg"),
});

const TextFile = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string(),
  size: z.number(),
  content: z.string(),
  type: z.literal("file"),
  extension: z.literal("txt"),
});

const ZipFile = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string(),
  size: z.number(),
  count: z.number(),
  type: z.literal("file"),
  extension: z.literal("zip"),
});

const Shortcut: z.ZodType<ArrayRecursiveUnionExplicit.IShortcut> = z.lazy(() =>
  z.object({
    id: z.number(),
    name: z.string(),
    path: z.string(),
    target: Bucket,
    type: z.literal("file"),
    extension: z.literal("lnk"),
  }),
);

const Directory: z.ZodType<ArrayRecursiveUnionExplicit.IDirectory> = z.lazy(
  () =>
    z.object({
      id: z.number(),
      name: z.string(),
      path: z.string(),
      children: z.array(Bucket),
      type: z.literal("directory"),
    }),
);

const Bucket: z.ZodType<ArrayRecursiveUnionExplicit.IBucket> = z.lazy(() =>
  z.union([ImageFile, TextFile, ZipFile, Shortcut, Directory]),
);

export const ZodArrayRecursiveUnionExplicit = z.lazy(() => z.array(Bucket));
