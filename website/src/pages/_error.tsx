type ErrorPageProps = {
  statusCode?: number;
};

export default function ErrorPage(props: ErrorPageProps) {
  const statusCode = props.statusCode ?? 500;

  return (
    <main style={{ padding: "3rem 1.5rem", fontFamily: "sans-serif" }}>
      <h1>{statusCode}</h1>
      <p>Something went wrong while rendering this page.</p>
    </main>
  );
}
