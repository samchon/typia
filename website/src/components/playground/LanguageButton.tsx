const LanguageButton = (props: {
  language: "typescript" | "javascript";
  title: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        marginTop: 10,
        marginLeft: 20,
        marginRight: 10,
        width: 50,
      }}
    >
      <img
        src={`/images/playground/${props.language}.png`}
        title={props.title}
        onClick={props.onClick}
        style={{
          width: 50,
          height: 50,
          border: props.selected ? "2px solid white" : "1px solid #666666",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};
export default LanguageButton;
