import { Bleed } from "nextra-theme-docs";

const HomeLayout = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <Bleed full>
    <div
      style={{
        // marginLeft: "-1.5rem",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "-1.5rem",
      }}
    >
      {props.children}
    </div>
  </Bleed>
);
export default HomeLayout;
