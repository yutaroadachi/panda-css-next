import { css } from "../../styled-system/css";

export default function Page() {
  return (
    <main>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </h1>
    </main>
  );
}
