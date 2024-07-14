import typia, { tags } from "typia";

export const test_issue_1161_clone_was_wrong = (): void => {
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
    typia.assert<IBbsGroup>(typia.misc.clone<any>(group));
  });
};

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
