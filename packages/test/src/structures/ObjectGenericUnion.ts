import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectGenericUnion =
  IPointer<ObjectGenericUnion.ISaleEntireArticle>;
export namespace ObjectGenericUnion {
  export function generate(): ObjectGenericUnion {
    const question: ISaleQuestion = {
      id: "id",
      writer: "robot",
      contents: TestRandomGenerator.array(() => ({
        id: "id",
        title: TestRandomGenerator.string(),
        body: TestRandomGenerator.string(),
        files: TestRandomGenerator.array(() => ({
          name: TestRandomGenerator.string(),
          extension: TestRandomGenerator.string(),
          url: TestRandomGenerator.string(),
        })),
        created_at: new Date().toString(),
      })),
      answer: null,
      created_at: new Date().toString(),
      hit: 0,
    };
    return { value: question };
  }

  // ENTIRE ARTICLE
  export type ISaleEntireArticle = ISaleQuestion | ISaleReview;
  type ISaleQuestion = ISaleInquiry<ISaleQuestion.IContent>;
  namespace ISaleQuestion {
    export type IContent = ISaleInquiry.IContent;
  }
  type ISaleReview = ISaleInquiry<ISaleReview.IContent>;
  namespace ISaleReview {
    export interface IContent extends ISaleInquiry.IContent {
      score: number;
    }
  }

  // INQUIRY
  interface ISaleInquiry<Content extends ISaleInquiry.IContent>
    extends ISaleArticle<Content> {
    writer: string;
    answer: ISaleAnswer | null;
  }
  namespace ISaleInquiry {
    export type IContent = ISaleArticle.IContent;
  }
  type ISaleAnswer = ISaleArticle<ISaleAnswer.IContent>;
  namespace ISaleAnswer {
    export type IContent = ISaleArticle.IContent;
  }

  // BASE ARTICLE
  interface ISaleArticle<Content extends ISaleArticle.IContent> {
    id: string;
    hit: number;
    contents: Content[];
    created_at: string;
  }
  namespace ISaleArticle {
    export interface IContent extends IUpdate {
      id: string;
      created_at: string;
    }
    export interface IUpdate {
      title: string;
      body: string;
      files: IAttachmentFile[];
    }
  }

  // MISC
  export interface IAttachmentFile {
    name: string;
    extension: string | null;
    url: string;
  }

  export const SPOILERS: Spoiler<ObjectGenericUnion>[] = [
    (input) => {
      input.value.id = null!;
      return ["$input.value"];
    },
    (input) => {
      input.value.hit = undefined!;
      return ["$input.value"];
    },
    (input) => {
      input.value.answer = {} as any;
      return ["$input.value"];
    },
  ];
}
