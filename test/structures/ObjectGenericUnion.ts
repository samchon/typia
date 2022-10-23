import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ObjectGenericUnion = ObjectGenericUnion.ISaleEntireArticle;
export namespace ObjectGenericUnion {
    export function generate(): ObjectGenericUnion {
        const question: ISaleQuestion = {
            id: "id",
            writer: "robot",
            contents: RandomGenerator.array(() => ({
                id: "id",
                title: RandomGenerator.string(),
                body: RandomGenerator.string(),
                files: RandomGenerator.array(() => ({
                    // id: "id",
                    name: RandomGenerator.string(),
                    extension: RandomGenerator.string(),
                    url: RandomGenerator.string(),
                })),
                created_at: new Date().toString(),
            })),
            answer: null,
            created_at: new Date().toString(),
            hit: 0,
        };
        return question;
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
            files: Omit<IAttachmentFile, "id">[];
        }
    }

    // MISC
    interface IAttachmentFile {
        id: string;
        name: string;
        extension: string | null;
        url: string;
    }

    export const SPOILERS: Spoiler<ObjectGenericUnion>[] = [
        (input) => {
            input.id = null!;
            return ["$input"];
        },
        (input) => {
            input.hit = undefined!;
            return ["$input"];
        },
        (input) => {
            input.answer = {} as any;
            return ["$input"];
        },
    ];
}
