import { Link } from "react-router-dom";

export default function SimpleFooter() {
  return (
    <>
      <footer className="pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:justify-between">
            <ul className="list-unstyled flex gap-8">
              <li>
                <Link
                  to="/"
                  className="text-white font-medium block pb-2 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white font-medium block pb-2 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="text-sm text-white font-medium">
              Copyright © {new Date().getFullYear()} by Food Token Generator{" "}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
