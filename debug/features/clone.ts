import typia, { tags } from "typia";

import { $clone } from "typia/lib/functional/$clone";

interface IBbsGroup {
  id: string & tags.Format<"uuid">;
  code: string;
  name: string;
  articles: IBbsArticle[];
}
interface IBbsArticle {
  id: string & tags.Format<"uuid">;
  title: string;
  content: string;
  files: IAttachmentFile[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
interface IAttachmentFile {
  id: string & tags.Format<"uri">;
  name: string;
  extension: string | null;
  data: Uint8Array | DataView | Blob | File;
}

new Array(1_000).fill(null).forEach(() => {
  const group: IBbsGroup = {
    ...typia.random<IBbsGroup>(),
    articles: new Array(10).fill(null).map(() => ({
      ...typia.random<IBbsArticle>(),
      files: new Array(10)
        .fill(null)
        .map(() => typia.random<IAttachmentFile>()),
    })),
  };
  typia.assert<IBbsGroup>($clone(group));
});
