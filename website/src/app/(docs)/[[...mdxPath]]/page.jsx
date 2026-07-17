import { generateStaticParamsFor, importPage } from "nextra/pages";

import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";

const generateAllStaticParams = generateStaticParamsFor("mdxPath");

export async function generateStaticParams() {
  const params = await generateAllStaticParams();
  return params.filter(({ mdxPath = [] }) => mdxPath[0] !== "blog");
}

export async function generateMetadata(props) {
  const params = await props.params;

  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;

  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  const isDocsPage = params.mdxPath?.[0] === "docs";

  return (
    <Wrapper toc={toc} metadata={metadata}>
      {isDocsPage ? (
        <span className="typia-docs-page-marker" aria-hidden="true" hidden />
      ) : null}
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
