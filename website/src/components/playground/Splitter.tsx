import { useState } from "react";

const CENTER = 100 / 2;

// https://github.com/sinclairzx81/typebox-workbench/blob/main/src/layout/splitter.tsx
const Splitter = (props: Splitter.IProps) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging === false) return;

    const next: number = ((e.clientX + CENTER) / window.innerWidth) * 100;
    const min: number = props.minWidth ?? 10;
    const max: number = 100 - min;

    setWidth(Math.min(Math.max(next, min), max));
  };

  const styles: IStyles = {
    container: {
      borderTop: "2px solid skyblue",
      height: "calc(100vh - 80px)",
      display: "flex",
      width: "100%",
      position: "relative",
      flexDirection: "row",
      overflow: "hidden",
    },
    left: {
      height: "100%",
      width: `calc(${width}% - ${CENTER}px)`,
      position: "relative",
      zIndex: 1,
    },
    right: {
      height: "100%",
      width: `calc(${100 - width}% + ${CENTER}px)`,
      position: "relative",
      zIndex: 1,
    },
    gutter: {
      height: "100%",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `calc(${width}% - ${CENTER}px)`,
      width: "10px",
      cursor: "col-resize",
      zIndex: 2,
      background: "gray",
      border: dragging || hovering ? "2px solid skyblue" : undefined,
      borderRadius: dragging || hovering ? "4px" : undefined,
    },
  };
  return (
    <div
      className="splitter"
      style={styles.container}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setDragging(false)}
    >
      <div style={styles.left}>{props.children[0]}</div>
      <div
        className="gutter"
        style={styles.gutter}
        onMouseDown={() => setDragging(true)}
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      />
      <div style={styles.right}>{props.children[1]}</div>
    </div>
  );
};
namespace Splitter {
  export interface IProps {
    minWidth?: number;
    children: [React.ReactNode, React.ReactNode];
  }
}

interface IStyles {
  container: React.CSSProperties;
  left: React.CSSProperties;
  right: React.CSSProperties;
  gutter: React.CSSProperties;
}

export default Splitter;
