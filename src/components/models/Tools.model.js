import Discord from "../Icons/Tools/Discord.astro";
import Figma from "../Icons/Tools/Figma.astro";
import Git from "../Icons/Tools/Git.astro";
import Github from "../Icons/Tools/Github.astro";
import MySQL from "../Icons/Tools/MySQL.astro";
import Postman from "../Icons/Tools/Postman.astro";
import SQLServer from "../Icons/Tools/SQLServer.astro";
import VSC from "../Icons/Tools/VSC.astro";
import MongoDB from "../Icons/Tools/mongoDB.astro";
import Sqlite from "../Icons/Tools/sqlite.astro";
import AndroidStudio from "../Icons/Tools/AndroidStudio.astro";
import { LEVEL } from "./Level.model.js";



export const TOOLS = [
    {
        Name: "Postman",
        Level: LEVEL.Intermedio,
        Icon: Postman
    },
    {
        Name: "Figma",
        Level: LEVEL.Intermedio,
        Icon: Figma
    },
    {
        Name: "VSCode",
        Level: LEVEL.Avanzado,
        Icon: VSC
    },
    {
        Name: "Discord",
        Level: LEVEL.IntermedioAvanzado,
        Icon: Discord
    },
    {
        Name: "Git",
        Level: LEVEL.Intermedio,
        Icon: Git
    },
    {
        Name: "Github",
        Level: LEVEL.Intermedio,
        Icon: Github
    },
    {
        Name: "Android Studio",
        Level: LEVEL.IntermedioAvanzado,
        Icon: AndroidStudio
    },
    {
        Name: "SQL Server",
        Level: LEVEL.Intermedio,
        Icon: SQLServer
    },
    {
        Name: "MySQL",
        Level: LEVEL.IntermedioAvanzado,
        Icon: MySQL
    },
    {
        Name: "SQLite3",
        Level: LEVEL.IntermedioAvanzado,
        Icon: Sqlite
    },
    {
        Name: "MongoDB",
        Level: LEVEL.Intermedio,
        Icon: MongoDB
    }
]