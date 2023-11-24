import { z } from "zod";

import { ArrayRecursiveUnionImplicit } from "../../structures/pure/ArrayRecursiveUnionImplicit";

const ImageFile = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  size: z.number(),
});

const TextFile = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string(),
  size: z.number(),
  content: z.string(),
});

const ZipFile = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string(),
  size: z.number(),
  count: z.number(),
});

const Shortcut: z.ZodType<ArrayRecursiveUnionImplicit.IShortcut> = z.lazy(() =>
  z.object({
    id: z.number(),
    name: z.string(),
    path: z.string(),
    target: Bucket,
  }),
);

const Directory: z.ZodType<ArrayRecursiveUnionImplicit.IDirectory> = z.lazy(
  () =>
    z.object({
      id: z.number(),
      name: z.string(),
      path: z.string(),
      children: z.array(Bucket),
    }),
);

const SharedDirectory: z.ZodType<ArrayRecursiveUnionImplicit.ISharedDirectory> =
  z.lazy(() =>
    z.object({
      id: z.number(),
      name: z.string(),
      path: z.string(),
      children: z.array(Bucket),
      access: z.union([z.literal("read"), z.literal("write")]),
    }),
  );

const Bucket: z.ZodType<ArrayRecursiveUnionImplicit.IBucket> = z.lazy(() =>
  z.union([ImageFile, TextFile, ZipFile, Shortcut, Directory, SharedDirectory]),
);

export const ZodArrayRecursiveUnionImplicit = z.lazy(() => z.array(Bucket));
