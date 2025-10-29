/* Client Component

The child components/modules
need not have to include the
'use client' directive

because once we mentioned the next app
supports the server-client boundary
*/
"use client";
import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <button className={styles.button} onClick={() => setCounter((c) => c + 1)}>
      {counter}
    </button>
  );
}

export default Counter;
