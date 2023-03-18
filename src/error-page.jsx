import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-screen font-bold text-3xl text-center"
    >
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h1>Halaman Tidak Ditemukan!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
