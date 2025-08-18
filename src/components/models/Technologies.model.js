import Angular from "../Icons/Technologies/Angular.astro";
import Django from "../Icons/Technologies/Django.astro";
import Express from "../Icons/Technologies/Express.astro";
import Nestjs from "../Icons/Technologies/Nestjs.astro";
import Nodejs from "../Icons/Technologies/Nodejs.astro";
import React from "../Icons/Technologies/React.astro";
import TypeScript from "../Icons/Technologies/TypeScript.astro";
import Dotnet from "../Icons/Technologies/dotnet.astro";
import Tailwindcss from "../Icons/Technologies/tailwindcss.astro";
import Ionic from "../Icons/Technologies/Ionic.astro";
import { LEVEL } from "./Level.model.js";



export const TECHNOLOGIES = [
    {
        Name: "TailwindCSS",
        Level: LEVEL.Intermedio.level,
        clase: LEVEL.Intermedio.color,
        Icon: Tailwindcss
    }, {
        Name: "Django",
        Level: LEVEL.Intermedio.level,
        clase: LEVEL.Intermedio.color,
        Icon: Django
    },
    {
        Name: "TypeScript",
        Level: LEVEL.IntermedioBasico.level,
        clase: LEVEL.IntermedioBasico.color,
        Icon: TypeScript
    },
    {
        Name: "Ionic",
        Level: LEVEL.IntermedioAvanzado.level,
        clase: LEVEL.IntermedioAvanzado.color,
        Icon: Ionic
    },
    {
        Name: "Angular",
        Level: LEVEL.Basico.level,
        clase: LEVEL.Basico.color,
        Icon: Angular
    },
    {
        Name: "React",
        Level: LEVEL.Basico.level,
        clase: LEVEL.Basico.color,
        Icon: React
    },
    {
        Name: "NodeJS",
        Level: LEVEL.Intermedio.level,
        clase: LEVEL.Intermedio.color,
        Icon: Nodejs
    },
    {
        Name: "Express",
        Level: LEVEL.IntermedioAvanzado.level,
        clase: LEVEL.IntermedioAvanzado.color,
        Icon: Express
    },
    {
        Name: "NestJS",
        Level: LEVEL.Basico.level,
        clase: LEVEL.Basico.color,
        Icon: Nestjs
    },
]
