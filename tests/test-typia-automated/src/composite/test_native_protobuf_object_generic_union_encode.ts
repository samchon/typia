import typia from "typia";

export type ObjectGenericUnion = {
  value: ObjectGenericUnion.ISaleEntireArticle;
};

namespace ObjectGenericUnion {
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

  interface ISaleInquiry<
    Content extends ISaleInquiry.IContent,
  > extends ISaleArticle<Content> {
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

  export interface IAttachmentFile {
    name: string;
    extension: string | null;
    url: string;
  }
}

const encode = typia.protobuf.createEncode<ObjectGenericUnion>();
const fixture = { encode };

/**
 * Verifies protobuf object generic union encode in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * protobufObjectGenericUnionSource declarations; the former
 * protobufObjectGenericUnionRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from protobufObjectGenericUnionRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The public encode contract requires Uint8Array output for the authored nested generic union value. This retained assembly smoke case has no independent byte oracle and cannot detect arbitrary wire-content corruption; generated protobuf matrix cases own byte/round-trip distinctions.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_protobuf_object_generic_union_encode in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed protobufObjectGenericUnionSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/protobuf_object_generic_union_encode_transform_test.go protobufObjectGenericUnionRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_protobuf_object_generic_union_encode = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const { encode }: any = mod;

  const input: any = {
    value: {
      id: "id",
      writer: "robot",
      contents: [
        {
          id: "content",
          title: "title",
          body: "body",
          files: [
            { name: "file", extension: null, url: "https://typia.io/file" },
          ],
          created_at: "now",
        },
      ],
      answer: null,
      created_at: "now",
      hit: 0,
    },
  };

  const encoded: any = encode(input);
  if (!(encoded instanceof Uint8Array)) {
    throw new Error("encode() did not return Uint8Array");
  }
};
