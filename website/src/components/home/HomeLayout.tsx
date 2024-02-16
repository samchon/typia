const HomeLayout = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
      id={props.id}
    style={{
      marginLeft: "-1.5rem",
      marginRight: "-1.5rem",
    }}
  >
    {props.children}
  </div>
);
export default HomeLayout;
