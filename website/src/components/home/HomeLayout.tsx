import { ReactNode } from "react";

/**
 * No negative margins here: `global.css` drops Nextra's sidebar spacer and
 * content-width cap for `.typia-landing`, so the article is already full
 * bleed. The old -15rem pull was compensating for that column and would now
 * push the sections off-center and past the viewport.
 *
 * `className` must land on a real element: the landing passes `typia-landing`
 * and `global.css` keys every full-bleed rule off that class.
 */
const HomeLayout = (props: { children?: ReactNode; className?: string }) => (
  <div className={`[&>*]:max-w-full ${props.className ?? ""}`}>
    {props.children}
  </div>
);
export default HomeLayout;
