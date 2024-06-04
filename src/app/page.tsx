'use client'
import { useEffect, useState } from "react";
import http from "../app/services/http";

export default function Home() {
  useEffect(() => {

    http.get("/users").then((res) => {
      console.log(res.data);
    })

  }
  , []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
