"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Saber da técnica, da economia, do concreto.",
    children:
      "Saber do tempo. Do vento. Da chuva. Saber das pessoas. Da vida. Das paixões.",
  },
  {
    icon: HeartIcon,
    title: "As cores, a luz, as idéias e os planos.",
    children:
      "Saber fazer. Com arte.",
  },
];

export function Features() {
  return (
    <section className="py-10 px-4 mt-24">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Sobre nós
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          A concepção de um projeto exige muita dedicação e estudo.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Tudo é importante. O todo é fundamental.
          Traduzir os sonhos, os desejos.
          Com autenticidade. Com honestidade.
          Materializar os sentimentos.
          Criar espaços.
          Construir esses espaços e torná-los realidade.
          Espaços para morar, para trabalhar, para aprender e ensinar.
          Espaços para viver.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
