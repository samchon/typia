import { compileMdx } from "nextra/compile";
import { MDXRemote } from "nextra/mdx-remote";

import { getLocalSourceFile } from "./internal/getLocalSourceFile";

export const LocalSource = async (props: {
  path: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlight?: string;
}) => {
  const content: string = await getLocalSourceFile(props.path);
  const header: string = [
    `${BRACKET}typescript`,
    !!props.filename?.length
      ? ` filename=${JSON.stringify(props.filename)}`
      : "",
    props.showLineNumbers ? " showLineNumbers" : "",
    !!props.highlight?.length ? ` {${props.highlight}}` : "",
  ].join("");
  const raw: string = await compileMdx(
    [header, content.trim(), BRACKET].join("\n"),
  );
  return <MDXRemote compiledSource={raw} />;
};
export default LocalSource;

const BRACKET = "```";
