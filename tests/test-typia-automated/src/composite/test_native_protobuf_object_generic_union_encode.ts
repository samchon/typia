import typia from "typia";

/**
 * @evidence contracts/testing.md#behavioral-verification This wrapper is transformed by the local encode factory and exercised by the exported runtime test.
 * @evidence contracts/testing.md#independent-expectations The value property carries the authored article union; the runtime oracle checks Uint8Array assembly only, not wire bytes.
 * @evidence contracts/testing.md#distinguishing-cases The enrolled question-like value includes nested contents/files and a null answer; no malformed input is asserted.
 * @evidence contracts/testing.md#execution-ownership The local automated composite owns this fixture and its single shared worker execution.
 */
export type ObjectGenericUnion = {
  value: ObjectGenericUnion.ISaleEntireArticle;
};

namespace ObjectGenericUnion {
  /**
   * @evidence contracts/testing.md#behavioral-verification This union reaches the encode factory through the wrapper value property.
   * @evidence contracts/testing.md#independent-expectations Question and review reuse a generic inquiry with different content shapes; runtime checks assembly output type only.
   * @evidence contracts/testing.md#distinguishing-cases The authored runtime value exercises question content without a review score; no review-specific byte expectation is claimed.
   * @evidence contracts/testing.md#execution-ownership The enclosing composite supplies the only fixture and invocation; this alias adds no runner.
   */
  export type ISaleEntireArticle = ISaleQuestion | ISaleReview;
  type ISaleQuestion = ISaleInquiry<ISaleQuestion.IContent>;
  namespace ISaleQuestion {
    /**
     * This content alias is the generic argument for the question inquiry
     * transformed by encode. The alias retains ordinary article content fields;
     * the runtime input authors their nested values independently. A populated
     * contents array contains one file and its null extension; output type is
     * the only runtime oracle. The exported composite owns the private question
     * route and shared worker; no separate invocation exists here.
     */
    export type IContent = ISaleInquiry.IContent;
  }
  type ISaleReview = ISaleInquiry<ISaleReview.IContent>;
  namespace ISaleReview {
    /**
     * This review content is collected through the article union during native
     * encoding transformation. Its numeric score distinguishes the authored
     * review generic argument from question content. The retained runtime input
     * has no score and does not separately exercise a review payload or score
     * rejection. The enclosing composite owns this compile fixture and shared
     * execution; this interface has no independent runner.
     */
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
    /**
     * This alias constrains the generic inquiry content used by both article
     * union arms. The authored article content inheritance fixes id,
     * created_at, title, body and files declarations. Populated question
     * content traverses the alias; the runtime assertion cannot certify
     * field-wise wire correctness. The local encode fixture and exported
     * composite own this dependency without another project or worker.
     */
    export type IContent = ISaleArticle.IContent;
  }
  type ISaleAnswer = ISaleArticle<ISaleAnswer.IContent>;
  namespace ISaleAnswer {
    /**
     * This alias defines the content argument of an answer reached through the
     * nullable inquiry answer property. It reuses article content rather than
     * the review score extension. The retained runtime value uses answer null;
     * non-null answer contents are compile fixtures without a separate runtime
     * verdict. The enclosing composite owns the nullable answer route and
     * shared native worker.
     */
    export type IContent = ISaleArticle.IContent;
  }

  interface ISaleArticle<Content extends ISaleArticle.IContent> {
    id: string;
    hit: number;
    contents: Content[];
    created_at: string;
  }
  namespace ISaleArticle {
    /**
     * Generic article contents use this interface in the actual encoding
     * fixture. Its id and created_at extend independently authored update
     * fields; runtime checks assembly output type only. One authored content
     * carries id content and created_at now alongside update fields;
     * missing-field rejection is not asserted. The local factory and exported
     * composite own this inherited fixture in the existing worker.
     */
    export interface IContent extends IUpdate {
      id: string;
      created_at: string;
    }
    /**
     * This inherited content base contributes title, body and attachment array
     * to native encode collection. The runtime value authors title/body/files
     * before encoding; the oracle does not infer them from generated output.
     * The preserved payload has one populated attachment; empty files and
     * malformed update fields have no separate verdict. The enclosing composite
     * owns this inherited dependency and shared invocation.
     */
    export interface IUpdate {
      title: string;
      body: string;
      files: IAttachmentFile[];
    }
  }

  /**
   * @evidence contracts/testing.md#behavioral-verification Attachment array items traverse this interface in the transformed article encoder.
   * @evidence contracts/testing.md#independent-expectations The authored name, nullable extension and URL declarations determine the nested fixture shape.
   * @evidence contracts/testing.md#distinguishing-cases One file uses extension null and a literal URL; neither alternative extensions nor exact bytes are asserted.
   * @evidence contracts/testing.md#execution-ownership The local composite supplies the attachment and owns worker execution; this fixture creates no subprocess.
   */
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
 * @evidence contracts/testing.md#execution-ownership This entry owns private question/review generic content, inquiry constraints, nullable answer content and inherited article/update declarations. Question content and its file are exercised; review score and non-null answer remain collected fixtures. DynamicExecutor uses the shared worker, and private namespace members have descriptive prose rather than separate public acknowledgements.
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
