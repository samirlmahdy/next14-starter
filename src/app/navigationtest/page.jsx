"use client";

import Link from "next/link";
import React from "react";

const NavigationTestPage = () => {
  return (
    <div>
      <Link
        href="/"
        prefetch={false}
      >
        Click here
      </Link>
      <button>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
