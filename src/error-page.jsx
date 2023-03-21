import { Link, useRouteError } from "react-router-dom";
import Button1 from "./Component/Button";

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
      <div className="text-sm">
        <Link to="/">
          <Button1 contactProps="Kembali" />
        </Link>
      </div>
    </div>
  );
}
